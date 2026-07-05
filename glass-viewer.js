/* <glass-viewer src="model.glb" env="scene.jpg">
   Photoreal glass on location: the photograph is a real backdrop plane inside
   the scene (softly blurred, cover-fit), the mesh gets physically-based clear
   glass that refracts and reflects it, and the user spins the piece itself.
   Fixed camera = the photo never warps; the vase sits on the surface line. */
(() => {
  class GlassViewer extends HTMLElement {
    static get observedAttributes() { return ['flowers']; }

    get flowers() { return this._flowersOn ? 'true' : 'false'; }
    set flowers(v) {
      this._flowersOn = v === true || v === 'true';
      if (this._updateFlowers) this._updateFlowers();
    }

    attributeChangedCallback(_n, _o, v) {
      this._flowersOn = v === 'true';
      if (this._updateFlowers) this._updateFlowers();
    }

    connectedCallback() {
      if (this._inited) return;
      this._inited = true;
      this.style.display = 'block';
      // Fill the mount even when the host doesn't give this element an
      // explicit size (mobile browsers collapsed it to the canvas default).
      if (!this.style.height) this.style.height = '100%';
      if (!this.style.width) this.style.width = '100%';
      if (this.parentElement) {
        const pp = getComputedStyle(this.parentElement).position;
        if (pp === 'absolute' || pp === 'relative') {
          this.style.position = 'absolute';
          this.style.inset = '0';
        }
      }
      this._init().catch((e) => console.error('glass-viewer:', e));
    }

    async _init() {
      const THREE = await import('three');
      const { GLTFLoader } = await import('three/addons/loaders/GLTFLoader.js');

      const src = this.getAttribute('src');
      const env = this.getAttribute('env');

      const renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.05;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.domElement.style.cssText = 'width:100%;height:100%;display:block;touch-action:none;cursor:grab;';
      this.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
      camera.position.set(0, 0.32, 4.4);
      camera.lookAt(0, -0.08, 0);

      // Load the location photo once; sharp copy feeds reflections, a blurred
      // copy becomes the backdrop plane the glass refracts.
      const img = await new Promise((res, rej) => {
        const i = new Image();
        i.crossOrigin = 'anonymous';
        i.onload = () => res(i);
        i.onerror = rej;
        i.src = env;
      });

      const sharpTex = new THREE.Texture(img);
      sharpTex.needsUpdate = true;
      sharpTex.mapping = THREE.EquirectangularReflectionMapping;
      sharpTex.colorSpace = THREE.SRGBColorSpace;
      scene.environment = sharpTex;

      const c = document.createElement('canvas');
      c.width = img.naturalWidth;
      c.height = img.naturalHeight;
      const ctx = c.getContext('2d');
      ctx.filter = 'blur(4.5px)';
      ctx.drawImage(img, 0, 0);
      const blurTex = new THREE.CanvasTexture(c);
      blurTex.colorSpace = THREE.SRGBColorSpace;

      // Backdrop plane, cover-fit to the camera frustum at its depth.
      const PLANE_Z = -5;
      const backdrop = new THREE.Mesh(
        new THREE.PlaneGeometry(1, 1),
        new THREE.MeshBasicMaterial({ map: blurTex })
      );
      backdrop.position.set(0, 0, PLANE_Z);
      scene.add(backdrop);
      const imgAspect = img.naturalWidth / img.naturalHeight;
      const fitBackdrop = () => {
        const dist = camera.position.z - PLANE_Z;
        const h = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * dist;
        const w = h * camera.aspect;
        let pw = w, ph = w / imgAspect;
        if (ph < h) { ph = h; pw = h * imgAspect; }
        backdrop.scale.set(pw * 1.15, ph * 1.15, 1);
      };

      const key = new THREE.DirectionalLight(0xfff0da, 1.1);
      key.position.set(3, 4, 2.5);
      scene.add(key);
      // Cinematic backlight: warm rim from behind the piece, toward the camera.
      const rim = new THREE.DirectionalLight(0xffd9a0, 3.2);
      rim.position.set(-0.4, 2.2, -3.5);
      rim.target.position.set(0, -0.2, 1);
      scene.add(rim, rim.target);
      scene.add(new THREE.AmbientLight(0xffe9cf, 0.18));

      const glass = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        metalness: 0,
        roughness: 0.05,
        transmission: 1,
        thickness: 1.5,
        ior: 1.5,
        envMap: sharpTex,
        envMapIntensity: 1.25,
        clearcoat: 0.7,
        clearcoatRoughness: 0.12,
        specularIntensity: 1,
        attenuationColor: new THREE.Color(0xfdf8f0),
        attenuationDistance: 2.5,
      });

      const gltf = await new GLTFLoader().loadAsync(src);
      const pivot = new THREE.Group();
      const root = gltf.scene;
      root.traverse((o) => {
        if (o.isMesh) {
          o.material = glass;
          o.geometry.computeVertexNormals();
        }
      });
      const box = new THREE.Box3().setFromObject(root);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      root.position.sub(center);
      const s = 1.15 / Math.max(size.x, size.y, size.z);
      root.scale.setScalar(s);
      pivot.add(root);

      // Sit the base on the "table line" of the photograph.
      const BASE_Y = -1.05;
      pivot.position.y = BASE_Y + (size.y * s) / 2;
      scene.add(pivot);

      // Optional flower arrangement: chroma-keyed photograph on two crossed
      // planes standing in the mouth of the vase, toggled via the `flowers` attr.
      const flowersSrc = this.getAttribute('flowers-src') || this['flowersSrc'] || this.getAttribute('flowerssrc');
      this._flowersOn = this._flowersOn || this.getAttribute('flowers') === 'true';
      let flowersGroup = null;
      let buildingFlowers = null;
      const buildFlowers = () => {
        if (buildingFlowers || !flowersSrc) return buildingFlowers;
        buildingFlowers = (async () => {
          const fimg = await new Promise((res, rej) => {
            const i = new Image();
            i.crossOrigin = 'anonymous';
            i.onload = () => res(i);
            i.onerror = rej;
            i.src = flowersSrc;
          });
          const fc = document.createElement('canvas');
          fc.width = fimg.naturalWidth;
          fc.height = fimg.naturalHeight;
          const fctx = fc.getContext('2d');
          fctx.drawImage(fimg, 0, 0);
          const d = fctx.getImageData(0, 0, fc.width, fc.height);
          const px = d.data;
          for (let i = 0; i < px.length; i += 4) {
            const r = px[i], g = px[i + 1], b = px[i + 2];
            if (g > 70 && g > r * 1.18 && g > b * 1.18) {
              px[i + 3] = 0;
            } else if (g > r && g > b) {
              px[i + 1] = Math.min(g, Math.round((r + b) / 2 * 1.2));
            }
          }
          fctx.putImageData(d, 0, 0);
          const ftex = new THREE.CanvasTexture(fc);
          ftex.colorSpace = THREE.SRGBColorSpace;
          const fh = 2.6;
          const fw = fh * (fc.width / fc.height);
          const fmat = new THREE.MeshBasicMaterial({
            map: ftex, transparent: false, alphaTest: 0.4,
            side: THREE.DoubleSide,
          });
          flowersGroup = new THREE.Group();
          // Three crossed planes at 60° with slight tilt/scale variation so the
          // arrangement keeps volume as the piece turns, instead of reading flat.
          for (let k = 0; k < 3; k++) {
            const p = new THREE.Mesh(new THREE.PlaneGeometry(fw, fh), fmat);
            p.rotation.y = (Math.PI / 3) * k;
            p.rotation.z = (k - 1) * 0.05;
            const sv = 1 - k * 0.07;
            p.scale.set(sv, sv, 1);
            p.position.y = (k === 1 ? 0.03 : k === 2 ? -0.02 : 0);
            flowersGroup.add(p);
          }
          flowersGroup.position.y = (size.y * s) / 2 - 0.6 + fh / 2;
          pivot.add(flowersGroup);
        })();
        return buildingFlowers;
      };
      this._updateFlowers = () => {
        if (this._flowersOn) {
          const p = buildFlowers();
          if (p) p.then(() => { if (flowersGroup) flowersGroup.visible = this._flowersOn; });
        } else if (flowersGroup) {
          flowersGroup.visible = false;
        }
      };
      this._updateFlowers();

      // Soft contact shadow so it sits, rather than floats.
      const sc = document.createElement('canvas');
      sc.width = sc.height = 256;
      const sctx = sc.getContext('2d');
      const grad = sctx.createRadialGradient(128, 128, 10, 128, 128, 128);
      grad.addColorStop(0, 'rgba(30,18,12,0.42)');
      grad.addColorStop(0.6, 'rgba(30,18,12,0.16)');
      grad.addColorStop(1, 'rgba(30,18,12,0)');
      sctx.fillStyle = grad;
      sctx.fillRect(0, 0, 256, 256);
      const shadowTex = new THREE.CanvasTexture(sc);
      const shadow = new THREE.Mesh(
        new THREE.PlaneGeometry(1.15, 0.48),
        new THREE.MeshBasicMaterial({ map: shadowTex, transparent: true, depthWrite: false })
      );
      shadow.rotation.x = -Math.PI / 2;
      shadow.position.y = BASE_Y + 0.005;
      scene.add(shadow);

      // Interaction: drag spins the piece; wheel/pinch comes closer.
      let dragging = false, lastX = 0, lastY = 0, idle = true;
      let idleTimer = null;
      const el = renderer.domElement;
      const wake = () => {
        idle = false;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(() => { idle = true; }, 4000);
      };
      el.addEventListener('pointerdown', (e) => {
        dragging = true;
        lastX = e.clientX; lastY = e.clientY;
        el.setPointerCapture(e.pointerId);
        el.style.cursor = 'grabbing';
        wake();
      });
      el.addEventListener('pointermove', (e) => {
        if (!dragging) return;
        pivot.rotation.y += (e.clientX - lastX) * 0.009;
        pivot.rotation.x = Math.max(-0.65, Math.min(0.65, pivot.rotation.x + (e.clientY - lastY) * 0.006));
        lastX = e.clientX; lastY = e.clientY;
        wake();
      });
      const endDrag = () => { dragging = false; el.style.cursor = 'grab'; };
      el.addEventListener('pointerup', endDrag);
      el.addEventListener('pointercancel', endDrag);
      el.addEventListener('wheel', (e) => {
        e.preventDefault();
        camera.position.z = Math.max(2.1, Math.min(5.2, camera.position.z + e.deltaY * 0.0022));
        camera.lookAt(0, -0.08, 0);
        fitBackdrop();
        wake();
      }, { passive: false });

      const resize = () => {
        const w = this.clientWidth || 1;
        const h = this.clientHeight || 1;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        fitBackdrop();
      };
      new ResizeObserver(resize).observe(this);
      resize();

      renderer.setAnimationLoop(() => {
        if (idle && !dragging) pivot.rotation.y += 0.0035;
        renderer.render(scene, camera);
      });
    }
  }
  customElements.define('glass-viewer', GlassViewer);
})();
