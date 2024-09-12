import { c as create_ssr_component, v as validate_component } from "../../chunks/ssr.js";
const css$2 = {
  code: ".header.svelte-w0x6hh{position:fixed;z-index:10;width:100%;padding:20px;top:0;left:0}.header__inner.svelte-w0x6hh{display:flex;align-items:center;min-height:60px;padding:10px 40px}.header__logo.svelte-w0x6hh{font-weight:700;font-size:40px;letter-spacing:3px;text-transform:uppercase;color:#fff}",
  map: '{"version":3,"file":"Header.svelte","sources":["Header.svelte"],"sourcesContent":["<header class=\\"header\\">\\r\\n  <div class=\\"header__inner\\">\\r\\n    <span class=\\"header__logo\\">glebe</span>\\r\\n  </div>\\r\\n  \\r\\n</header>\\r\\n\\r\\n<style lang=\\"scss\\">.header {\\n  position: fixed;\\n  z-index: 10;\\n  width: 100%;\\n  padding: 20px;\\n  top: 0;\\n  left: 0;\\n}\\n.header__inner {\\n  display: flex;\\n  align-items: center;\\n  min-height: 60px;\\n  padding: 10px 40px;\\n}\\n.header__logo {\\n  font-weight: 700;\\n  font-size: 40px;\\n  letter-spacing: 3px;\\n  text-transform: uppercase;\\n  color: #fff;\\n}</style>"],"names":[],"mappings":"AAOmB,qBAAQ,CACzB,QAAQ,CAAE,KAAK,CACf,OAAO,CAAE,EAAE,CACX,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CACR,CACA,4BAAe,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,IAAI,CAAC,IAChB,CACA,2BAAc,CACZ,WAAW,CAAE,GAAG,CAChB,SAAS,CAAE,IAAI,CACf,cAAc,CAAE,GAAG,CACnB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IACT"}'
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<header class="header svelte-w0x6hh" data-svelte-h="svelte-hblnla"><div class="header__inner svelte-w0x6hh"><span class="header__logo svelte-w0x6hh">glebe</span></div> </header>`;
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
const css$1 = {
  code: ".footer.svelte-1chwvox{position:fixed;bottom:0;width:100%;padding:20px}.footer__inner.svelte-1chwvox{display:flex;align-items:center;gap:20px;padding:10px}@media(min-width: 768px){.footer__inner.svelte-1chwvox{justify-content:flex-end}}@media(max-width: 767.02px){.footer__inner.svelte-1chwvox{justify-content:space-evenly}}.footer__icon.svelte-1chwvox{display:flex;align-items:center;justify-content:center;max-width:50px;max-height:50px;padding:7px;transition:0.3s;color:#fff}.footer__icon.svelte-1chwvox:hover{outline:1px solid #4073ff;box-shadow:0 0 10px #4073ff;color:#4073ff}",
  map: `{"version":3,"file":"Footer.svelte","sources":["Footer.svelte"],"sourcesContent":["<script>\\r\\n  import { telegram, twiter, email } from '../icons'\\r\\n<\/script>\\r\\n\\r\\n<footer class=\\"footer\\">\\r\\n  <div class=\\"footer__inner\\">\\r\\n    <a href=\\"https://t.me/glebecommunity\\" class=\\"footer__icon\\">\\r\\n      {@html telegram}\\r\\n    </a>\\r\\n    <a href=\\"https://x.com/GlebeComm\\" class=\\"footer__icon\\">\\r\\n      {@html twiter}\\r\\n    </a>\\r\\n    <a href=\\"mailto:info@glebe.online\\" class=\\"footer__icon\\">\\r\\n      {@html email}\\r\\n    </a>\\r\\n  </div>\\r\\n</footer>\\r\\n\\r\\n<style lang=\\"scss\\">.footer {\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n  padding: 20px;\\n}\\n.footer__inner {\\n  display: flex;\\n  align-items: center;\\n  gap: 20px;\\n  padding: 10px;\\n}\\n@media (min-width: 768px) {\\n  .footer__inner {\\n    justify-content: flex-end;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .footer__inner {\\n    justify-content: space-evenly;\\n  }\\n}\\n.footer__icon {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  max-width: 50px;\\n  max-height: 50px;\\n  padding: 7px;\\n  transition: 0.3s;\\n  color: #fff;\\n}\\n.footer__icon:hover {\\n  outline: 1px solid #4073ff;\\n  box-shadow: 0 0 10px #4073ff;\\n  color: #4073ff;\\n}</style>"],"names":[],"mappings":"AAkBmB,sBAAQ,CACzB,QAAQ,CAAE,KAAK,CACf,MAAM,CAAE,CAAC,CACT,KAAK,CAAE,IAAI,CACX,OAAO,CAAE,IACX,CACA,6BAAe,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,GAAG,CAAE,IAAI,CACT,OAAO,CAAE,IACX,CACA,MAAO,YAAY,KAAK,CAAE,CACxB,6BAAe,CACb,eAAe,CAAE,QACnB,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAe,CACb,eAAe,CAAE,YACnB,CACF,CACA,4BAAc,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,IAAI,CAChB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,IAAI,CAChB,KAAK,CAAE,IACT,CACA,4BAAa,MAAO,CAClB,OAAO,CAAE,GAAG,CAAC,KAAK,CAAC,OAAO,CAC1B,UAAU,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,OAAO,CAC5B,KAAK,CAAE,OACT"}`
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<footer class="footer svelte-1chwvox"><div class="footer__inner svelte-1chwvox"><a href="https://t.me/glebecommunity" class="footer__icon svelte-1chwvox"><!-- HTML_TAG_START -->${telegram}<!-- HTML_TAG_END --></a> <a href="https://x.com/GlebeComm" class="footer__icon svelte-1chwvox"><!-- HTML_TAG_START -->${twiter}<!-- HTML_TAG_END --></a> <a href="mailto:info@glebe.online" class="footer__icon svelte-1chwvox"><!-- HTML_TAG_START -->${email}<!-- HTML_TAG_END --></a></div> </footer>`;
});
const css = {
  code: ".wrapper.svelte-1vn70l8{position:relative}",
  map: '{"version":3,"file":"+layout.svelte","sources":["+layout.svelte"],"sourcesContent":["<script>\\r\\n  import Header from \\"../lib/components/Header.svelte\\";\\r\\n  import Footer from \\"../lib/components/Footer.svelte\\";\\r\\n<\/script>\\r\\n\\r\\n<div class=\\"wrapper\\">\\r\\n  <Header/>\\r\\n  <main class=\\"main\\">\\r\\n    <slot />\\r\\n  </main> \\r\\n  <Footer/>\\r\\n</div>\\r\\n\\r\\n\\r\\n<style lang=\\"scss\\">.wrapper {\\n  position: relative;\\n}</style>"],"names":[],"mappings":"AAcmB,uBAAS,CAC1B,QAAQ,CAAE,QACZ"}'
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="wrapper svelte-1vn70l8">${validate_component(Header, "Header").$$render($$result, {}, {}, {})} <main class="main">${slots.default ? slots.default({}) : ``}</main> ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})} </div>`;
});
export {
  Layout as default
};
