/* @ds-bundle: {"format":4,"namespace":"VetroStudioDesignSystem_316be8","components":[{"name":"ProductCard","sourcePath":"components/commerce/ProductCard.jsx"},{"name":"QuantityStepper","sourcePath":"components/commerce/QuantityStepper.jsx"},{"name":"Accordion","sourcePath":"components/core/Accordion.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"Select","sourcePath":"components/core/Select.jsx"},{"name":"AnnouncementBar","sourcePath":"components/navigation/AnnouncementBar.jsx"},{"name":"Footer","sourcePath":"components/navigation/Footer.jsx"},{"name":"Header","sourcePath":"components/navigation/Header.jsx"}],"sourceHashes":{"components/commerce/ProductCard.jsx":"0590ddf0d155","components/commerce/QuantityStepper.jsx":"2de0d4bce0bc","components/core/Accordion.jsx":"7d4351263b0c","components/core/Badge.jsx":"1858c25c5142","components/core/Button.jsx":"2498c0709db0","components/core/Input.jsx":"9814dc4bf522","components/core/Select.jsx":"7236685f60a0","components/navigation/AnnouncementBar.jsx":"14be2e566954","components/navigation/Footer.jsx":"7d9e511f6491","components/navigation/Header.jsx":"7daeb88491af","ui_kits/vetro-site/CartDrawer.jsx":"e89f336c45f5","ui_kits/vetro-site/HomeScreen.jsx":"e7e648f60734","ui_kits/vetro-site/ProductScreen.jsx":"47a0a29451f7","ui_kits/vetro-site/StudioScreen.jsx":"4192b9ddd13c","ui_kits/vetro-site/data.js":"ad7fffd1b3e1"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.VetroStudioDesignSystem_316be8 = window.VetroStudioDesignSystem_316be8 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/commerce/QuantityStepper.jsx
try { (() => {
/** Quantity stepper with typographic +/− controls. */
function QuantityStepper({
  value = 1,
  min = 1,
  max = 9,
  onChange,
  style
}) {
  const btn = disabled => ({
    width: '44px',
    height: '44px',
    background: 'none',
    border: 'none',
    font: '400 18px/1 var(--font-sans)',
    color: disabled ? 'var(--stone-400)' : 'var(--text-body)',
    cursor: disabled ? 'default' : 'pointer'
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-hairline)',
      borderRadius: 'var(--radius-xs)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: btn(value <= min),
    disabled: value <= min,
    onClick: () => onChange && onChange(value - 1)
  }, "\u2212"), /*#__PURE__*/React.createElement("span", {
    style: {
      minWidth: '32px',
      textAlign: 'center',
      font: 'var(--text-body)'
    }
  }, value), /*#__PURE__*/React.createElement("button", {
    style: btn(value >= max),
    disabled: value >= max,
    onClick: () => onChange && onChange(value + 1)
  }, "+"));
}
Object.assign(__ds_scope, { QuantityStepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/QuantityStepper.jsx", error: String((e && e.message) || e) }); }

// components/core/Accordion.jsx
try { (() => {
/** Hairline accordion for product details (materials, shipping, care). items: [{title, content}] */
function Accordion({
  items = [],
  style
}) {
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-hairline)',
      ...style
    }
  }, items.map((item, i) => {
    const isOpen = open === i;
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: '1px solid var(--border-hairline)'
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => setOpen(isOpen ? -1 : i),
      style: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '16px 2px',
        font: 'var(--text-label)',
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: 'var(--text-body)'
      }
    }, /*#__PURE__*/React.createElement("span", null, item.title), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: '15px',
        fontWeight: 400
      }
    }, isOpen ? '−' : '+')), /*#__PURE__*/React.createElement("div", {
      style: {
        overflow: 'hidden',
        maxHeight: isOpen ? '300px' : '0',
        transition: 'max-height var(--duration-slow) var(--ease-out)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        font: 'var(--text-body)',
        color: 'var(--text-muted)',
        padding: '0 2px 18px'
      }
    }, item.content)));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
