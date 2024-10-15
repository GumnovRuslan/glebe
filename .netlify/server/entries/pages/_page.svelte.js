import { c as create_ssr_component, d as compute_rest_props, f as createEventDispatcher, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, v as validate_component, e as escape, l as each } from "../../chunks/ssr.js";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
function forOwn(object, iteratee) {
  if (object) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      if (key !== "__proto__") {
        if (iteratee(object[key], key) === false) {
          break;
        }
      }
    }
  }
  return object;
}
function isObject(subject) {
  return subject !== null && typeof subject === "object";
}
function isEqualDeep(subject1, subject2) {
  if (Array.isArray(subject1) && Array.isArray(subject2)) {
    return subject1.length === subject2.length && !subject1.some((elm, index) => !isEqualDeep(elm, subject2[index]));
  }
  if (isObject(subject1) && isObject(subject2)) {
    const keys1 = Object.keys(subject1);
    const keys2 = Object.keys(subject2);
    return keys1.length === keys2.length && !keys1.some((key) => {
      return !Object.prototype.hasOwnProperty.call(subject2, key) || !isEqualDeep(subject1[key], subject2[key]);
    });
  }
  return subject1 === subject2;
}
function merge(object, source) {
  const merged = object;
  forOwn(source, (value, key) => {
    if (Array.isArray(value)) {
      merged[key] = value.slice();
    } else if (isObject(value)) {
      merged[key] = merge(isObject(merged[key]) ? merged[key] : {}, value);
    } else {
      merged[key] = value;
    }
  });
  return merged;
}
function slice(arrayLike, start, end) {
  return Array.prototype.slice.call(arrayLike, start, end);
}
function apply(func) {
  return func.bind.apply(func, [null].concat(slice(arguments, 1)));
}
function typeOf(type, subject) {
  return typeof subject === type;
}
apply(typeOf, "function");
apply(typeOf, "string");
apply(typeOf, "undefined");
const Splide_1 = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class", "options", "splide", "extensions", "transition", "hasTrack", "go", "sync"]);
  let { class: className = void 0 } = $$props;
  let { options = {} } = $$props;
  let { splide = void 0 } = $$props;
  let { extensions = void 0 } = $$props;
  let { transition = void 0 } = $$props;
  let { hasTrack = true } = $$props;
  createEventDispatcher();
  let root;
  let prevOptions = merge({}, options);
  function go(control) {
    splide?.go(control);
  }
  function sync(target) {
    splide?.sync(target);
  }
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  if ($$props.options === void 0 && $$bindings.options && options !== void 0) $$bindings.options(options);
  if ($$props.splide === void 0 && $$bindings.splide && splide !== void 0) $$bindings.splide(splide);
  if ($$props.extensions === void 0 && $$bindings.extensions && extensions !== void 0) $$bindings.extensions(extensions);
  if ($$props.transition === void 0 && $$bindings.transition && transition !== void 0) $$bindings.transition(transition);
  if ($$props.hasTrack === void 0 && $$bindings.hasTrack && hasTrack !== void 0) $$bindings.hasTrack(hasTrack);
  if ($$props.go === void 0 && $$bindings.go && go !== void 0) $$bindings.go(go);
  if ($$props.sync === void 0 && $$bindings.sync && sync !== void 0) $$bindings.sync(sync);
  {
    if (splide && !isEqualDeep(prevOptions, options)) {
      splide.options = options;
      prevOptions = merge({}, prevOptions);
    }
  }
  return ` <div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}${add_attribute("this", root, 0)}>${hasTrack ? `${validate_component(SplideTrack, "SplideTrack").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `${slots.default ? slots.default({}) : ``}`}</div>`;
});
const SplideTrack = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<div${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__track", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}><ul class="splide__list">${slots.default ? slots.default({}) : ``}</ul></div>`;
});
const SplideSlide = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["class"]);
  let { class: className = void 0 } = $$props;
  if ($$props.class === void 0 && $$bindings.class && className !== void 0) $$bindings.class(className);
  return `<li${spread(
    [
      {
        class: escape_attribute_value(classNames("splide__slide", className))
      },
      escape_object($$restProps)
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</li>`;
});
const css$c = {
  code: '.burger.svelte-76rp3e{width:max-content;display:flex;align-items:center;aspect-ratio:1/1;padding:5px;background:transparent;border:none;cursor:pointer}@media(min-width: 1440px){.burger.svelte-76rp3e{display:none}}.burger__line.svelte-76rp3e{position:relative;width:36px;height:3px;background:#fff;border-radius:20px;transition:0.2s}.burger__line.svelte-76rp3e::after,.burger__line.svelte-76rp3e::before{content:"";position:absolute;left:0;width:100%;height:100%;background:#fff;border-radius:20px;transition:top 0.4s 0.2s, transform 0.2s}.burger__line.svelte-76rp3e::before{top:-12px}.burger__line.svelte-76rp3e::after{top:12px}.burger__line--active.svelte-76rp3e{background:transparent}.burger__line--active.svelte-76rp3e::after,.burger__line--active.svelte-76rp3e::before{top:0;transition:top 0.2s, transform 0.4s 0.2s}.burger__line--active.svelte-76rp3e::after{transform:rotate(45deg)}.burger__line--active.svelte-76rp3e::before{transform:rotate(-45deg)}',
  map: `{"version":3,"file":"Burger.svelte","sources":["Burger.svelte"],"sourcesContent":["<script>\\r\\n  import { createEventDispatcher } from 'svelte';\\r\\n  \\r\\n  export let isActive = false\\r\\n  export let isVisable = true\\r\\n\\r\\n  const dispatch = createEventDispatcher();\\r\\n\\r\\n  function toggleMenu() {\\r\\n    isActive = !isActive;\\r\\n    dispatch('toggle', isActive);\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<button type=\\"button\\" class=\\"burger {!isVisable ? 'burger--hidden' : ''}\\" on:click={toggleMenu}>\\r\\n  <div class=\\"burger__line {isActive ? 'burger__line--active' : ''}\\"></div>\\r\\n</button>\\r\\n\\r\\n<style lang=\\"scss\\">.burger {\\n  width: max-content;\\n  display: flex;\\n  align-items: center;\\n  aspect-ratio: 1/1;\\n  padding: 5px;\\n  background: transparent;\\n  border: none;\\n  cursor: pointer;\\n}\\n@media (min-width: 1440px) {\\n  .burger {\\n    display: none;\\n  }\\n}\\n.burger__line {\\n  position: relative;\\n  width: 36px;\\n  height: 3px;\\n  background: #fff;\\n  border-radius: 20px;\\n  transition: 0.2s;\\n}\\n.burger__line::after, .burger__line::before {\\n  content: \\"\\";\\n  position: absolute;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  background: #fff;\\n  border-radius: 20px;\\n  transition: top 0.4s 0.2s, transform 0.2s;\\n}\\n.burger__line::before {\\n  top: -12px;\\n}\\n.burger__line::after {\\n  top: 12px;\\n}\\n.burger__line--active {\\n  background: transparent;\\n}\\n.burger__line--active::after, .burger__line--active::before {\\n  top: 0;\\n  transition: top 0.2s, transform 0.4s 0.2s;\\n}\\n.burger__line--active::after {\\n  transform: rotate(45deg);\\n}\\n.burger__line--active::before {\\n  transform: rotate(-45deg);\\n}</style>"],"names":[],"mappings":"AAkBmB,qBAAQ,CACzB,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,YAAY,CAAE,CAAC,CAAC,CAAC,CACjB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,OACV,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,qBAAQ,CACN,OAAO,CAAE,IACX,CACF,CACA,2BAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IACd,CACA,2BAAa,OAAO,CAAE,2BAAa,QAAS,CAC1C,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IACvC,CACA,2BAAa,QAAS,CACpB,GAAG,CAAE,KACP,CACA,2BAAa,OAAQ,CACnB,GAAG,CAAE,IACP,CACA,mCAAsB,CACpB,UAAU,CAAE,WACd,CACA,mCAAqB,OAAO,CAAE,mCAAqB,QAAS,CAC1D,GAAG,CAAE,CAAC,CACN,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,CAAC,SAAS,CAAC,IAAI,CAAC,IACvC,CACA,mCAAqB,OAAQ,CAC3B,SAAS,CAAE,OAAO,KAAK,CACzB,CACA,mCAAqB,QAAS,CAC5B,SAAS,CAAE,OAAO,MAAM,CAC1B"}`
};
const Burger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { isActive = false } = $$props;
  let { isVisable = true } = $$props;
  createEventDispatcher();
  if ($$props.isActive === void 0 && $$bindings.isActive && isActive !== void 0) $$bindings.isActive(isActive);
  if ($$props.isVisable === void 0 && $$bindings.isVisable && isVisable !== void 0) $$bindings.isVisable(isVisable);
  $$result.css.add(css$c);
  return `<button type="button" class="${"burger " + escape(!isVisable ? "burger--hidden" : "", true) + " svelte-76rp3e"}"><div class="${"burger__line " + escape(isActive ? "burger__line--active" : "", true) + " svelte-76rp3e"}"></div> </button>`;
});
const css$b = {
  code: '.header.svelte-10odps8{position:fixed;z-index:10;width:100%;padding:10px;top:0;left:0}.header__inner.svelte-10odps8{display:flex;align-items:center;gap:50px;min-height:60px}@media(min-width: 1440px){.header__inner.svelte-10odps8{padding:10px 40px}}@media(max-width: 1439.02px){.header__inner.svelte-10odps8{justify-content:space-between;padding:10px 10px}}.header__logo.svelte-10odps8{font-weight:700;font-size:40px;letter-spacing:3px;text-transform:uppercase;text-decoration:none;color:#fff}@media(max-width: 1023.02px){.header__logo.svelte-10odps8{font-size:36px}}.header__nav_list.svelte-10odps8{width:100%;height:100%;display:flex;align-items:center;gap:30px}@media(min-width: 1440px){.header__nav_list.svelte-10odps8{justify-content:center;margin-left:-200px}}@media(max-width: 1439.02px){.header__nav_list.svelte-10odps8{position:absolute;z-index:-1;transition:0.4s ease-in-out;top:0%;left:100%;height:100vh;background:rgba(0, 0, 0, 0.4941176471);flex-direction:column;gap:15px;padding:120px 20px 40px;backdrop-filter:blur(10px)}}@media(max-width: 1439.02px){.header__nav_list--active.svelte-10odps8{left:0}}.header__nav_item.svelte-10odps8{position:relative;background:transparent;border:none;font-size:26px;text-align:left;color:#fff;cursor:pointer;max-width:max-content;padding:0;overflow:hidden;text-shadow:0 0 4px #000}@media(max-width: 1023.02px){.header__nav_item.svelte-10odps8{font-size:30px;padding:10px;text-shadow:0 0 10px #000}}.header__nav_item.svelte-10odps8::before{content:"";position:absolute;bottom:0;left:-100%;width:100%;height:2px;background:#fff;transition:0.3s;border-radius:10px}.header__nav_item.svelte-10odps8:hover::before{left:0}',
  map: `{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<script>\\r\\n  import Burger from \\"../Burger.svelte\\";\\r\\n\\r\\n  export let handler = null\\r\\n  export let sections = []\\r\\n\\r\\n  let isOpen = false\\r\\n\\r\\n  function handleToggle(event) {\\r\\n    isOpen = event.detail; // Обновляем состояние на основе данных из дочернего компонента\\r\\n  }\\r\\n\\r\\n  function clickMenu(id) {\\r\\n    handler(id)\\r\\n    isOpen = false\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<header class=\\"header\\">\\r\\n  <div class=\\"header__inner\\">\\r\\n    <a href=\\"/\\" class=\\"header__logo\\">glebe</a>\\r\\n    <nav class=\\"header__nav_list {isOpen ? 'header__nav_list--active' : ''}\\">\\r\\n      {#each sections as section}\\r\\n        <button type=\\"button\\" class=\\"header__nav_item\\" on:click={() => clickMenu(section.id)}>{section.name}</button>\\r\\n      {/each}\\r\\n    </nav>\\r\\n    <Burger isActive={isOpen} on:toggle={handleToggle}/>\\r\\n  </div>\\r\\n  \\r\\n</header>\\r\\n\\r\\n<style lang=\\"scss\\">.header {\\n  position: fixed;\\n  z-index: 10;\\n  width: 100%;\\n  padding: 10px;\\n  top: 0;\\n  left: 0;\\n}\\n.header__inner {\\n  display: flex;\\n  align-items: center;\\n  gap: 50px;\\n  min-height: 60px;\\n}\\n@media (min-width: 1440px) {\\n  .header__inner {\\n    padding: 10px 40px;\\n  }\\n}\\n@media (max-width: 1439.02px) {\\n  .header__inner {\\n    justify-content: space-between;\\n    padding: 10px 10px;\\n  }\\n}\\n.header__logo {\\n  font-weight: 700;\\n  font-size: 40px;\\n  letter-spacing: 3px;\\n  text-transform: uppercase;\\n  text-decoration: none;\\n  color: #fff;\\n}\\n@media (max-width: 1023.02px) {\\n  .header__logo {\\n    font-size: 36px;\\n  }\\n}\\n.header__nav_list {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  gap: 30px;\\n}\\n@media (min-width: 1440px) {\\n  .header__nav_list {\\n    justify-content: center;\\n    margin-left: -200px;\\n  }\\n}\\n@media (max-width: 1439.02px) {\\n  .header__nav_list {\\n    position: absolute;\\n    z-index: -1;\\n    transition: 0.4s ease-in-out;\\n    top: 0%;\\n    left: 100%;\\n    height: 100vh;\\n    background: rgba(0, 0, 0, 0.4941176471);\\n    flex-direction: column;\\n    gap: 15px;\\n    padding: 120px 20px 40px;\\n    backdrop-filter: blur(10px);\\n  }\\n}\\n@media (max-width: 1439.02px) {\\n  .header__nav_list--active {\\n    left: 0;\\n  }\\n}\\n.header__nav_item {\\n  position: relative;\\n  background: transparent;\\n  border: none;\\n  font-size: 26px;\\n  text-align: left;\\n  color: #fff;\\n  cursor: pointer;\\n  max-width: max-content;\\n  padding: 0;\\n  overflow: hidden;\\n  text-shadow: 0 0 4px #000;\\n}\\n@media (max-width: 1023.02px) {\\n  .header__nav_item {\\n    font-size: 30px;\\n    padding: 10px;\\n    text-shadow: 0 0 10px #000;\\n  }\\n}\\n.header__nav_item::before {\\n  content: \\"\\";\\n  position: absolute;\\n  bottom: 0;\\n  left: -100%;\\n  width: 100%;\\n  height: 2px;\\n  background: #fff;\\n  transition: 0.3s;\\n  border-radius: 10px;\\n}\\n.header__nav_item:hover::before {\\n  left: 0;\\n}</style>"],"names":[],"mappings":"AA+BmB,sBAAQ,CACzB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACR,CACA,6BAAe,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,IACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAe,CACb,OAAO,CAAE,IAAI,CAAC,IAChB,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,6BAAe,CACb,eAAe,CAAE,aAAa,CAC9B,OAAO,CAAE,IAAI,CAAC,IAChB,CACF,CACA,4BAAc,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,cAAc,CAAE,SAAS,CACzB,eAAe,CAAE,IAAI,CACrB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,4BAAc,CACZ,SAAS,CAAE,IACb,CACF,CACA,gCAAkB,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,gCAAkB,CAChB,eAAe,CAAE,MAAM,CACvB,WAAW,CAAE,MACf,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,EAAE,CACX,UAAU,CAAE,IAAI,CAAC,WAAW,CAC5B,GAAG,CAAE,EAAE,CACP,IAAI,CAAE,IAAI,CACV,MAAM,CAAE,KAAK,CACb,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAAY,CAAC,CACvC,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,KAAK,CAAC,IAAI,CAAC,IAAI,CACxB,eAAe,CAAE,KAAK,IAAI,CAC5B,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,wCAA0B,CACxB,IAAI,CAAE,CACR,CACF,CACA,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,WAAW,CACvB,MAAM,CAAE,IAAI,CACZ,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,OAAO,CACf,SAAS,CAAE,WAAW,CACtB,OAAO,CAAE,CAAC,CACV,QAAQ,CAAE,MAAM,CAChB,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,GAAG,CAAC,IACvB,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,gCAAkB,CAChB,SAAS,CAAE,IAAI,CACf,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IACxB,CACF,CACA,gCAAiB,QAAS,CACxB,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,CAAC,CACT,IAAI,CAAE,KAAK,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IAAI,CAChB,aAAa,CAAE,IACjB,CACA,gCAAiB,MAAM,QAAS,CAC9B,IAAI,CAAE,CACR"}`
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { handler = null } = $$props;
  let { sections = [] } = $$props;
  let isOpen = false;
  if ($$props.handler === void 0 && $$bindings.handler && handler !== void 0) $$bindings.handler(handler);
  if ($$props.sections === void 0 && $$bindings.sections && sections !== void 0) $$bindings.sections(sections);
  $$result.css.add(css$b);
  return `<header class="header svelte-10odps8"><div class="header__inner svelte-10odps8"><a href="/" class="header__logo svelte-10odps8" data-svelte-h="svelte-m06lcj">glebe</a> <nav class="${"header__nav_list " + escape("", true) + " svelte-10odps8"}">${each(sections, (section) => {
    return `<button type="button" class="header__nav_item svelte-10odps8">${escape(section.name)}</button>`;
  })}</nav> ${validate_component(Burger, "Burger").$$render($$result, { isActive: isOpen }, {}, {})}</div> </header>`;
});
const telegram = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" fill="currentColor" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;"><path id="telegram-1" d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
`;
const twiter = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
`;
const email = `
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
    <path d="M2 2A2 2 0 0 0 .05 3.555L8 8.414l7.95-4.859A2 2 0 0 0 14 2zm-2 9.8V4.698l5.803 3.546zm6.761-2.97-6.57 4.026A2 2 0 0 0 2 14h6.256A4.5 4.5 0 0 1 8 12.5a4.49 4.49 0 0 1 1.606-3.446l-.367-.225L8 9.586zM16 9.671V4.697l-5.803 3.546.338.208A4.5 4.5 0 0 1 12.5 8c1.414 0 2.675.652 3.5 1.671"/>
    <path d="M15.834 12.244c0 1.168-.577 2.025-1.587 2.025-.503 0-1.002-.228-1.12-.648h-.043c-.118.416-.543.643-1.015.643-.77 0-1.259-.542-1.259-1.434v-.529c0-.844.481-1.4 1.26-1.4.585 0 .87.333.953.63h.03v-.568h.905v2.19c0 .272.18.42.411.42.315 0 .639-.415.639-1.39v-.118c0-1.277-.95-2.326-2.484-2.326h-.04c-1.582 0-2.64 1.067-2.64 2.724v.157c0 1.867 1.237 2.654 2.57 2.654h.045c.507 0 .935-.07 1.18-.18v.731c-.219.1-.643.175-1.237.175h-.044C10.438 16 9 14.82 9 12.646v-.214C9 10.36 10.421 9 12.485 9h.035c2.12 0 3.314 1.43 3.314 3.034zm-4.04.21v.227c0 .586.227.8.581.8.31 0 .564-.17.564-.743v-.367c0-.516-.275-.708-.572-.708-.346 0-.573.245-.573.791"/>
</svg>
`;
const css$a = {
  code: ".hero.svelte-1wf93lw{position:relative;min-height:100vh}.hero__content.svelte-1wf93lw{position:relative;display:flex;justify-content:center}@media(min-width: 425px){.hero__content.svelte-1wf93lw{padding:90px 0 50px}}@media(max-width: 424.02px){.hero__content.svelte-1wf93lw{padding:60px 0 50px}}.hero__title.svelte-1wf93lw{font-size:46px;font-weight:700;color:#ffffff;text-shadow:0 0 10px #000;text-align:center}.hero__background.svelte-1wf93lw{position:absolute;left:0;top:0;width:100%;height:100%}.hero__background_img.svelte-1wf93lw{object-fit:cover;object-position:50% 100%}",
  map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"hero\\">\\r\\n  <div class=\\"hero__background\\">\\r\\n    <img class=\\"hero__background_img\\" src=\\"/images/hero.webp\\" alt=\\"background\\">\\r\\n  </div>\\r\\n  <div class=\\"hero__content\\">\\r\\n    <p class=\\"hero__title\\">A game where every strike brings gold</p>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.hero {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n.hero__content {\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n}\\n@media (min-width: 425px) {\\n  .hero__content {\\n    padding: 90px 0 50px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .hero__content {\\n    padding: 60px 0 50px;\\n  }\\n}\\n.hero__title {\\n  font-size: 46px;\\n  font-weight: 700;\\n  color: #ffffff;\\n  text-shadow: 0 0 10px #000;\\n  text-align: center;\\n}\\n.hero__background {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n}\\n.hero__background_img {\\n  object-fit: cover;\\n  object-position: 50% 100%;\\n}</style>"],"names":[],"mappings":"AAYmB,oBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KACd,CACA,6BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,eAAe,CAAE,MACnB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAe,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAClB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAe,CACb,OAAO,CAAE,IAAI,CAAC,CAAC,CAAC,IAClB,CACF,CACA,2BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAC1B,UAAU,CAAE,MACd,CACA,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,oCAAsB,CACpB,UAAU,CAAE,KAAK,CACjB,eAAe,CAAE,GAAG,CAAC,IACvB"}'
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$a);
  return `<section class="hero svelte-1wf93lw" data-svelte-h="svelte-o53yth"><div class="hero__background svelte-1wf93lw"><img class="hero__background_img svelte-1wf93lw" src="/images/hero.webp" alt="background"></div> <div class="hero__content svelte-1wf93lw"><p class="hero__title svelte-1wf93lw">A game where every strike brings gold</p></div> </section>`;
});
const css$9 = {
  code: '.title__wrapper.svelte-1oqi1sd{display:flex;align-items:center;justify-content:center}.title.svelte-1oqi1sd{position:relative;text-align:center;font-size:50px;font-weight:700;text-transform:uppercase;color:#fff}.title.svelte-1oqi1sd::before,.title.svelte-1oqi1sd::after{content:"";position:absolute;width:0;height:2px;top:50%;transition:all 0.8s 0.5s;background:currentColor}.title.svelte-1oqi1sd::before{left:calc(100% + 20px)}.title.svelte-1oqi1sd::after{right:calc(100% + 20px)}.title--active.svelte-1oqi1sd::before,.title--active.svelte-1oqi1sd::after{width:200px}@media(min-width: 768px){.title--active.svelte-1oqi1sd::before,.title--active.svelte-1oqi1sd::after{width:200px}}@media(max-width: 767.02px){.title--active.svelte-1oqi1sd::before,.title--active.svelte-1oqi1sd::after{width:100px}}@media(min-width: 1440px){.title.svelte-1oqi1sd{font-size:50px;line-height:54px}}@media(min-width: 1024px) and (max-width: 1439.02px){.title.svelte-1oqi1sd{font-size:40px;line-height:44px}}@media(min-width: 768px) and (max-width: 1023.02px){.title.svelte-1oqi1sd{font-size:30px;line-height:34px}}@media(max-width: 767.02px){.title.svelte-1oqi1sd{font-size:26px;line-height:30px}}',
  map: `{"version":3,"file":"Title.svelte","sources":["Title.svelte"],"sourcesContent":["<script>\\r\\n  export let active = false\\r\\n  export let text = 'Title'\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"title__wrapper\\">\\r\\n  <h2 class=\\"title {active ? 'title--active' : ''}\\">{text}</h2>\\r\\n</div>\\r\\n\\r\\n<style lang=\\"scss\\">.title__wrapper {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n}\\n\\n.title {\\n  position: relative;\\n  text-align: center;\\n  font-size: 50px;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  color: #fff;\\n}\\n\\n.title::before, .title::after {\\n  content: \\"\\";\\n  position: absolute;\\n  width: 0;\\n  height: 2px;\\n  top: 50%;\\n  transition: all 0.8s 0.5s;\\n  background: currentColor;\\n}\\n\\n.title::before {\\n  left: calc(100% + 20px);\\n}\\n\\n.title::after {\\n  right: calc(100% + 20px);\\n}\\n\\n.title--active::before, .title--active::after {\\n  width: 200px;\\n}\\n\\n@media (min-width: 768px) {\\n  .title--active::before, .title--active::after {\\n    width: 200px;\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  .title--active::before, .title--active::after {\\n    width: 100px;\\n  }\\n}\\n\\n@media (min-width: 1440px) {\\n  .title {\\n    font-size: 50px;\\n    line-height: 54px;\\n  }\\n}\\n\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .title {\\n    font-size: 40px;\\n    line-height: 44px;\\n  }\\n}\\n\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .title {\\n    font-size: 30px;\\n    line-height: 34px;\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  .title {\\n    font-size: 26px;\\n    line-height: 30px;\\n  }\\n}</style>"],"names":[],"mappings":"AASmB,8BAAgB,CACjC,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MACnB,CAEA,qBAAO,CACL,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MAAM,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IACT,CAEA,qBAAM,QAAQ,CAAE,qBAAM,OAAQ,CAC5B,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,CAAC,CACR,MAAM,CAAE,GAAG,CACX,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,GAAG,CAAC,IAAI,CAAC,IAAI,CACzB,UAAU,CAAE,YACd,CAEA,qBAAM,QAAS,CACb,IAAI,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CACxB,CAEA,qBAAM,OAAQ,CACZ,KAAK,CAAE,KAAK,IAAI,CAAC,CAAC,CAAC,IAAI,CACzB,CAEA,6BAAc,QAAQ,CAAE,6BAAc,OAAQ,CAC5C,KAAK,CAAE,KACT,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAc,QAAQ,CAAE,6BAAc,OAAQ,CAC5C,KAAK,CAAE,KACT,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAc,QAAQ,CAAE,6BAAc,OAAQ,CAC5C,KAAK,CAAE,KACT,CACF,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CAEA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CAEA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CAC3B,qBAAO,CACL,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF"}`
};
const Title = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { text = "Title" } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  $$result.css.add(css$9);
  return `<div class="title__wrapper svelte-1oqi1sd"><h2 class="${"title " + escape(active ? "title--active" : "", true) + " svelte-1oqi1sd"}">${escape(text)}</h2> </div>`;
});
const css$8 = {
  code: ".about.svelte-1ttnj16{position:relative;height:100vh}.about__inner.svelte-1ttnj16{height:100%;display:flex;align-items:center;justify-content:center;background:#000}.about__content.svelte-1ttnj16{display:flex;flex-direction:column;align-items:center;gap:40px;padding:0 20px;overflow:hidden}@media(min-width: 1024px){.about__content.svelte-1ttnj16{max-width:55%}}@media(min-width: 768px) and (max-width: 1023.02px){.about__content.svelte-1ttnj16{max-width:80%}}@media(max-width: 767.02px){.about__content.svelte-1ttnj16{max-width:100%}}.about__description.svelte-1ttnj16{transition:1.5s 0.5s;transform:translateY(100px);opacity:0;text-align:center;color:#fff}@media(min-width: 1024px){.about__description.svelte-1ttnj16{font-size:30px;line-height:48px}}@media(min-width: 768px) and (max-width: 1023.02px){.about__description.svelte-1ttnj16{font-size:22px;line-height:32px}}@media(max-width: 767.02px){.about__description.svelte-1ttnj16{font-size:20px;line-height:30px}}.about__description--active.svelte-1ttnj16{transform:translateY(0);opacity:1}",
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\r\\n  import Title from \\"../Title.svelte\\";\\r\\n\\r\\n  export let active = false;\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"about\\">\\r\\n  <div class=\\"about__inner\\">\\r\\n    <div class=\\"about__content\\">\\r\\n      <Title text='About' {active}/>\\r\\n      <p class=\\"about__description {active ? 'about__description--active' : ''}\\">\\r\\n        Glebe is a world where every handful of earth can turn into a golden nugget, and every action brings you closer to true wealth. Here, in the era of a new gold rush, users compete for resources, explore lands and earn. In Glebe everyone can build their own business empire, combining all the game roles, building new and novel earning strategies to maximize profits.\\r\\n      </p>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.about {\\n  position: relative;\\n  height: 100vh;\\n}\\n.about__inner {\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  background: #000;\\n}\\n.about__content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 40px;\\n  padding: 0 20px;\\n  overflow: hidden;\\n}\\n@media (min-width: 1024px) {\\n  .about__content {\\n    max-width: 55%;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .about__content {\\n    max-width: 80%;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .about__content {\\n    max-width: 100%;\\n  }\\n}\\n.about__description {\\n  transition: 1.5s 0.5s;\\n  transform: translateY(100px);\\n  opacity: 0;\\n  text-align: center;\\n  color: #fff;\\n}\\n@media (min-width: 1024px) {\\n  .about__description {\\n    font-size: 30px;\\n    line-height: 48px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .about__description {\\n    font-size: 22px;\\n    line-height: 32px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .about__description {\\n    font-size: 20px;\\n    line-height: 30px;\\n  }\\n}\\n.about__description--active {\\n  transform: translateY(0);\\n  opacity: 1;\\n}</style>"],"names":[],"mappings":"AAiBmB,qBAAO,CACxB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KACV,CACA,4BAAc,CACZ,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,IACd,CACA,8BAAgB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,QAAQ,CAAE,MACZ,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,8BAAgB,CACd,SAAS,CAAE,GACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,8BAAgB,CACd,SAAS,CAAE,GACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,8BAAgB,CACd,SAAS,CAAE,IACb,CACF,CACA,kCAAoB,CAClB,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,kCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,kCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,kCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,0CAA4B,CAC1B,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CACX"}`
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  $$result.css.add(css$8);
  return `<section class="about svelte-1ttnj16"><div class="about__inner svelte-1ttnj16"><div class="about__content svelte-1ttnj16">${validate_component(Title, "Title").$$render($$result, { text: "About", active }, {}, {})} <p class="${"about__description " + escape(active ? "about__description--active" : "", true) + " svelte-1ttnj16"}">Glebe is a world where every handful of earth can turn into a golden nugget, and every action brings you closer to true wealth. Here, in the era of a new gold rush, users compete for resources, explore lands and earn. In Glebe everyone can build their own business empire, combining all the game roles, building new and novel earning strategies to maximize profits.</p></div></div> </section>`;
});
const css$7 = {
  code: ".block.svelte-7t394r{transition:0.5s 0.3s;color:#fff;height:100%}@media(min-width: 1620px){.block.svelte-7t394r{min-height:600px}}@media(min-width: 1440px) and (max-width: 1619.02px){.block.svelte-7t394r{height:600px}}@media(max-width: 767.02px){.block.svelte-7t394r{height:100vh;padding-bottom:20px}}.block__inner.svelte-7t394r{display:flex;align-items:center;gap:30px;height:100%;flex:content}@media(max-width: 767.02px){.block__inner.svelte-7t394r{flex-direction:column}}.block__title.svelte-7t394r{width:100%;font-size:46px;text-align:center;color:#fff}@media(min-width: 768px){.block__title.svelte-7t394r{margin-top:-80px;margin-bottom:80px}}@media(min-width: 425px) and (max-width: 767.02px){.block__title.svelte-7t394r{font-size:30px}}@media(max-width: 767.02px){.block__title.svelte-7t394r{font-size:30px;margin-bottom:-60px}}.block__content.svelte-7t394r{flex:content;display:flex;align-items:center;justify-content:flex-end;opacity:0.2;transition:0.4s}@media(min-width: 1620px){.block__content.svelte-7t394r{min-height:400px}}@media(min-width: 1440px) and (max-width: 1619.02px){.block__content.svelte-7t394r{min-height:400px}}@media(min-width: 1024px) and (max-width: 1439.02px){.block__content.svelte-7t394r{min-height:300px}}@media(max-width: 767.02px){.block__content.svelte-7t394r{align-items:flex-end}}.block__content--active.svelte-7t394r{opacity:1}.block__card.svelte-7t394r{display:flex}@media(min-width: 1440px){.block__card.svelte-7t394r{gap:30px}}@media(min-width: 768px) and (max-width: 1023.02px){.block__card.svelte-7t394r{max-width:40vw}}@media(min-width: 425px) and (max-width: 1439.02px){.block__card.svelte-7t394r{flex-direction:column;width:500px}}@media(max-width: 424.02px){.block__card.svelte-7t394r{flex-direction:column;gap:15px}}.block__card_title.svelte-7t394r{align-self:flex-start}@media(min-width: 1440px){.block__card_title.svelte-7t394r{max-width:350px;font-size:40px;text-align:center}}@media(min-width: 1440px) and (max-width: 1619.02px){.block__card_title.svelte-7t394r{max-width:350px;font-size:36px;text-align:center}}@media(min-width: 1024px) and (max-width: 1439.02px){.block__card_title.svelte-7t394r{font-size:30px;margin-bottom:10px}}@media(min-width: 768px) and (max-width: 1023.02px){.block__card_title.svelte-7t394r{font-size:30px;margin-bottom:10px}}@media(min-width: 425px) and (max-width: 767.02px){.block__card_title.svelte-7t394r{font-size:34px;margin-bottom:10px}}@media(max-width: 424.02px){.block__card_title.svelte-7t394r{font-size:28px;margin-bottom:10px}}@media(min-width: 1620px){.block__card_text.svelte-7t394r{max-width:35vw;font-size:30px;line-height:42px}}@media(min-width: 1440px) and (max-width: 1619.02px){.block__card_text.svelte-7t394r{max-width:25vw;font-size:28px;line-height:32px}}@media(min-width: 1024px) and (max-width: 1439.02px){.block__card_text.svelte-7t394r{max-width:40vw;font-size:26px;line-height:32px}}@media(min-width: 768px) and (max-width: 1023.02px){.block__card_text.svelte-7t394r{font-size:24px;line-height:30px}}@media(min-width: 425px) and (max-width: 767.02px){.block__card_text.svelte-7t394r{text-align:justify;max-width:100%;font-size:26px;line-height:28px}}@media(max-width: 424.02px){.block__card_text.svelte-7t394r{text-align:justify;font-size:20px;line-height:25px}}",
  map: `{"version":3,"file":"Block.svelte","sources":["Block.svelte"],"sourcesContent":["<script>\\r\\n  export let active = false; \\r\\n  export let title = ''\\r\\n  export let description = ''\\r\\n  export let id = null\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"block \\">\\r\\n  {#if id == 0}\\r\\n      <h2 class=\\"block__title\\">What makes our project stand out?</h2>\\r\\n  {/if}\\r\\n  <div class=\\"block__inner\\">\\r\\n    <div class=\\"block__content {active ? 'block__content--active' : ''}\\" >\\r\\n      <div class=\\"block__card\\">\\r\\n        <p class=\\"block__card_title\\">{title}</p>\\r\\n        <p class=\\"block__card_text\\">{description}</p>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.block {\\n  transition: 0.5s 0.3s;\\n  color: #fff;\\n  height: 100%;\\n}\\n@media (min-width: 1620px) {\\n  .block {\\n    min-height: 600px;\\n  }\\n}\\n@media (min-width: 1440px) and (max-width: 1619.02px) {\\n  .block {\\n    height: 600px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .block {\\n    height: 100vh;\\n    padding-bottom: 20px;\\n  }\\n}\\n.block__inner {\\n  display: flex;\\n  align-items: center;\\n  gap: 30px;\\n  height: 100%;\\n  flex: content;\\n}\\n@media (max-width: 767.02px) {\\n  .block__inner {\\n    flex-direction: column;\\n  }\\n}\\n.block__title {\\n  width: 100%;\\n  font-size: 46px;\\n  text-align: center;\\n  color: #fff;\\n}\\n@media (min-width: 768px) {\\n  .block__title {\\n    margin-top: -80px;\\n    margin-bottom: 80px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .block__title {\\n    font-size: 30px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .block__title {\\n    font-size: 30px;\\n    margin-bottom: -60px;\\n  }\\n}\\n.block__content {\\n  flex: content;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  opacity: 0.2;\\n  transition: 0.4s;\\n}\\n@media (min-width: 1620px) {\\n  .block__content {\\n    min-height: 400px;\\n  }\\n}\\n@media (min-width: 1440px) and (max-width: 1619.02px) {\\n  .block__content {\\n    min-height: 400px;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .block__content {\\n    min-height: 300px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .block__content {\\n    align-items: flex-end;\\n  }\\n}\\n.block__content--active {\\n  opacity: 1;\\n}\\n.block__card {\\n  display: flex;\\n}\\n@media (min-width: 1440px) {\\n  .block__card {\\n    gap: 30px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .block__card {\\n    max-width: 40vw;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 1439.02px) {\\n  .block__card {\\n    flex-direction: column;\\n    width: 500px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .block__card {\\n    flex-direction: column;\\n    gap: 15px;\\n  }\\n}\\n.block__card_title {\\n  align-self: flex-start;\\n}\\n@media (min-width: 1440px) {\\n  .block__card_title {\\n    max-width: 350px;\\n    font-size: 40px;\\n    text-align: center;\\n  }\\n}\\n@media (min-width: 1440px) and (max-width: 1619.02px) {\\n  .block__card_title {\\n    max-width: 350px;\\n    font-size: 36px;\\n    text-align: center;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .block__card_title {\\n    font-size: 30px;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .block__card_title {\\n    font-size: 30px;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .block__card_title {\\n    font-size: 34px;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .block__card_title {\\n    font-size: 28px;\\n    margin-bottom: 10px;\\n  }\\n}\\n@media (min-width: 1620px) {\\n  .block__card_text {\\n    max-width: 35vw;\\n    font-size: 30px;\\n    line-height: 42px;\\n  }\\n}\\n@media (min-width: 1440px) and (max-width: 1619.02px) {\\n  .block__card_text {\\n    max-width: 25vw;\\n    font-size: 28px;\\n    line-height: 32px;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .block__card_text {\\n    max-width: 40vw;\\n    font-size: 26px;\\n    line-height: 32px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .block__card_text {\\n    font-size: 24px;\\n    line-height: 30px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .block__card_text {\\n    text-align: justify;\\n    max-width: 100%;\\n    font-size: 26px;\\n    line-height: 28px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .block__card_text {\\n    text-align: justify;\\n    font-size: 20px;\\n    line-height: 25px;\\n  }\\n}</style>"],"names":[],"mappings":"AAqBmB,oBAAO,CACxB,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IACV,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAO,CACL,UAAU,CAAE,KACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,oBAAO,CACL,MAAM,CAAE,KACV,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,oBAAO,CACL,MAAM,CAAE,KAAK,CACb,cAAc,CAAE,IAClB,CACF,CACA,2BAAc,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,MAAM,CAAE,IAAI,CACZ,IAAI,CAAE,OACR,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,2BAAc,CACZ,cAAc,CAAE,MAClB,CACF,CACA,2BAAc,CACZ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAc,CACZ,UAAU,CAAE,KAAK,CACjB,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,2BAAc,CACZ,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,2BAAc,CACZ,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,KACjB,CACF,CACA,6BAAgB,CACd,IAAI,CAAE,OAAO,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QAAQ,CACzB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,IACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAgB,CACd,UAAU,CAAE,KACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,6BAAgB,CACd,UAAU,CAAE,KACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,6BAAgB,CACd,UAAU,CAAE,KACd,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAgB,CACd,WAAW,CAAE,QACf,CACF,CACA,qCAAwB,CACtB,OAAO,CAAE,CACX,CACA,0BAAa,CACX,OAAO,CAAE,IACX,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,0BAAa,CACX,GAAG,CAAE,IACP,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,0BAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,0BAAa,CACX,cAAc,CAAE,MAAM,CACtB,KAAK,CAAE,KACT,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,0BAAa,CACX,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACF,CACA,gCAAmB,CACjB,UAAU,CAAE,UACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,gCAAmB,CACjB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,gCAAmB,CACjB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,gCAAmB,CACjB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,gCAAmB,CACjB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,gCAAmB,CACjB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,gCAAmB,CACjB,SAAS,CAAE,IAAI,CACf,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,+BAAkB,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,+BAAkB,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,+BAAkB,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,+BAAkB,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,+BAAkB,CAChB,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,+BAAkB,CAChB,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF"}`
};
const Block = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  let { title = "" } = $$props;
  let { description = "" } = $$props;
  let { id = null } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0) $$bindings.title(title);
  if ($$props.description === void 0 && $$bindings.description && description !== void 0) $$bindings.description(description);
  if ($$props.id === void 0 && $$bindings.id && id !== void 0) $$bindings.id(id);
  $$result.css.add(css$7);
  return `<section class="block  svelte-7t394r">${id == 0 ? `<h2 class="block__title svelte-7t394r" data-svelte-h="svelte-10xyvv">What makes our project stand out?</h2>` : ``} <div class="block__inner svelte-7t394r"><div class="${"block__content " + escape(active ? "block__content--active" : "", true) + " svelte-7t394r"}"><div class="block__card svelte-7t394r"><p class="block__card_title svelte-7t394r">${escape(title)}</p> <p class="block__card_text svelte-7t394r">${escape(description)}</p></div></div></div> </section>`;
});
const css$6 = {
  code: ".text.svelte-ysils1{position:relative;height:100vh}.text__content.svelte-ysils1{width:100%;height:100%;display:flex;align-items:center;justify-content:flex-end;height:100%;overflow:hidden}.text__content_wrapper.svelte-ysils1{display:flex;flex-direction:column;gap:20px;max-width:600px;padding:30px;border-radius:50px;background:rgba(0, 0, 0, 0.5960784314);backdrop-filter:blur(5px)}.text__title.svelte-ysils1{font-size:46px;font-weight:700;color:#ffffff;text-shadow:0 0 10px #000}@media(min-width: 425px) and (max-width: 767.02px){.text__title.svelte-ysils1{font-size:40px;line-height:30px}}@media(max-width: 424.02px){.text__title.svelte-ysils1{font-size:34px;line-height:26px}}.text__text.svelte-ysils1{font-size:30px;color:#ffffff}@media(min-width: 425px) and (max-width: 767.02px){.text__text.svelte-ysils1{font-size:24px;line-height:30px}}@media(max-width: 424.02px){.text__text.svelte-ysils1{font-size:20px;line-height:26px}}.text__background.svelte-ysils1{position:absolute;left:0;top:0;width:100%;height:100%;min-height:100vh}.text__background_img.svelte-ysils1{object-fit:cover}",
  map: '{"version":3,"file":"Text.svelte","sources":["Text.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"text\\">\\r\\n  <div class=\\"text__background\\">\\r\\n    <img class=\\"text__background_img\\" src=\\"/images/gameplay.webp\\" alt=\\"background\\">\\r\\n  </div>\\r\\n  <div class=\\"text__content\\">\\r\\n    <div class=\\"text__content_wrapper\\">\\r\\n      <p class=\\"text__title\\">Gameplay:</p>\\r\\n      <p class=\\"text__text\\">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.text {\\n  position: relative;\\n  height: 100vh;\\n}\\n.text__content {\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n.text__content_wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  max-width: 600px;\\n  padding: 30px;\\n  border-radius: 50px;\\n  background: rgba(0, 0, 0, 0.5960784314);\\n  backdrop-filter: blur(5px);\\n}\\n.text__title {\\n  font-size: 46px;\\n  font-weight: 700;\\n  color: #ffffff;\\n  text-shadow: 0 0 10px #000;\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .text__title {\\n    font-size: 40px;\\n    line-height: 30px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .text__title {\\n    font-size: 34px;\\n    line-height: 26px;\\n  }\\n}\\n.text__text {\\n  font-size: 30px;\\n  color: #ffffff;\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .text__text {\\n    font-size: 24px;\\n    line-height: 30px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .text__text {\\n    font-size: 20px;\\n    line-height: 26px;\\n  }\\n}\\n.text__background {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 100vh;\\n}\\n.text__background_img {\\n  object-fit: cover;\\n}</style>"],"names":[],"mappings":"AAgBmB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KACV,CACA,4BAAe,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACZ,CACA,oCAAuB,CACrB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAAY,CAAC,CACvC,eAAe,CAAE,KAAK,GAAG,CAC3B,CACA,0BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IACxB,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,0BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,0BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OACT,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,mCAAsB,CACpB,UAAU,CAAE,KACd"}'
};
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<section class="text svelte-ysils1" data-svelte-h="svelte-1bwy7q0"><div class="text__background svelte-ysils1"><img class="text__background_img svelte-ysils1" src="/images/gameplay.webp" alt="background"></div> <div class="text__content svelte-ysils1"><div class="text__content_wrapper svelte-ysils1"><p class="text__title svelte-ysils1">Gameplay:</p> <p class="text__text svelte-ysils1">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p></div></div> </section>`;
});
const css$5 = {
  code: ".card.svelte-1ognt6f.svelte-1ognt6f{padding:10px;width:100%;height:100%;border:none;-webkit-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;cursor:pointer;background:transparent}@media(min-width: 1024px){.card.svelte-1ognt6f:hover .card__inner.svelte-1ognt6f{transform:rotateX(180deg);-webkit-transform:rotateX(180deg)}}@media(max-width: 1023.02px){.card--active.svelte-1ognt6f .card__inner.svelte-1ognt6f{transform:rotateX(180deg);-webkit-transform:rotateX(180deg)}}.card__inner.svelte-1ognt6f.svelte-1ognt6f{position:relative;height:100%;width:100%;-webkit-perspective:1000px;perspective:1000px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all 800ms;transition:all 800ms;z-index:20}.card__side.svelte-1ognt6f.svelte-1ognt6f{position:absolute;height:100%;width:100%;-webkit-backface-visibility:hidden;backface-visibility:hidden;border-radius:30px;background:#222;color:#fff;overflow:hidden}@media(min-width: 425px){.card__side.svelte-1ognt6f.svelte-1ognt6f{padding:20px 15px}}@media(max-width: 424.02px){.card__side.svelte-1ognt6f.svelte-1ognt6f{padding:25px 15px}}.card__front.svelte-1ognt6f.svelte-1ognt6f{background-position:center;background-size:cover;color:#222}.card__back.svelte-1ognt6f.svelte-1ognt6f{display:flex;flex-direction:column;-webkit-transform:rotateX(180deg);transform:rotateX(180deg)}@media(min-width: 1024px){.card__back.svelte-1ognt6f.svelte-1ognt6f{gap:20px}}@media(max-width: 1023.02px){.card__back.svelte-1ognt6f.svelte-1ognt6f{gap:15px}}.card__title.svelte-1ognt6f.svelte-1ognt6f{text-align:center}@media(min-width: 1024px){.card__title.svelte-1ognt6f.svelte-1ognt6f{font-size:35px}}@media(max-width: 1023.02px){.card__title.svelte-1ognt6f.svelte-1ognt6f{font-size:34px}}@media(min-width: 1440px){.card__text.svelte-1ognt6f.svelte-1ognt6f{font-size:20px;line-height:24px;text-align:justify}}@media(min-width: 1024px) and (max-width: 1439.02px){.card__text.svelte-1ognt6f.svelte-1ognt6f{font-size:18px;line-height:24px;text-align:justify}}@media(min-width: 425px) and (max-width: 1023.02px){.card__text.svelte-1ognt6f.svelte-1ognt6f{font-size:22px;line-height:28px;letter-spacing:0.5px}}@media(max-width: 424.02px){.card__text.svelte-1ognt6f.svelte-1ognt6f{font-size:22px;line-height:24px;letter-spacing:0.5px}}",
  map: `{"version":3,"file":"RolesCard.svelte","sources":["RolesCard.svelte"],"sourcesContent":["<script>\\r\\n  export let front = {src: '', title: ''}\\r\\n  export let back = {title: '', text: ''}\\r\\n\\r\\n  let isOpen = false \\r\\n<\/script>\\r\\n\\r\\n<button type=\\"button\\" class=\\"card {isOpen && 'card--active'}\\" on:click={() => isOpen = !isOpen}>\\r\\n  <div class=\\"card__inner\\">\\r\\n    <div class=\\"card__side card__front\\" style=\\"background-image: url({front.src})\\">\\r\\n      <h3 class=\\"card__title\\">{front.title}</h3>\\r\\n    </div>\\r\\n    <div class=\\"card__side card__back\\">\\r\\n      <h3 class=\\"card__title\\">{back.title}</h3>\\r\\n      <p class=\\"card__text\\">{back.text}</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</button>\\r\\n\\r\\n<style lang=\\"scss\\">.card {\\n  padding: 10px;\\n  width: 100%;\\n  height: 100%;\\n  border: none;\\n  -webkit-perspective: 1000px;\\n  perspective: 1000px;\\n  -webkit-transform-style: preserve-3d;\\n  transform-style: preserve-3d;\\n  cursor: pointer;\\n  background: transparent;\\n}\\n@media (min-width: 1024px) {\\n  .card:hover .card__inner {\\n    transform: rotateX(180deg);\\n    -webkit-transform: rotateX(180deg);\\n  }\\n}\\n@media (max-width: 1023.02px) {\\n  .card--active .card__inner {\\n    transform: rotateX(180deg);\\n    -webkit-transform: rotateX(180deg);\\n  }\\n}\\n.card__inner {\\n  position: relative;\\n  height: 100%;\\n  width: 100%;\\n  -webkit-perspective: 1000px;\\n  perspective: 1000px;\\n  -webkit-transform-style: preserve-3d;\\n  transform-style: preserve-3d;\\n  -webkit-transition: all 800ms;\\n  transition: all 800ms;\\n  z-index: 20;\\n}\\n.card__side {\\n  position: absolute;\\n  height: 100%;\\n  width: 100%;\\n  -webkit-backface-visibility: hidden;\\n  backface-visibility: hidden;\\n  border-radius: 30px;\\n  background: #222;\\n  color: #fff;\\n  overflow: hidden;\\n}\\n@media (min-width: 425px) {\\n  .card__side {\\n    padding: 20px 15px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .card__side {\\n    padding: 25px 15px;\\n  }\\n}\\n.card__front {\\n  background-position: center;\\n  background-size: cover;\\n  color: #222;\\n}\\n.card__back {\\n  display: flex;\\n  flex-direction: column;\\n  -webkit-transform: rotateX(180deg);\\n  transform: rotateX(180deg);\\n}\\n@media (min-width: 1024px) {\\n  .card__back {\\n    gap: 20px;\\n  }\\n}\\n@media (max-width: 1023.02px) {\\n  .card__back {\\n    gap: 15px;\\n  }\\n}\\n.card__title {\\n  text-align: center;\\n}\\n@media (min-width: 1024px) {\\n  .card__title {\\n    font-size: 35px;\\n  }\\n}\\n@media (max-width: 1023.02px) {\\n  .card__title {\\n    font-size: 34px;\\n  }\\n}\\n@media (min-width: 1440px) {\\n  .card__text {\\n    font-size: 20px;\\n    line-height: 24px;\\n    text-align: justify;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .card__text {\\n    font-size: 18px;\\n    line-height: 24px;\\n    text-align: justify;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 1023.02px) {\\n  .card__text {\\n    font-size: 22px;\\n    line-height: 28px;\\n    letter-spacing: 0.5px;\\n  }\\n}\\n@media (max-width: 424.02px) {\\n  .card__text {\\n    font-size: 22px;\\n    line-height: 24px;\\n    letter-spacing: 0.5px;\\n  }\\n}</style>"],"names":[],"mappings":"AAmBmB,mCAAM,CACvB,OAAO,CAAE,IAAI,CACb,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,MAAM,CAAE,IAAI,CACZ,mBAAmB,CAAE,MAAM,CAC3B,WAAW,CAAE,MAAM,CACnB,uBAAuB,CAAE,WAAW,CACpC,eAAe,CAAE,WAAW,CAC5B,MAAM,CAAE,OAAO,CACf,UAAU,CAAE,WACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,oBAAK,MAAM,CAAC,2BAAa,CACvB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,iBAAiB,CAAE,QAAQ,MAAM,CACnC,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,4BAAa,CAAC,2BAAa,CACzB,SAAS,CAAE,QAAQ,MAAM,CAAC,CAC1B,iBAAiB,CAAE,QAAQ,MAAM,CACnC,CACF,CACA,0CAAa,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,mBAAmB,CAAE,MAAM,CAC3B,WAAW,CAAE,MAAM,CACnB,uBAAuB,CAAE,WAAW,CACpC,eAAe,CAAE,WAAW,CAC5B,kBAAkB,CAAE,GAAG,CAAC,KAAK,CAC7B,UAAU,CAAE,GAAG,CAAC,KAAK,CACrB,OAAO,CAAE,EACX,CACA,yCAAY,CACV,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,KAAK,CAAE,IAAI,CACX,2BAA2B,CAAE,MAAM,CACnC,mBAAmB,CAAE,MAAM,CAC3B,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IAAI,CACX,QAAQ,CAAE,MACZ,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,yCAAY,CACV,OAAO,CAAE,IAAI,CAAC,IAChB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,yCAAY,CACV,OAAO,CAAE,IAAI,CAAC,IAChB,CACF,CACA,0CAAa,CACX,mBAAmB,CAAE,MAAM,CAC3B,eAAe,CAAE,KAAK,CACtB,KAAK,CAAE,IACT,CACA,yCAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,iBAAiB,CAAE,QAAQ,MAAM,CAAC,CAClC,SAAS,CAAE,QAAQ,MAAM,CAC3B,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,yCAAY,CACV,GAAG,CAAE,IACP,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,yCAAY,CACV,GAAG,CAAE,IACP,CACF,CACA,0CAAa,CACX,UAAU,CAAE,MACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,0CAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,0CAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,yCAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,OACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,yCAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,UAAU,CAAE,OACd,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,yCAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,KAClB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,yCAAY,CACV,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IAAI,CACjB,cAAc,CAAE,KAClB,CACF"}`
};
const RolesCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { front = { src: "", title: "" } } = $$props;
  let { back = { title: "", text: "" } } = $$props;
  let isOpen = false;
  if ($$props.front === void 0 && $$bindings.front && front !== void 0) $$bindings.front(front);
  if ($$props.back === void 0 && $$bindings.back && back !== void 0) $$bindings.back(back);
  $$result.css.add(css$5);
  return `<button type="button" class="${"card " + escape(isOpen, true) + " svelte-1ognt6f"}"><div class="card__inner svelte-1ognt6f"><div class="card__side card__front svelte-1ognt6f" style="${"background-image: url(" + escape(front.src, true) + ")"}"><h3 class="card__title svelte-1ognt6f">${escape(front.title)}</h3></div> <div class="card__side card__back svelte-1ognt6f"><h3 class="card__title svelte-1ognt6f">${escape(back.title)}</h3> <p class="card__text svelte-1ognt6f">${escape(back.text)}</p></div></div> </button>`;
});
const css$4 = {
  code: ".roles.svelte-180dag0.svelte-180dag0{width:100%;padding-left:0;padding-right:0;height:100vh}.roles__inner.svelte-180dag0.svelte-180dag0{width:100%;display:flex;flex-direction:column;height:100%;gap:20px}@media(min-width: 1620px){.roles__inner.svelte-180dag0.svelte-180dag0{gap:50px}}@media(min-width: 1440px) and (max-width: 1619.02px){.roles__inner.svelte-180dag0.svelte-180dag0{gap:40px}}.roles__slider_content.svelte-180dag0.svelte-180dag0{flex:content;display:flex;align-items:center}.roles__slider_content.svelte-180dag0>div.svelte-180dag0{width:100%}",
  map: `{"version":3,"file":"Roles.svelte","sources":["Roles.svelte"],"sourcesContent":["<script>\\r\\n  import RolesCard from \\"./RolesCard.svelte\\";\\r\\n  import Title from \\"../../Title.svelte\\";\\r\\n\\r\\n  import { Splide, SplideSlide } from '@splidejs/svelte-splide';\\r\\n  import '@splidejs/svelte-splide/css';\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"roles\\">\\r\\n  <div class=\\"roles__inner\\">\\r\\n    <Title text='Roles and Opportunities'/>\\r\\n\\r\\n    <div class=\\"roles__slider_content\\">\\r\\n      <div>\\r\\n        <Splide class='slider' \\r\\n          options={{\\r\\n            autoHeight: true,\\r\\n            height   : '500px',\\r\\n            padding: '30px',\\r\\n            arrows: false,\\r\\n            pagination: false,\\r\\n            perPage: 4,\\r\\n            breakpoints: {\\r\\n              1440: {\\r\\n                perPage: 4,\\r\\n                height: '500px',\\r\\n              },\\r\\n              1280: {\\r\\n                padding: '30px',\\r\\n                perPage: 3,\\r\\n                height   : '450px',\\r\\n              },\\r\\n              1024: {\\r\\n                padding: '50px',\\r\\n                perPage: 2,\\r\\n                height   : '500px',\\r\\n              },\\r\\n              800: {\\r\\n                padding: '100px',\\r\\n                perPage: 1,\\r\\n                height   : '500px',\\r\\n              },\\r\\n              560: {\\r\\n                gap: '10px',\\r\\n                padding: '30px',\\r\\n                perPage: 1,\\r\\n                height   : '500px',\\r\\n              }\\r\\n            }\\r\\n          }}\\r\\n          \\r\\n          >\\r\\n          <SplideSlide>\\r\\n            <RolesCard \\r\\n              front={{src: '/images/roles/digger.webp', title: 'Digger'}} \\r\\n              back={{title: 'Digger', text: \`Players who have chosen this role go on expeditions to various lands to mine for gold. Each new exploration or mining attempt can result in a large “catch” - digital gold that can be sold on the game's internal market for cryptocurrency. This is an active role where success depends on the ability to find profitable areas and choose the right tools.\`}}\\r\\n            />\\r\\n          </SplideSlide>\\r\\n          \\r\\n          <SplideSlide>\\r\\n            <RolesCard \\r\\n              front={{src: '/images/roles/landLord.webp', title: 'LandLord'}} \\r\\n              back={{title: 'LandLord', text: \`LandLord owns parcels of land that can be leased to gold miners. Land ownership is secured through NFTs, which are unique assets with real value. The better the parcel of land, the more profit can be gained for the lease. In this way, LandLord earns passive income without directly participating in mining.\`}}\\r\\n            />\\r\\n          </SplideSlide>\\r\\n  \\r\\n          <SplideSlide>\\r\\n            <RolesCard \\r\\n              front={{src: '/images/roles/toolLord.webp', title: 'ToolLord'}} \\r\\n              back={{title: 'ToolLord', text: \`ToolLord invests in equipment and tools that are vital to gold miners. Players can rent these tools for mining, and ToolLord receives a steady rental income. Like land, the tools are NFTs, providing the owner with ownership of a unique digital asset.\`}}\\r\\n            />\\r\\n          </SplideSlide>\\r\\n  \\r\\n          <SplideSlide>\\r\\n            <RolesCard \\r\\n              front={{src: '/images/roles/islandLord.webp', title: 'IslandLord'}} \\r\\n              back={{title: 'IslandLord', text: \`IslandLord owns entire islands that can be rented out or used to create large events and activities within the game. This is the most elite role with great passive income opportunities. By owning an island through NFT, IslandLord controls large tracts of virtual real estate, which creates additional demand among players.\`}}\\r\\n            />\\r\\n          </SplideSlide>\\r\\n        </Splide>\\r\\n      </div>\\r\\n    </div>\\r\\n    \\r\\n    \\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.roles {\\n  width: 100%;\\n  padding-left: 0;\\n  padding-right: 0;\\n  height: 100vh;\\n}\\n.roles__inner {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n  height: 100%;\\n  gap: 20px;\\n}\\n@media (min-width: 1620px) {\\n  .roles__inner {\\n    gap: 50px;\\n  }\\n}\\n@media (min-width: 1440px) and (max-width: 1619.02px) {\\n  .roles__inner {\\n    gap: 40px;\\n  }\\n}\\n.roles__slider_content {\\n  flex: content;\\n  display: flex;\\n  align-items: center;\\n}\\n.roles__slider_content > div {\\n  width: 100%;\\n}</style>"],"names":[],"mappings":"AAuFmB,oCAAO,CACxB,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,CAAC,CACf,aAAa,CAAE,CAAC,CAChB,MAAM,CAAE,KACV,CACA,2CAAc,CACZ,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,MAAM,CAAE,IAAI,CACZ,GAAG,CAAE,IACP,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,2CAAc,CACZ,GAAG,CAAE,IACP,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,2CAAc,CACZ,GAAG,CAAE,IACP,CACF,CACA,oDAAuB,CACrB,IAAI,CAAE,OAAO,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,qCAAsB,CAAG,kBAAI,CAC3B,KAAK,CAAE,IACT"}`
};
const Roles = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="roles svelte-180dag0"><div class="roles__inner svelte-180dag0">${validate_component(Title, "Title").$$render($$result, { text: "Roles and Opportunities" }, {}, {})} <div class="roles__slider_content svelte-180dag0"><div class="svelte-180dag0">${validate_component(Splide_1, "Splide").$$render(
    $$result,
    {
      class: "slider",
      options: {
        autoHeight: true,
        height: "500px",
        padding: "30px",
        arrows: false,
        pagination: false,
        perPage: 4,
        breakpoints: {
          1440: { perPage: 4, height: "500px" },
          1280: {
            padding: "30px",
            perPage: 3,
            height: "450px"
          },
          1024: {
            padding: "50px",
            perPage: 2,
            height: "500px"
          },
          800: {
            padding: "100px",
            perPage: 1,
            height: "500px"
          },
          560: {
            gap: "10px",
            padding: "30px",
            perPage: 1,
            height: "500px"
          }
        }
      }
    },
    {},
    {
      default: () => {
        return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(RolesCard, "RolesCard").$$render(
              $$result,
              {
                front: {
                  src: "/images/roles/digger.webp",
                  title: "Digger"
                },
                back: {
                  title: "Digger",
                  text: `Players who have chosen this role go on expeditions to various lands to mine for gold. Each new exploration or mining attempt can result in a large “catch” - digital gold that can be sold on the game's internal market for cryptocurrency. This is an active role where success depends on the ability to find profitable areas and choose the right tools.`
                }
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(RolesCard, "RolesCard").$$render(
              $$result,
              {
                front: {
                  src: "/images/roles/landLord.webp",
                  title: "LandLord"
                },
                back: {
                  title: "LandLord",
                  text: `LandLord owns parcels of land that can be leased to gold miners. Land ownership is secured through NFTs, which are unique assets with real value. The better the parcel of land, the more profit can be gained for the lease. In this way, LandLord earns passive income without directly participating in mining.`
                }
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(RolesCard, "RolesCard").$$render(
              $$result,
              {
                front: {
                  src: "/images/roles/toolLord.webp",
                  title: "ToolLord"
                },
                back: {
                  title: "ToolLord",
                  text: `ToolLord invests in equipment and tools that are vital to gold miners. Players can rent these tools for mining, and ToolLord receives a steady rental income. Like land, the tools are NFTs, providing the owner with ownership of a unique digital asset.`
                }
              },
              {},
              {}
            )}`;
          }
        })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
          default: () => {
            return `${validate_component(RolesCard, "RolesCard").$$render(
              $$result,
              {
                front: {
                  src: "/images/roles/islandLord.webp",
                  title: "IslandLord"
                },
                back: {
                  title: "IslandLord",
                  text: `IslandLord owns entire islands that can be rented out or used to create large events and activities within the game. This is the most elite role with great passive income opportunities. By owning an island through NFT, IslandLord controls large tracts of virtual real estate, which creates additional demand among players.`
                }
              },
              {},
              {}
            )}`;
          }
        })}`;
      }
    }
  )}</div></div></div> </section>`;
});
const css$3 = {
  code: '.link.svelte-ma4c1v{position:relative;display:flex;align-items:center;gap:20px;width:max-content;text-decoration:none;padding:10px 0;overflow:hidden;transition:0.3s;color:#fff}.link.svelte-ma4c1v::before{content:"";position:absolute;bottom:0px;left:-100%;width:100%;height:2px;border-radius:5px;background:#fff;transition:0.3s}.link.svelte-ma4c1v:hover{color:#fff}.link.svelte-ma4c1v:hover::before{left:0}@media(min-width: 768px){.link__icon.svelte-ma4c1v{max-width:40px;max-height:40px}}@media(max-width: 767.02px){.link__icon.svelte-ma4c1v{max-width:30px;max-height:30px}}@media(min-width: 768px){.link__text.svelte-ma4c1v{font-size:30px}}@media(max-width: 767.02px){.link__text.svelte-ma4c1v{font-size:20px}}',
  map: `{"version":3,"file":"Link.svelte","sources":["Link.svelte"],"sourcesContent":["<script>\\r\\n  export let icon\\r\\n  export let text = ''\\r\\n  export let href = '#'\\r\\n<\/script>\\r\\n\\r\\n<a {href} class=\\"link\\" target=\\"_blank\\">\\r\\n  {#if icon}\\r\\n    <span class=\\"link__icon\\">{@html icon}</span>\\r\\n  {/if}\\r\\n  <span class=\\"link__text\\">{text}</span>\\r\\n</a>\\r\\n\\r\\n<style lang=\\"scss\\">.link {\\n  position: relative;\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  width: max-content;\\n  text-decoration: none;\\n  padding: 10px 0;\\n  overflow: hidden;\\n  transition: 0.3s;\\n  color: #fff;\\n}\\n.link::before {\\n  content: \\"\\";\\n  position: absolute;\\n  bottom: 0px;\\n  left: -100%;\\n  width: 100%;\\n  height: 2px;\\n  border-radius: 5px;\\n  background: #fff;\\n  transition: 0.3s;\\n}\\n.link:hover {\\n  color: #fff;\\n}\\n.link:hover::before {\\n  left: 0;\\n}\\n@media (min-width: 768px) {\\n  .link__icon {\\n    max-width: 40px;\\n    max-height: 40px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .link__icon {\\n    max-width: 30px;\\n    max-height: 30px;\\n  }\\n}\\n@media (min-width: 768px) {\\n  .link__text {\\n    font-size: 30px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .link__text {\\n    font-size: 20px;\\n  }\\n}</style>"],"names":[],"mappings":"AAamB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,WAAW,CAClB,eAAe,CAAE,IAAI,CACrB,OAAO,CAAE,IAAI,CAAC,CAAC,CACf,QAAQ,CAAE,MAAM,CAChB,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IACT,CACA,mBAAK,QAAS,CACZ,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,GAAG,CACX,IAAI,CAAE,KAAK,CACX,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,aAAa,CAAE,GAAG,CAClB,UAAU,CAAE,IAAI,CAChB,UAAU,CAAE,IACd,CACA,mBAAK,MAAO,CACV,KAAK,CAAE,IACT,CACA,mBAAK,MAAM,QAAS,CAClB,IAAI,CAAE,CACR,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IACd,CACF,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,yBAAY,CACV,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,yBAAY,CACV,SAAS,CAAE,IACb,CACF"}`
};
const Link = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon } = $$props;
  let { text = "" } = $$props;
  let { href = "#" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0) $$bindings.icon(icon);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0) $$bindings.text(text);
  if ($$props.href === void 0 && $$bindings.href && href !== void 0) $$bindings.href(href);
  $$result.css.add(css$3);
  return `<a${add_attribute("href", href, 0)} class="link svelte-ma4c1v" target="_blank">${icon ? `<span class="link__icon svelte-ma4c1v"><!-- HTML_TAG_START -->${icon}<!-- HTML_TAG_END --></span>` : ``} <span class="link__text svelte-ma4c1v">${escape(text)}</span> </a>`;
});
const css$2 = {
  code: ".contact.svelte-ojbnzy{height:100vh;width:100%;display:flex;align-items:center}.contact__inner.svelte-ojbnzy{width:100%;display:flex;flex-direction:column}@media(min-width: 768px){.contact__inner.svelte-ojbnzy{gap:100px}}@media(max-width: 767.02px){.contact__inner.svelte-ojbnzy{align-items:center;gap:60px}}.contact__content.svelte-ojbnzy{display:flex;flex-direction:column;justify-content:center;height:100%}@media(min-width: 768px){.contact__content.svelte-ojbnzy{gap:20px}}",
  map: `{"version":3,"file":"ContactUs.svelte","sources":["ContactUs.svelte"],"sourcesContent":["<script>\\r\\n  import Link from \\"../Link.svelte\\";\\r\\n  import Title from \\"../Title.svelte\\";\\r\\n  import { telegram, twiter, email} from \\"../../icons\\";\\r\\n\\r\\n  export let active = false\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"contact\\">\\r\\n  <div class=\\"contact__inner\\">\\r\\n    <Title text=\\"Contact us\\" {active}/>\\r\\n    <div class=\\"contact__content\\">\\r\\n      <Link icon={telegram} text='t.me/glebecommunity' href=\\"https://t.me/glebecommunity\\"/>\\r\\n      <Link icon={twiter} text='x.com/GlebeComm' href=\\"https://x.com/GlebeComm\\"/>\\r\\n      <Link icon={email} text='info@glebe.online' href=\\"mailto:info@glebe.online\\"/>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.contact {\\n  height: 100vh;\\n  width: 100%;\\n  display: flex;\\n  align-items: center;\\n}\\n.contact__inner {\\n  width: 100%;\\n  display: flex;\\n  flex-direction: column;\\n}\\n@media (min-width: 768px) {\\n  .contact__inner {\\n    gap: 100px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .contact__inner {\\n    align-items: center;\\n    gap: 60px;\\n  }\\n}\\n.contact__content {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  height: 100%;\\n}\\n@media (min-width: 768px) {\\n  .contact__content {\\n    gap: 20px;\\n  }\\n}</style>"],"names":[],"mappings":"AAmBmB,sBAAS,CAC1B,MAAM,CAAE,KAAK,CACb,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,6BAAgB,CACd,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAClB,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAgB,CACd,GAAG,CAAE,KACP,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAgB,CACd,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IACP,CACF,CACA,+BAAkB,CAChB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,eAAe,CAAE,MAAM,CACvB,MAAM,CAAE,IACV,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,+BAAkB,CAChB,GAAG,CAAE,IACP,CACF"}`
};
const ContactUs = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  $$result.css.add(css$2);
  return `<section class="contact svelte-ojbnzy"><div class="contact__inner svelte-ojbnzy">${validate_component(Title, "Title").$$render($$result, { text: "Contact us", active }, {}, {})} <div class="contact__content svelte-ojbnzy">${validate_component(Link, "Link").$$render(
    $$result,
    {
      icon: telegram,
      text: "t.me/glebecommunity",
      href: "https://t.me/glebecommunity"
    },
    {},
    {}
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      icon: twiter,
      text: "x.com/GlebeComm",
      href: "https://x.com/GlebeComm"
    },
    {},
    {}
  )} ${validate_component(Link, "Link").$$render(
    $$result,
    {
      icon: email,
      text: "info@glebe.online",
      href: "mailto:info@glebe.online"
    },
    {},
    {}
  )}</div></div> </section>`;
});
const css$1 = {
  code: ".team.svelte-1clc3du{position:relative;height:100vh}.team__content.svelte-1clc3du{display:flex;align-items:center;justify-content:flex-end;height:100%}.team__content_inner.svelte-1clc3du{display:flex;flex-direction:column;gap:20px;max-width:600px;backdrop-filter:blur(5px);background:rgba(0, 0, 0, 0.5960784314)}@media(min-width: 768px){.team__content_inner.svelte-1clc3du{padding:30px;border-radius:50px}}@media(min-width: 425px) and (max-width: 767.02px){.team__content_inner.svelte-1clc3du{padding:25px;border-radius:40px}}@media(max-width: 767.02px){.team__content_inner.svelte-1clc3du{padding:20px;border-radius:30px}}.team__title.svelte-1clc3du{font-weight:700;text-shadow:0 0 10px #000;color:#ffffff}@media(min-width: 768px){.team__title.svelte-1clc3du{font-size:46px}}@media(min-width: 425px) and (max-width: 767.02px){.team__title.svelte-1clc3du{font-size:36px}}@media(max-width: 767.02px){.team__title.svelte-1clc3du{font-size:30px}}.team__text.svelte-1clc3du{display:flex;flex-direction:column;gap:10px;color:#ffffff}@media(min-width: 768px){.team__text.svelte-1clc3du{font-size:30px}}@media(min-width: 425px) and (max-width: 767.02px){.team__text.svelte-1clc3du{font-size:26px}}@media(max-width: 767.02px){.team__text.svelte-1clc3du{font-size:24px}}.team__background.svelte-1clc3du{position:absolute;left:0;top:0;width:100%;height:100%;min-height:100vh}.team__background_img.svelte-1clc3du{object-fit:cover}",
  map: '{"version":3,"file":"Team.svelte","sources":["Team.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"team\\">\\r\\n  <div class=\\"team__background\\">\\r\\n    <img class=\\"team__background_img\\" src=\\"/images/team.webp\\" alt=\\"background\\">\\r\\n  </div>\\r\\n  <div class=\\"team__content\\">\\r\\n    <div class=\\"team__content_inner\\">\\r\\n      <p class=\\"team__title\\">Team with long experience</p>\\r\\n      <div class=\\"team__text\\">\\r\\n        <p><span class=\\"team__text_title\\">Experience: </span>Our team consists of industry professionals with more than 12 years of experience in game development, as well as participation in successful projects for social networks, mobile platforms and PC.</p>\\r\\n        <p><span class=\\"team__text_title\\">Key contributors: </span>Programmers, game designers, artists, blockchain specialists and QA who will ensure high performance and game security for many years.</p>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.team {\\n  position: relative;\\n  height: 100vh;\\n}\\n.team__content {\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  height: 100%;\\n}\\n.team__content_inner {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  max-width: 600px;\\n  backdrop-filter: blur(5px);\\n  background: rgba(0, 0, 0, 0.5960784314);\\n}\\n@media (min-width: 768px) {\\n  .team__content_inner {\\n    padding: 30px;\\n    border-radius: 50px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .team__content_inner {\\n    padding: 25px;\\n    border-radius: 40px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .team__content_inner {\\n    padding: 20px;\\n    border-radius: 30px;\\n  }\\n}\\n.team__title {\\n  font-weight: 700;\\n  text-shadow: 0 0 10px #000;\\n  color: #ffffff;\\n}\\n@media (min-width: 768px) {\\n  .team__title {\\n    font-size: 46px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .team__title {\\n    font-size: 36px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .team__title {\\n    font-size: 30px;\\n  }\\n}\\n.team__text {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 10px;\\n  color: #ffffff;\\n}\\n@media (min-width: 768px) {\\n  .team__text {\\n    font-size: 30px;\\n  }\\n}\\n@media (min-width: 425px) and (max-width: 767.02px) {\\n  .team__text {\\n    font-size: 26px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .team__text {\\n    font-size: 24px;\\n  }\\n}\\n.team__background {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 100vh;\\n}\\n.team__background_img {\\n  object-fit: cover;\\n}</style>"],"names":[],"mappings":"AAmBmB,oBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,KACV,CACA,6BAAe,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QAAQ,CACzB,MAAM,CAAE,IACV,CACA,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,CAChB,eAAe,CAAE,KAAK,GAAG,CAAC,CAC1B,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAAY,CACxC,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IACjB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,mCAAqB,CACnB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IACjB,CACF,CACA,2BAAa,CACX,WAAW,CAAE,GAAG,CAChB,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAC1B,KAAK,CAAE,OACT,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,2BAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,2BAAa,CACX,SAAS,CAAE,IACb,CACF,CACA,0BAAY,CACV,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,KAAK,CAAE,OACT,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,0BAAY,CACV,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,QAAQ,CAAE,CAClD,0BAAY,CACV,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,0BAAY,CACV,SAAS,CAAE,IACb,CACF,CACA,gCAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,oCAAsB,CACpB,UAAU,CAAE,KACd"}'
};
const Team = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="team svelte-1clc3du" data-svelte-h="svelte-18icn8k"><div class="team__background svelte-1clc3du"><img class="team__background_img svelte-1clc3du" src="/images/team.webp" alt="background"></div> <div class="team__content svelte-1clc3du"><div class="team__content_inner svelte-1clc3du"><p class="team__title svelte-1clc3du">Team with long experience</p> <div class="team__text svelte-1clc3du"><p><span class="team__text_title">Experience: </span>Our team consists of industry professionals with more than 12 years of experience in game development, as well as participation in successful projects for social networks, mobile platforms and PC.</p> <p><span class="team__text_title">Key contributors: </span>Programmers, game designers, artists, blockchain specialists and QA who will ensure high performance and game security for many years.</p></div></div></div> </section>`;
});
const css = {
  code: ".wrapper.svelte-1fpihox{position:relative}section{max-height:100vh;position:relative}@media(min-width: 1440px){section{padding:90px 50px 50px}}@media(min-width: 1024px) and (max-width: 1439.02px){section{padding:90px 40px 50px}}@media(min-width: 768px) and (max-width: 1023.02px){section{padding:90px 30px 50px}}@media(max-width: 767.02px){section{padding:90px 15px 50px}}.image.svelte-1fpihox{position:fixed;top:150vh;left:50px;transform:translateY(-50%);width:100%;aspect-ratio:1.5/1;pointer-events:none;visibility:hidden;opacity:0}@media(min-width: 1440px){.image.svelte-1fpihox{transform:translateY(-50%);max-width:580px}}@media(min-width: 1024px) and (max-width: 1439.02px){.image.svelte-1fpihox{transform:translateY(-50%);max-width:400px}}@media(min-width: 768px) and (max-width: 1023.02px){.image.svelte-1fpihox{transform:translateY(-50%);left:30px;max-width:380px}}@media(max-width: 767.02px){.image.svelte-1fpihox{transform:translateY(-50%) translateX(-50%);left:50%;max-width:450px}}.image--show.svelte-1fpihox{opacity:1;visibility:visible}@media(min-width: 768px){.image--show.svelte-1fpihox{transform:translateY(-50%)}}@media(max-width: 767.02px){.image--show.svelte-1fpihox{transform:translateY(-100%) translateX(-50%)}}@media(max-width: 767.02px){.image__first.svelte-1fpihox{transform:translateY(-65%) translateX(-50%)}}.image__wrapper.svelte-1fpihox{position:relative;height:100%;overflow:hidden}.image__inner.svelte-1fpihox{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transition:1s;opacity:0;transform:scale(100%)}.image--active.svelte-1fpihox{opacity:1;z-index:1;transform:scale(110%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import { Splide, SplideSlide } from '@splidejs/svelte-splide';\\r\\n  import '@splidejs/svelte-splide/css';\\r\\n  import { onMount } from \\"svelte\\";\\r\\n  import Header from \\"../lib/components/Sections/Header.svelte\\";\\r\\n  import Footer from \\"../lib/components/Sections/Footer.svelte\\";\\r\\n  import Hero from \\"../lib/components/Sections/Hero.svelte\\";\\r\\n  import About from \\"../lib/components/Sections/About.svelte\\";\\r\\n  import Block from \\"../lib/components/Sections/Block.svelte\\";\\r\\n  import Text from \\"../lib/components/Sections/Text.svelte\\";\\r\\n  import Roles from \\"../lib/components/Sections/Roles/Roles.svelte\\";\\r\\n  import ContactUs from \\"../lib/components/Sections/ContactUs.svelte\\";\\r\\n  import Team from \\"../lib/components/Sections/Team.svelte\\";\\r\\n\\r\\n  const blocks = [\\r\\n    {\\r\\n      title: 'Unique land exploration system:',\\r\\n      description: 'Players can explore various lands and find areas with varying profitability, which creates constant dynamics and new opportunities in the gameplay.',\\r\\n      src: '/images/block/Unique-land_size.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'Variety of ways for earning:',\\r\\n      description: \`Glebe offers the opportunity to build different business models, including earning without initial investment.\`,\\r\\n      src: '/images/block/Variety-of-ways_size.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'Passive income through NFT ownership:',\\r\\n      description: 'Owners of land and other in-game assets can earn a steady income by renting them out, allowing them to earn even without actively participating in the gameplay.',\\r\\n      src: '/images/block/Passive-income-through-NFT_size.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'Deep integration of NFT with gameplay:',\\r\\n      description: \`Owners of lands, tools and islands don't just own digital assets - they manage assets that can generate real passive income through rentals and other in-game transactions. This makes the game's economy deeper and more dynamic, providing players real opportunities for long-term investment.\`,\\r\\n      src: '/images/block/Deep-integration-of-NFT_size.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'Variety of game roles: ',\\r\\n      description: 'Glebe offers the unique ability to choose multiple roles, each providing players with different ways of earning. Players can participate both actively (e.g. gold miners) and passively (asset owners), which appeals to different categories of users - from those looking for fun to those interested in passive income through NFT management.',\\r\\n      src: '/images/block/Variety-of-game-roles_size.webp'\\r\\n    },\\r\\n  ]\\r\\n\\r\\n  const sections = [\\r\\n    // {name: 'Hero', id: 0}, \\r\\n    {name: 'About', id: 1}, \\r\\n    {name: 'Gameplay', id: 2}, \\r\\n    {name: 'Roles', id: 3}, \\r\\n    {name: 'Differences', id: 4},\\r\\n    {name: 'Team', id: 9},\\r\\n    {name: 'Contact', id: 10}\\r\\n  ]\\r\\n\\r\\n  const delay = 800\\r\\n  const easing = 'ease-in-out'\\r\\n\\r\\n  let slideActiveId = 0\\r\\n  let blockActiveId = 0\\r\\n  let mySlider\\r\\n  let image\\r\\n  let imageisShow = false\\r\\n\\r\\n  let arrHeight = []\\r\\n\\r\\n  onMount(() => {\\r\\n    image.style.transition = \`\${delay / 1000}s \${easing}\`\\r\\n    arrHeight = mySlider.splide.Components.Elements.slides.map(slide => slide.scrollHeight)\\r\\n  })\\r\\n\\r\\n  function imageHandler(e) {\\r\\n    const index = e.detail.index\\r\\n    const startId = 4\\r\\n    const endId = startId + blocks.length\\r\\n    slideActiveId = index\\r\\n    blockActiveId = (index - startId < 0) \\r\\n    ? 0 \\r\\n    : (index - startId > blocks.length) \\r\\n    ? blocks.length-1 \\r\\n    : index - startId\\r\\n    chandeHeigth(index, startId, endId)\\r\\n  }\\r\\n\\r\\n  function chandeHeigth(index, startId, endId) {\\r\\n    const sumStart = arrHeight.slice(index, startId+1).reduce((arr, el) => arr + el, 0)\\r\\n    const sumEnd = arrHeight.slice(endId-1, index).reduce((arr, el) => arr + el, 0)\\r\\n\\r\\n    if(index < startId) {\\r\\n      imageisShow = false\\r\\n      image.style.top = \`\${sumStart}px\`\\r\\n    } else if(index >= startId && index < endId) {\\r\\n      imageisShow = true\\r\\n      image.style.top = \`50%\`\\r\\n    } else if(index >= endId) {\\r\\n      imageisShow = false\\r\\n      image.style.top = \`-\${sumEnd}px\`\\r\\n    }\\r\\n  }\\r\\n\\r\\n  function goToSectionId(num) {\\r\\n    mySlider.go(num)\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"wrapper\\">\\r\\n  <Header handler={goToSectionId} sections={sections}/>\\r\\n\\r\\n  <main class=\\"main\\">\\r\\n    <Splide class='slider' bind:this={ mySlider }\\r\\n    options={{\\r\\n      direction: 'ttb',\\r\\n      speed: delay,\\r\\n      remindSpeed: 0,\\r\\n      easing: easing,\\r\\n      height   : '100vh',\\r\\n      autoHeight: true,\\r\\n      wheel    : true,\\r\\n      arrows: false,\\r\\n      pagination: false,\\r\\n      perMove: 1,\\r\\n      focus    : 'center',\\r\\n      waitForTransition: true,\\r\\n      flickMaxPages: 1,\\r\\n      releaseWheel: true,\\r\\n      preloadPages: 1,\\r\\n      dragMinThreshold: {\\r\\n        mouse: 20,\\r\\n        touch: 20,\\r\\n      },\\r\\n      wheelMinThreshold: 10,\\r\\n    }}\\r\\n    on:move={imageHandler}\\r\\n   \\r\\n    >\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Hero/>\\r\\n    </SplideSlide>\\r\\n\\r\\n    <SplideSlide>\\r\\n      <About active={slideActiveId == 1}/>\\r\\n    </SplideSlide>\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Text/>\\r\\n    </SplideSlide>\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Roles />\\r\\n    </SplideSlide>\\r\\n\\r\\n    {#each blocks as el, i}\\r\\n      <SplideSlide>\\r\\n        <Block \\r\\n          id={i}\\r\\n          active={blockActiveId == i}\\r\\n          title={el.title}\\r\\n          description={el.description}\\r\\n        />\\r\\n      </SplideSlide>\\r\\n    {/each}\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Team/>\\r\\n    </SplideSlide>\\r\\n\\r\\n    <SplideSlide>\\r\\n      <ContactUs active={slideActiveId == 10}/>\\r\\n    </SplideSlide>\\r\\n\\r\\n  </Splide>\\r\\n\\r\\n  <div class=\\"image {!blockActiveId ? 'image__first' : ''} {imageisShow ? 'image--show' : ''}\\" bind:this={image} >\\r\\n    <div class=\\"image__wrapper\\">\\r\\n      {#each blocks as el, i}\\r\\n        <img class=\\"image__inner {blockActiveId == i ? 'image--active' : ''}\\" src={el.src} alt=\\"image {i}\\">\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n  </main> \\r\\n  <!-- <Footer/> -->\\r\\n</div>\\r\\n\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">.wrapper {\\n  position: relative;\\n}\\n\\n:global(section) {\\n  max-height: 100vh;\\n  position: relative;\\n}\\n\\n@media (min-width: 1440px) {\\n  :global(section) {\\n    padding: 90px 50px 50px;\\n  }\\n}\\n\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  :global(section) {\\n    padding: 90px 40px 50px;\\n  }\\n}\\n\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  :global(section) {\\n    padding: 90px 30px 50px;\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  :global(section) {\\n    padding: 90px 15px 50px;\\n  }\\n}\\n\\n.image {\\n  position: fixed;\\n  top: 150vh;\\n  left: 50px;\\n  transform: translateY(-50%);\\n  width: 100%;\\n  aspect-ratio: 1.5/1;\\n  pointer-events: none;\\n  visibility: hidden;\\n  opacity: 0;\\n}\\n\\n@media (min-width: 1440px) {\\n  .image {\\n    transform: translateY(-50%);\\n    max-width: 580px;\\n  }\\n}\\n\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .image {\\n    transform: translateY(-50%);\\n    max-width: 400px;\\n  }\\n}\\n\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .image {\\n    transform: translateY(-50%);\\n    left: 30px;\\n    max-width: 380px;\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  .image {\\n    transform: translateY(-50%) translateX(-50%);\\n    left: 50%;\\n    max-width: 450px;\\n  }\\n}\\n\\n.image--show {\\n  opacity: 1;\\n  visibility: visible;\\n}\\n\\n@media (min-width: 768px) {\\n  .image--show {\\n    transform: translateY(-50%);\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  .image--show {\\n    transform: translateY(-100%) translateX(-50%);\\n  }\\n}\\n\\n@media (max-width: 767.02px) {\\n  .image__first {\\n    transform: translateY(-65%) translateX(-50%);\\n  }\\n}\\n\\n.image__wrapper {\\n  position: relative;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n\\n.image__inner {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  transition: 1s;\\n  opacity: 0;\\n  transform: scale(100%);\\n}\\n\\n.image--active {\\n  opacity: 1;\\n  z-index: 1;\\n  transform: scale(110%);\\n}</style>\\r\\n"],"names":[],"mappings":"AAuLmB,uBAAS,CAC1B,QAAQ,CAAE,QACZ,CAEQ,OAAS,CACf,UAAU,CAAE,KAAK,CACjB,QAAQ,CAAE,QACZ,CAEA,MAAO,YAAY,MAAM,CAAE,CACjB,OAAS,CACf,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACrB,CACF,CAEA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CAC5C,OAAS,CACf,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACrB,CACF,CAEA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CAC3C,OAAS,CACf,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACrB,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CACnB,OAAS,CACf,OAAO,CAAE,IAAI,CAAC,IAAI,CAAC,IACrB,CACF,CAEA,qBAAO,CACL,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,KAAK,CAAE,IAAI,CACX,YAAY,CAAE,GAAG,CAAC,CAAC,CACnB,cAAc,CAAE,IAAI,CACpB,UAAU,CAAE,MAAM,CAClB,OAAO,CAAE,CACX,CAEA,MAAO,YAAY,MAAM,CAAE,CACzB,qBAAO,CACL,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,KACb,CACF,CAEA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,qBAAO,CACL,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,SAAS,CAAE,KACb,CACF,CAEA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,qBAAO,CACL,SAAS,CAAE,WAAW,IAAI,CAAC,CAC3B,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,KACb,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CAC3B,qBAAO,CACL,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,WAAW,IAAI,CAAC,CAC5C,IAAI,CAAE,GAAG,CACT,SAAS,CAAE,KACb,CACF,CAEA,2BAAa,CACX,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,OACd,CAEA,MAAO,YAAY,KAAK,CAAE,CACxB,2BAAa,CACX,SAAS,CAAE,WAAW,IAAI,CAC5B,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CAC3B,2BAAa,CACX,SAAS,CAAE,WAAW,KAAK,CAAC,CAAC,WAAW,IAAI,CAC9C,CACF,CAEA,MAAO,YAAY,QAAQ,CAAE,CAC3B,4BAAc,CACZ,SAAS,CAAE,WAAW,IAAI,CAAC,CAAC,WAAW,IAAI,CAC7C,CACF,CAEA,8BAAgB,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACZ,CAEA,4BAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,EAAE,CACd,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,IAAI,CACvB,CAEA,6BAAe,CACb,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,IAAI,CACvB"}`
};
const delay = 800;
const easing = "ease-in-out";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const blocks = [
    {
      title: "Unique land exploration system:",
      description: "Players can explore various lands and find areas with varying profitability, which creates constant dynamics and new opportunities in the gameplay.",
      src: "/images/block/Unique-land_size.webp"
    },
    {
      title: "Variety of ways for earning:",
      description: `Glebe offers the opportunity to build different business models, including earning without initial investment.`,
      src: "/images/block/Variety-of-ways_size.webp"
    },
    {
      title: "Passive income through NFT ownership:",
      description: "Owners of land and other in-game assets can earn a steady income by renting them out, allowing them to earn even without actively participating in the gameplay.",
      src: "/images/block/Passive-income-through-NFT_size.webp"
    },
    {
      title: "Deep integration of NFT with gameplay:",
      description: `Owners of lands, tools and islands don't just own digital assets - they manage assets that can generate real passive income through rentals and other in-game transactions. This makes the game's economy deeper and more dynamic, providing players real opportunities for long-term investment.`,
      src: "/images/block/Deep-integration-of-NFT_size.webp"
    },
    {
      title: "Variety of game roles: ",
      description: "Glebe offers the unique ability to choose multiple roles, each providing players with different ways of earning. Players can participate both actively (e.g. gold miners) and passively (asset owners), which appeals to different categories of users - from those looking for fun to those interested in passive income through NFT management.",
      src: "/images/block/Variety-of-game-roles_size.webp"
    }
  ];
  const sections = [
    // {name: 'Hero', id: 0}, 
    { name: "About", id: 1 },
    { name: "Gameplay", id: 2 },
    { name: "Roles", id: 3 },
    { name: "Differences", id: 4 },
    { name: "Team", id: 9 },
    { name: "Contact", id: 10 }
  ];
  let slideActiveId = 0;
  let blockActiveId = 0;
  let mySlider;
  let image;
  function goToSectionId(num) {
    mySlider.go(num);
  }
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `<div class="wrapper svelte-1fpihox">${validate_component(Header, "Header").$$render($$result, { handler: goToSectionId, sections }, {}, {})} <main class="main">${validate_component(Splide_1, "Splide").$$render(
      $$result,
      {
        class: "slider",
        options: {
          direction: "ttb",
          speed: delay,
          remindSpeed: 0,
          easing,
          height: "100vh",
          autoHeight: true,
          wheel: true,
          arrows: false,
          pagination: false,
          perMove: 1,
          focus: "center",
          waitForTransition: true,
          flickMaxPages: 1,
          releaseWheel: true,
          preloadPages: 1,
          dragMinThreshold: { mouse: 20, touch: 20 },
          wheelMinThreshold: 10
        },
        this: mySlider
      },
      {
        this: ($$value) => {
          mySlider = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(About, "About").$$render($$result, { active: slideActiveId == 1 }, {}, {})}`;
            }
          })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Roles, "Roles").$$render($$result, {}, {}, {})}`;
            }
          })} ${each(blocks, (el, i) => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Block, "Block").$$render(
                  $$result,
                  {
                    id: i,
                    active: blockActiveId == i,
                    title: el.title,
                    description: el.description
                  },
                  {},
                  {}
                )} `;
              }
            })}`;
          })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(Team, "Team").$$render($$result, {}, {}, {})}`;
            }
          })} ${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
            default: () => {
              return `${validate_component(ContactUs, "ContactUs").$$render($$result, { active: slideActiveId == 10 }, {}, {})}`;
            }
          })}`;
        }
      }
    )} <div class="${"image " + escape("image__first", true) + " " + escape("", true) + " svelte-1fpihox"}"${add_attribute("this", image, 0)}><div class="image__wrapper svelte-1fpihox">${each(blocks, (el, i) => {
      return `<img class="${"image__inner " + escape(blockActiveId == i ? "image--active" : "", true) + " svelte-1fpihox"}"${add_attribute("src", el.src, 0)} alt="${"image " + escape(i, true)}">`;
    })}</div></div></main>  </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