/** Small pill badge. tone: 'outline' | 'solid' | 'muted' */
function Badge({
  tone = 'outline',
  children,
  style
}) {
  const tones = {
    outline: {
      border: '1px solid var(--border-strong)',
      color: 'var(--burgundy-800)',
      background: 'transparent'
    },
    solid: {
      border: '1px solid var(--burgundy-800)',
      color: 'var(--text-on-inverse)',
      background: 'var(--burgundy-800)'
    },
    muted: {
      border: '1px solid var(--border-hairline)',
      color: 'var(--text-muted)',
      background: 'var(--surface-card)'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/commerce/ProductCard.jsx
try { (() => {
/** Product tile for the catalogue grid. If no image src is given, renders a labelled photography placeholder tinted by colourway. */
function ProductCard({
  name,
  descriptor,
  price,
  colourway = 'clear',
  image,
  badge,
  sold = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const tints = {
    clear: 'var(--glass-clear)',
    smoke: 'var(--glass-smoke)',
    rose: 'var(--glass-rose)',
    amber: 'var(--glass-amber)'
  };
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: '4 / 5',
      overflow: 'hidden',
      background: tints[colourway] || tints.clear,
      border: `1px solid ${hover ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }, image ? /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transform: hover ? 'scale(1.03)' : 'scale(1)',
      transition: 'transform var(--duration-slow) var(--ease-out)'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(59,10,20,0.45)',
      textAlign: 'center',
      padding: '16px'
    }
  }, "Photography", /*#__PURE__*/React.createElement("br", null), "placeholder"), badge && /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    tone: sold ? 'solid' : 'outline',
    style: {
      position: 'absolute',
      top: '12px',
      left: '12px',
      background: sold ? undefined : 'var(--ivory-050)'
    }
  }, badge)), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: '14px',
      display: 'flex',
      flexDirection: 'column',
      gap: '3px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: '12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)',
      textDecoration: hover ? 'underline' : 'none',
      textUnderlineOffset: '4px'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body)',
      color: sold ? 'var(--text-muted)' : 'var(--text-body)',
      whiteSpace: 'nowrap'
    }
  }, sold ? 'Sold' : price)), descriptor && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, descriptor)));
}
Object.assign(__ds_scope, { ProductCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/commerce/ProductCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
/** Primary action button. variant: 'primary' | 'outline' | 'ghost'; size: 'md' | 'lg' */
function Button({
  variant = 'primary',
  size = 'md',
  inverse = false,
  disabled = false,
  children,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 500,
    fontSize: '12px',
    letterSpacing: 'var(--tracking-label)',
    textTransform: 'uppercase',
    padding: size === 'lg' ? '18px 40px' : '13px 28px',
    border: '1px solid transparent',
    borderRadius: 'var(--radius-0)',
    cursor: disabled ? 'default' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background var(--duration-fast) var(--ease-out), color var(--duration-fast) var(--ease-out), opacity var(--duration-fast) var(--ease-out)',
    background: 'none'
  };
  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--accent-hover)' : 'var(--accent)',
      color: 'var(--text-on-inverse)',
      ...(inverse ? {
        background: hover && !disabled ? 'var(--ivory-100)' : 'var(--ivory-050)',
        color: 'var(--burgundy-800)'
      } : {})
    },
    outline: {
      borderColor: inverse ? 'var(--ivory-050)' : 'var(--border-strong)',
      color: inverse ? 'var(--text-on-inverse)' : 'var(--burgundy-800)',
      background: hover && !disabled ? 'var(--hover-tint)' : 'transparent'
    },
    ghost: {
      color: inverse ? 'var(--text-on-inverse)' : 'var(--burgundy-800)',
      opacity: disabled ? 0.4 : hover ? 0.7 : 1,
      padding: size === 'lg' ? '18px 8px' : '13px 8px',
      textDecoration: 'underline',
      textUnderlineOffset: '4px'
    }
  };
  return /*#__PURE__*/React.createElement("button", {
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      ...base,
      ...variants[variant],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
/** Text input with uppercase label above. */
function Input({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  error,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: error ? 'var(--state-error)' : 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      padding: '13px 14px',
      border: `1px solid ${error ? 'var(--state-error)' : focus ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-xs)',
      outline: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out)'
    }
  }), error && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--state-error)'
    }
  }, error));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/Select.jsx
try { (() => {
/** Native select styled to match Input. options: array of strings or {value, label}. */
function Select({
  label,
  options = [],
  value,
  onChange,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const opts = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", {
    value: value,
    onChange: onChange ? e => onChange(e.target.value) : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: '100%',
      font: 'var(--text-body)',
      color: 'var(--text-body)',
      background: 'var(--surface-card)',
      padding: '13px 36px 13px 14px',
      border: `1px solid ${focus ? 'var(--border-strong)' : 'var(--border-hairline)'}`,
      borderRadius: 'var(--radius-xs)',
      outline: 'none',
      appearance: 'none',
      WebkitAppearance: 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out)',
      cursor: 'pointer'
    }
  }, opts.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '14px',
      top: '50%',
      transform: 'translateY(-58%)',
      color: 'var(--text-muted)',
      pointerEvents: 'none',
      fontSize: '11px'
    }
  }, "\u25BE")));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Select.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AnnouncementBar.jsx
try { (() => {
/** Slim burgundy bar above the header for shipping notices. */
function AnnouncementBar({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      textAlign: 'center',
      padding: '10px 16px',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { AnnouncementBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AnnouncementBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Footer.jsx
try { (() => {
/** Burgundy site footer: newsletter, link columns, mono signoff. columns: [{title, links: [string]}] */
function Footer({
  columns = [],
  signoff = 'made slowly in melbourne.',
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      padding: '64px var(--container-pad) 32px',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.4fr repeat(2, 1fr)',
      gap: '48px',
      maxWidth: 'var(--container-max)',
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      font: '700 20px/1.2 var(--font-mono-brand)',
      margin: '0 0 16px'
    }
  }, "vetro studio."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--burgundy-300)',
      margin: '0 0 20px',
      maxWidth: '300px'
    }
  }, "Be the first to hear when a new piece leaves the studio."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '0'
    }
  }, /*#__PURE__*/React.createElement("input", {
    placeholder: "Email address",
    style: {
      flex: 1,
      maxWidth: '240px',
      background: 'transparent',
      color: 'var(--ivory-050)',
      border: '1px solid var(--burgundy-600)',
      borderRight: 'none',
      padding: '12px 14px',
      font: 'var(--text-body)',
      outline: 'none'
    }
  }), /*#__PURE__*/React.createElement("button", {
    style: {
      background: 'var(--ivory-050)',
      color: 'var(--burgundy-800)',
      border: 'none',
      cursor: 'pointer',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      padding: '0 20px'
    }
  }, "Join"))), columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--burgundy-300)',
      margin: '0 0 16px'
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--ivory-050)',
      textDecoration: 'none',
      cursor: 'pointer'
    }
  }, l))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      paddingTop: '24px',
      borderTop: '1px solid var(--burgundy-700)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px/1.2 var(--font-mono-brand)',
      color: 'var(--burgundy-300)'
    }
  }, signoff), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--burgundy-300)'
    }
  }, "\xA9 2026 vetro studio")));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Footer.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Header.jsx
try { (() => {
/** Site header: wordmark left, nav centre, text utilities right ("Cart (2)", no icons).
 *  links: [{label, active?}]; cartCount for the cart label; logoSrc points at assets/vetro-wordmark.png. */
function Header({
  links = [],
  cartCount = 0,
  logoSrc,
  onNav,
  onCart,
  style
}) {
  const [hovered, setHovered] = React.useState(null);
  const util = (label, onClick, key) => /*#__PURE__*/React.createElement("button", {
    key: key,
    onClick: onClick,
    onMouseEnter: () => setHovered(key),
    onMouseLeave: () => setHovered(null),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 2px',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      opacity: hovered === key ? 0.6 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, label);
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      padding: '22px var(--container-pad)',
      background: 'var(--surface-page)',
      borderBottom: '1px solid var(--border-hairline)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onNav ? () => onNav('home') : undefined,
    style: {
      cursor: 'pointer',
      justifySelf: 'start'
    }
  }, logoSrc ? /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "vetro studio.",
    style: {
      height: '20px',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 18px/1 var(--font-mono-brand)',
      color: 'var(--burgundy-800)'
    }
  }, "vetro studio.")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: '36px'
    }
  }, links.map(l => /*#__PURE__*/React.createElement("button", {
    key: l.label,
    onClick: onNav ? () => onNav(l.label) : undefined,
    onMouseEnter: () => setHovered(l.label),
    onMouseLeave: () => setHovered(null),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 2px',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-body)',
      borderBottom: l.active ? '1px solid var(--border-strong)' : '1px solid transparent',
      opacity: hovered === l.label ? 0.6 : 1,
      transition: 'opacity var(--duration-fast) var(--ease-out)'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '28px',
      justifySelf: 'end'
    }
  }, util('Search', onNav ? () => onNav('search') : undefined, 'search'), util(`Cart (${cartCount})`, onCart, 'cart')));
}
Object.assign(__ds_scope, { Header });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vetro-site/CartDrawer.jsx
try { (() => {
const DS_C = window.VetroStudioDesignSystem_316be8;
function CartDrawer({
  open,
  items,
  onClose,
  onRemove
}) {
  const {
    Button
  } = DS_C;
  const total = items.reduce((s, it) => s + it.priceNum * it.qty, 0);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      pointerEvents: open ? 'auto' : 'none'
    },
    "data-screen-label": "Cart drawer"
  }, /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'absolute',
      inset: 0,
      background: 'rgba(36,6,12,0.4)',
      opacity: open ? 1 : 0,
      transition: 'opacity var(--duration-slow) var(--ease-out)'
    }
  }), /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      width: '420px',
      maxWidth: '90vw',
      background: 'var(--surface-page)',
      boxShadow: 'var(--shadow-overlay)',
      transform: open ? 'translateX(0)' : 'translateX(100%)',
      transition: 'transform var(--duration-slow) var(--ease-out)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 24px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, "Cart (", items.reduce((s, it) => s + it.qty, 0), ")"), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      font: '400 22px/1 var(--font-sans)',
      color: 'var(--text-body)',
      padding: '4px 8px'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      padding: '24px'
    }
  }, items.length === 0 ? /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-muted)'
    }
  }, "Your cart is empty.") : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, items.map(it => /*#__PURE__*/React.createElement("div", {
    key: it.id,
    style: {
      display: 'flex',
      gap: '16px',
      paddingBottom: '20px',
      borderBottom: '1px solid var(--border-hairline)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '72px',
      height: '90px',
      background: `var(--glass-${it.colourway})`,
      border: '1px solid var(--border-hairline)',
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      gap: '4px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-h3)',
      color: 'var(--text-heading)'
    }
  }, it.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, "Qty ", it.qty, " \xB7 ", it.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => onRemove(it.id),
    style: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '2px 0',
      font: 'var(--text-small)',
      color: 'var(--text-muted)',
      textDecoration: 'underline',
      textUnderlineOffset: '3px'
    }
  }, "Remove")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '24px',
      borderTop: '1px solid var(--border-hairline)',
      display: 'flex',
      flexDirection: 'column',
      gap: '14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "Subtotal"), /*#__PURE__*/React.createElement("span", null, "$", total, " AUD")), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-small)',
      color: 'var(--text-muted)'
    }
  }, "Shipping calculated at checkout. Free in Australia over $400 AUD."), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    disabled: items.length === 0
  }, "Checkout"))));
}
window.VetroCartDrawer = CartDrawer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vetro-site/CartDrawer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vetro-site/HomeScreen.jsx
try { (() => {
const DS = window.VetroStudioDesignSystem_316be8;
const {
  Button,
  ProductCard
} = DS;
const TINTS = {
  clear: 'var(--glass-clear)',
  smoke: 'var(--glass-smoke)',
  rose: 'var(--glass-rose)',
  amber: 'var(--glass-amber)'
};
function Placeholder({
  tint = 'clear',
  label = 'Photography placeholder',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: TINTS[tint],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid var(--border-hairline)',
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'rgba(59,10,20,0.45)',
      textAlign: 'center',
      padding: '16px'
    }
  }, label));
}
function HomeScreen({
  products,
  onProduct,
  onShop
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home hero",
    style: {
      background: 'var(--surface-inverse)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      minHeight: '560px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: '64px var(--container-pad)',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px/1.2 var(--font-mono-brand)',
      color: 'var(--burgundy-300)',
      textTransform: 'lowercase'
    }
  }, "hand blown \xB7 melbourne"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-display)',
      color: 'var(--text-on-inverse)',
      margin: 0,
      maxWidth: '480px'
    }
  }, "Glass, blown once."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--burgundy-300)',
      margin: 0,
      maxWidth: '380px'
    }
  }, "A small studio in Melbourne making singular vases for the rest of the world."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    inverse: true,
    size: "lg",
    onClick: onShop
  }, "Shop the pieces"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    inverse: true,
    size: "lg"
  }, "The studio"))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/hero-gold-magazines.webp",
    alt: "Gold rostrato vase holding magazines",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  })), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home catalogue",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      marginBottom: '48px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "The pieces"), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "Five vases \xB7 one of each")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 'var(--grid-gap)',
      rowGap: '48px'
    }
  }, products.map(p => /*#__PURE__*/React.createElement(ProductCard, {
    key: p.id,
    name: p.name,
    descriptor: p.descriptor,
    price: p.price,
    colourway: p.colourway,
    badge: p.badge,
    image: p.image,
    onClick: () => onProduct(p.id)
  })))), /*#__PURE__*/React.createElement("section", {
    "data-screen-label": "Home studio band",
    style: {
      borderTop: '1px solid var(--border-hairline)',
      background: 'var(--surface-alt)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--container-pad)',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '64px',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/products/lifestyle-hydrangeas.webp",
    alt: "Clear rostrato vase with pink hydrangeas",
    style: {
      aspectRatio: '4 / 3',
      width: '100%',
      objectFit: 'cover',
      display: 'block',
      border: '1px solid var(--border-hairline)',
      boxSizing: 'border-box'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      font: 'var(--text-h2)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Each piece is made once."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "We blow a run of one. When a vase sells, its form is retired. What you hold was never repeated, and never will be."), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 14px/1.2 var(--font-mono-brand)',
      color: 'var(--text-muted)'
    }
  }, "made slowly in melbourne.")))));
}
window.VetroHomeScreen = HomeScreen;
window.VetroPlaceholder = Placeholder;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vetro-site/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vetro-site/ProductScreen.jsx
try { (() => {
const DS_P = window.VetroStudioDesignSystem_316be8;
function ProductScreen({
  product,
  onAdd,
  onBack
}) {
  const {
    Button,
    Badge,
    Accordion,
    Select,
    QuantityStepper
  } = DS_P;
  const Placeholder = window.VetroPlaceholder;
  const [qty, setQty] = React.useState(1);
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": `Product — ${product.name}`,
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '32px var(--container-pad) 96px'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      padding: '4px 0',
      marginBottom: '24px',
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, "\u2190 All pieces"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.1fr 1fr',
      gap: '64px',
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }
  }, product.image ? /*#__PURE__*/React.createElement("img", {
    src: product.image,
    alt: product.name,
    style: {
      aspectRatio: '4 / 5',
      width: '100%',
      objectFit: 'cover',
      display: 'block',
      border: '1px solid var(--border-hairline)',
      boxSizing: 'border-box'
    }
  }) : /*#__PURE__*/React.createElement(Placeholder, {
    tint: product.colourway,
    style: {
      aspectRatio: '4 / 5'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '16px'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    tint: product.colourway,
    label: "Detail",
    style: {
      aspectRatio: '1'
    }
  }), /*#__PURE__*/React.createElement(Placeholder, {
    tint: product.colourway,
    label: "In situ",
    style: {
      aspectRatio: '1'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      position: 'sticky',
      top: '24px'
    }
  }, product.badge && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, null, product.badge)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--text-heading)',
      margin: '0 0 6px'
    }
  }, product.name), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-muted)',
      margin: 0
    }
  }, product.descriptor)), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-body)'
    }
  }, product.price), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body)',
      color: 'var(--text-body)',
      margin: 0,
      maxWidth: '400px'
    }
  }, product.copy), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--text-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, product.dims), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: '16px',
      alignItems: 'stretch',
      marginTop: '4px'
    }
  }, /*#__PURE__*/React.createElement(QuantityStepper, {
    value: qty,
    onChange: setQty,
    max: 3
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd(product, qty)
  }, "Add to cart")), /*#__PURE__*/React.createElement(Accordion, {
    style: {
      marginTop: '16px'
    },
    items: [{
      title: 'Materials',
      content: 'Hand-blown soda-lime glass, annealed for 24 hours. Wipe clean with a soft dry cloth.'
    }, {
      title: 'Shipping',
      content: 'Ships worldwide from Melbourne, double-boxed with recycled padding. Free in Australia over $400 AUD.'
    }, {
      title: 'Returns',
      content: 'Fourteen days, in original packaging. Breakage in transit is replaced with a comparable piece — no two are alike.'
    }]
  }))));
}
window.VetroProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vetro-site/ProductScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vetro-site/StudioScreen.jsx
try { (() => {
function StudioScreen() {
  const Placeholder = window.VetroPlaceholder;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Studio page",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '96px var(--container-pad)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: '640px',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: '24px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '700 13px/1.2 var(--font-mono-brand)',
      color: 'var(--text-muted)'
    }
  }, "the studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      font: 'var(--text-h1)',
      color: 'var(--text-heading)',
      margin: 0
    }
  }, "Formed by hand. No two alike."), /*#__PURE__*/React.createElement("p", {
    style: {
      font: 'var(--text-body-lg)',
      color: 'var(--text-body)',
      margin: 0
    }
  }, "vetro studio is one furnace, two hands, and a short bench in Melbourne's inner north. We make four or five vase forms at a time, each blown as a run of one. When a piece sells, its form is retired.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: '24px',
      marginTop: '64px'
    }
  }, /*#__PURE__*/React.createElement(Placeholder, {
    tint: "amber",
    label: "Furnace",
    style: {
      aspectRatio: '3 / 4'
    }
  }), /*#__PURE__*/React.createElement(Placeholder, {
    tint: "smoke",
    label: "Bench",
    style: {
      aspectRatio: '3 / 4',
      marginTop: '48px'
    }
  }), /*#__PURE__*/React.createElement(Placeholder, {
    tint: "rose",
    label: "Finished pieces",
    style: {
      aspectRatio: '3 / 4'
    }
  })));
}
window.VetroStudioScreen = StudioScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vetro-site/StudioScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/vetro-site/data.js
try { (() => {
// Sample catalogue — replace names/prices/copy with real ones
const VETRO_PRODUCTS = [{
  id: 'onda',
  name: 'Onda Vase',
  descriptor: 'rippled clear glass',
  price: '$429 AUD',
  priceNum: 429,
  colourway: 'clear',
  badge: 'Limited run of one',
  image: '../../assets/products/vase-clear-beige.webp',
  dims: 'H 32cm · Ø 14cm',
  copy: 'Each ripple is pulled by hand while the glass is still moving. No two pieces are alike, and none is repeated.'
}, {
  id: 'alba',
  name: 'Alba Vase',
  descriptor: 'rose, flared lip',
  price: '$389 AUD',
  priceNum: 389,
  colourway: 'rose',
  badge: null,
  image: '../../assets/products/vase-clear-plinth.jpeg',
  dims: 'H 26cm · Ø 18cm',
  copy: 'A soft rose tint, flaring open at the lip. The colour deepens where the glass gathers.'
}, {
  id: 'vesper',
  name: 'Vesper Vase',
  descriptor: 'smoke grey column',
  price: '$459 AUD',
  priceNum: 459,
  colourway: 'smoke',
  badge: null,
  image: '../../assets/products/vase-clear-black.webp',
  dims: 'H 41cm · Ø 11cm',
  copy: 'A tall, quiet column in smoke grey. Made for a single stem, or none at all.'
}, {
  id: 'mira',
  name: 'Mira Vase',
  descriptor: 'amber, low round belly',
  price: '$349 AUD',
  priceNum: 349,
  colourway: 'amber',
  badge: null,
  image: '../../assets/products/vase-crystal-cut.jpg',
  dims: 'H 18cm · Ø 22cm',
  copy: 'Low and round, in warm amber. It holds the afternoon light longer than it should.'
}, {
  id: 'sella',
  name: 'Sella Vase',
  descriptor: 'clear with burgundy thread',
  price: '$589 AUD',
  priceNum: 589,
  colourway: 'clear',
  badge: 'Limited run of one',
  image: '../../assets/products/vase-gold.webp',
  dims: 'H 35cm · Ø 13cm',
  copy: 'A single burgundy thread is wound through the clear body as it turns. Our signature piece.'
}];
window.VETRO_PRODUCTS = VETRO_PRODUCTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/vetro-site/data.js", error: String((e && e.message) || e) }); }

__ds_ns.ProductCard = __ds_scope.ProductCard;

__ds_ns.QuantityStepper = __ds_scope.QuantityStepper;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.AnnouncementBar = __ds_scope.AnnouncementBar;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Header = __ds_scope.Header;

})();
