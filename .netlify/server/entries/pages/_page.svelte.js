import { c as create_ssr_component, e as escape, d as compute_rest_props, f as createEventDispatcher, h as spread, i as escape_attribute_value, j as escape_object, k as add_attribute, v as validate_component, l as each } from "../../chunks/ssr.js";
const css$4 = {
  code: ".hero.svelte-lnpgip{position:relative;min-height:100vh}.hero__content.svelte-lnpgip{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:flex-end;justify-content:center;padding:100px 20px}.hero__title.svelte-lnpgip{font-size:46px;font-weight:700;color:#ffffff;text-shadow:0 0 10px #000;padding:12vh 0}.hero__background.svelte-lnpgip{position:absolute;left:0;top:0;width:100%;height:100%;min-height:100vh}.hero__background_img.svelte-lnpgip{object-fit:cover}",
  map: '{"version":3,"file":"Hero.svelte","sources":["Hero.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"hero\\">\\r\\n  <div class=\\"hero__background\\">\\r\\n    <img class=\\"hero__background_img\\" src=\\"/images/hero.jpg\\" alt=\\"background\\">\\r\\n  </div>\\r\\n  <div class=\\"hero__content\\">\\r\\n    <p class=\\"hero__title\\">A game where every strike brings gold</p>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.hero {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n.hero__content {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: flex-end;\\n  justify-content: center;\\n  padding: 100px 20px;\\n}\\n.hero__title {\\n  font-size: 46px;\\n  font-weight: 700;\\n  color: #ffffff;\\n  text-shadow: 0 0 10px #000;\\n  padding: 12vh 0;\\n}\\n.hero__background {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 100vh;\\n}\\n.hero__background_img {\\n  object-fit: cover;\\n}</style>"],"names":[],"mappings":"AAamB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KACd,CACA,4BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,QAAQ,CACrB,eAAe,CAAE,MAAM,CACvB,OAAO,CAAE,KAAK,CAAC,IACjB,CACA,0BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IAAI,CAC1B,OAAO,CAAE,IAAI,CAAC,CAChB,CACA,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,mCAAsB,CACpB,UAAU,CAAE,KACd"}'
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$4);
  return `<section class="hero svelte-lnpgip" data-svelte-h="svelte-nkgnkm"><div class="hero__background svelte-lnpgip"><img class="hero__background_img svelte-lnpgip" src="/images/hero.jpg" alt="background"></div> <div class="hero__content svelte-lnpgip"><p class="hero__title svelte-lnpgip">A game where every strike brings gold</p></div> </section>`;
});
const css$3 = {
  code: '.about.svelte-e1g8g8{position:relative}.about__inner.svelte-e1g8g8{display:flex;align-items:center;justify-content:center;min-height:100vh;background:#000}.about__content.svelte-e1g8g8{display:flex;flex-direction:column;align-items:center;padding:0 20px;overflow:hidden}@media(min-width: 1024px){.about__content.svelte-e1g8g8{max-width:55%}}@media(min-width: 768px) and (max-width: 1023.02px){.about__content.svelte-e1g8g8{max-width:80%}}@media(max-width: 767.02px){.about__content.svelte-e1g8g8{max-width:100%}}.about__title.svelte-e1g8g8{width:max-content;padding:0 20px;position:relative;text-align:center;font-weight:700;text-transform:uppercase;color:#fff}.about__title.svelte-e1g8g8::before,.about__title.svelte-e1g8g8::after{content:"";position:absolute;width:50px;height:2px;top:50%;transition:0.8s 0.5s;background:currentColor}.about__title.svelte-e1g8g8::before{left:100%}.about__title.svelte-e1g8g8::after{right:100%}.about__title--active.svelte-e1g8g8::before,.about__title--active.svelte-e1g8g8::after{width:200px}@media(min-width: 1024px){.about__title.svelte-e1g8g8{margin-bottom:40px;font-size:50px}}@media(min-width: 768px) and (max-width: 1023.02px){.about__title.svelte-e1g8g8{margin-bottom:30px;font-size:30px}}@media(max-width: 767.02px){.about__title.svelte-e1g8g8{margin-bottom:20px;font-size:26px}}.about__description.svelte-e1g8g8{transition:1.5s 0.5s;transform:translateY(100px);opacity:0;text-align:center;color:#fff}@media(min-width: 1024px){.about__description.svelte-e1g8g8{font-size:30px;line-height:48px}}@media(min-width: 768px) and (max-width: 1023.02px){.about__description.svelte-e1g8g8{font-size:22px;line-height:32px}}@media(max-width: 767.02px){.about__description.svelte-e1g8g8{font-size:20px;line-height:30px}}.about__description--active.svelte-e1g8g8{transform:translateY(0);opacity:1}',
  map: `{"version":3,"file":"About.svelte","sources":["About.svelte"],"sourcesContent":["<script>\\r\\n  export let active = false;\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"about\\">\\r\\n  <!-- <div class=\\"about__top {active ? 'about__top--active' : ''}\\"></div> -->\\r\\n  <div class=\\"about__inner\\">\\r\\n    <div class=\\"about__content\\">\\r\\n      <h2 class=\\"about__title {active ? 'about__title--active' : ''}\\">About</h2>\\r\\n      <p class=\\"about__description {active ? 'about__description--active' : ''}\\">\\r\\n        Glebe is a world where every handful of earth can turn into a golden nugget, and every action brings you closer to true wealth. Here, in the era of a new gold rush, users compete for resources, explore lands and earn. In Glebe everyone can build their own business empire, combining all the game roles, building new and novel earning strategies to maximize profits. Every object in the game is an NFT with real value, and every move can open the path to riches. It's not just a game - it's your chance to make money in an exciting digital universe!\\r\\n      </p>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.about {\\n  position: relative;\\n}\\n.about__top {\\n  position: absolute;\\n  top: 0;\\n  transition: 1s;\\n  transform: translateY(-40%);\\n  background: red;\\n  width: 100%;\\n  height: 200px;\\n}\\n.about__top--active {\\n  transform: translateY(-100%);\\n}\\n.about__inner {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  min-height: 100vh;\\n  background: #000;\\n}\\n.about__content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  padding: 0 20px;\\n  overflow: hidden;\\n}\\n@media (min-width: 1024px) {\\n  .about__content {\\n    max-width: 55%;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .about__content {\\n    max-width: 80%;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .about__content {\\n    max-width: 100%;\\n  }\\n}\\n.about__title {\\n  width: max-content;\\n  padding: 0 20px;\\n  position: relative;\\n  text-align: center;\\n  font-weight: 700;\\n  text-transform: uppercase;\\n  color: #fff;\\n}\\n.about__title::before, .about__title::after {\\n  content: \\"\\";\\n  position: absolute;\\n  width: 50px;\\n  height: 2px;\\n  top: 50%;\\n  transition: 0.8s 0.5s;\\n  background: currentColor;\\n}\\n.about__title::before {\\n  left: 100%;\\n}\\n.about__title::after {\\n  right: 100%;\\n}\\n.about__title--active::before, .about__title--active::after {\\n  width: 200px;\\n}\\n@media (min-width: 1024px) {\\n  .about__title {\\n    margin-bottom: 40px;\\n    font-size: 50px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .about__title {\\n    margin-bottom: 30px;\\n    font-size: 30px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .about__title {\\n    margin-bottom: 20px;\\n    font-size: 26px;\\n  }\\n}\\n.about__description {\\n  transition: 1.5s 0.5s;\\n  transform: translateY(100px);\\n  opacity: 0;\\n  text-align: center;\\n  color: #fff;\\n}\\n@media (min-width: 1024px) {\\n  .about__description {\\n    font-size: 30px;\\n    line-height: 48px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .about__description {\\n    font-size: 22px;\\n    line-height: 32px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .about__description {\\n    font-size: 20px;\\n    line-height: 30px;\\n  }\\n}\\n.about__description--active {\\n  transform: translateY(0);\\n  opacity: 1;\\n}</style>"],"names":[],"mappings":"AAgBmB,oBAAO,CACxB,QAAQ,CAAE,QACZ,CAaA,2BAAc,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,MAAM,CACvB,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,IACd,CACA,6BAAgB,CACd,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,MAAM,CACnB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,QAAQ,CAAE,MACZ,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,6BAAgB,CACd,SAAS,CAAE,GACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,6BAAgB,CACd,SAAS,CAAE,GACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,6BAAgB,CACd,SAAS,CAAE,IACb,CACF,CACA,2BAAc,CACZ,KAAK,CAAE,WAAW,CAClB,OAAO,CAAE,CAAC,CAAC,IAAI,CACf,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,MAAM,CAClB,WAAW,CAAE,GAAG,CAChB,cAAc,CAAE,SAAS,CACzB,KAAK,CAAE,IACT,CACA,2BAAa,QAAQ,CAAE,2BAAa,OAAQ,CAC1C,OAAO,CAAE,EAAE,CACX,QAAQ,CAAE,QAAQ,CAClB,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,GAAG,CACX,GAAG,CAAE,GAAG,CACR,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,UAAU,CAAE,YACd,CACA,2BAAa,QAAS,CACpB,IAAI,CAAE,IACR,CACA,2BAAa,OAAQ,CACnB,KAAK,CAAE,IACT,CACA,mCAAqB,QAAQ,CAAE,mCAAqB,OAAQ,CAC1D,KAAK,CAAE,KACT,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,2BAAc,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,2BAAc,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,2BAAc,CACZ,aAAa,CAAE,IAAI,CACnB,SAAS,CAAE,IACb,CACF,CACA,iCAAoB,CAClB,UAAU,CAAE,IAAI,CAAC,IAAI,CACrB,SAAS,CAAE,WAAW,KAAK,CAAC,CAC5B,OAAO,CAAE,CAAC,CACV,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IACT,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,iCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,iCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,iCAAoB,CAClB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,yCAA4B,CAC1B,SAAS,CAAE,WAAW,CAAC,CAAC,CACxB,OAAO,CAAE,CACX"}`
};
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { active = false } = $$props;
  if ($$props.active === void 0 && $$bindings.active && active !== void 0) $$bindings.active(active);
  $$result.css.add(css$3);
  return `<section class="about svelte-e1g8g8"> <div class="about__inner svelte-e1g8g8"><div class="about__content svelte-e1g8g8"><h2 class="${"about__title " + escape(active ? "about__title--active" : "", true) + " svelte-e1g8g8"}">About</h2> <p class="${"about__description " + escape(active ? "about__description--active" : "", true) + " svelte-e1g8g8"}">Glebe is a world where every handful of earth can turn into a golden nugget, and every action brings you closer to true wealth. Here, in the era of a new gold rush, users compete for resources, explore lands and earn. In Glebe everyone can build their own business empire, combining all the game roles, building new and novel earning strategies to maximize profits. Every object in the game is an NFT with real value, and every move can open the path to riches. It&#39;s not just a game - it&#39;s your chance to make money in an exciting digital universe!</p></div></div> </section>`;
});
const css$2 = {
  code: ".block.svelte-1t8qla5{opacity:0.2;transition:1s 0.3s;color:#fff}.block--active.svelte-1t8qla5{opacity:1}.block__inner.svelte-1t8qla5{padding:100px 20px;display:flex;flex-direction:column;align-items:flex-end;justify-content:flex-start;gap:30px;min-height:100vh}.block__title.svelte-1t8qla5{width:100%;font-size:46px;text-align:center;text-align:center;color:#fff;margin-bottom:-26px}.block__content.svelte-1t8qla5{flex:content;display:flex;align-items:center}.block__card.svelte-1t8qla5{display:flex;gap:50px}@media(max-width: 1439.02px){.block__card.svelte-1t8qla5{flex-direction:column;gap:20px}}.block__card_title.svelte-1t8qla5{max-width:400px;align-self:flex-start}@media(min-width: 1440px){.block__card_title.svelte-1t8qla5{font-size:40px;text-align:center}}@media(min-width: 1024px) and (max-width: 1439.02px){.block__card_title.svelte-1t8qla5{font-size:30px}}@media(min-width: 768px) and (max-width: 1023.02px){.block__card_title.svelte-1t8qla5{font-size:30px}}@media(min-width: 1440px){.block__card_text.svelte-1t8qla5{max-width:600px;font-size:30px;line-height:42px}}@media(min-width: 1024px) and (max-width: 1439.02px){.block__card_text.svelte-1t8qla5{max-width:40vw;font-size:26px;line-height:32px}}@media(min-width: 768px) and (max-width: 1023.02px){.block__card_text.svelte-1t8qla5{max-width:39vw;font-size:24px;line-height:30px}}@media(max-width: 767.02px){.block__card_text.svelte-1t8qla5{text-align:justify;max-width:100%;font-size:20px;line-height:28px}}",
  map: `{"version":3,"file":"Block.svelte","sources":["Block.svelte"],"sourcesContent":["<script>\\r\\n  export let active = false; \\r\\n  export let title = ''\\r\\n  export let description = ''\\r\\n  export let id = null\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"block {active ? 'block--active' : ''}\\">\\r\\n  <div class=\\"block__inner\\">\\r\\n    {#if id == 0}\\r\\n      <h2 class=\\"block__title\\">Market and target audience</h2>\\r\\n    {/if}\\r\\n    <div class=\\"block__content\\">\\r\\n      <div class=\\"block__card\\">\\r\\n        <p class=\\"block__card_title\\">{title}</p>\\r\\n        <p class=\\"block__card_text\\">{description}</p>\\r\\n      </div>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.block {\\n  opacity: 0.2;\\n  transition: 1s 0.3s;\\n  color: #fff;\\n}\\n.block--active {\\n  opacity: 1;\\n}\\n.block__inner {\\n  padding: 100px 20px;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: flex-end;\\n  justify-content: flex-start;\\n  gap: 30px;\\n  min-height: 100vh;\\n}\\n.block__title {\\n  width: 100%;\\n  font-size: 46px;\\n  text-align: center;\\n  text-align: center;\\n  color: #fff;\\n  margin-bottom: -26px;\\n}\\n.block__content {\\n  flex: content;\\n  display: flex;\\n  align-items: center;\\n}\\n.block__card {\\n  display: flex;\\n  gap: 50px;\\n}\\n@media (max-width: 1439.02px) {\\n  .block__card {\\n    flex-direction: column;\\n    gap: 20px;\\n  }\\n}\\n.block__card_title {\\n  max-width: 400px;\\n  align-self: flex-start;\\n}\\n@media (min-width: 1440px) {\\n  .block__card_title {\\n    font-size: 40px;\\n    text-align: center;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .block__card_title {\\n    font-size: 30px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .block__card_title {\\n    font-size: 30px;\\n  }\\n}\\n@media (min-width: 1440px) {\\n  .block__card_text {\\n    max-width: 600px;\\n    font-size: 30px;\\n    line-height: 42px;\\n  }\\n}\\n@media (min-width: 1024px) and (max-width: 1439.02px) {\\n  .block__card_text {\\n    max-width: 40vw;\\n    font-size: 26px;\\n    line-height: 32px;\\n  }\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .block__card_text {\\n    max-width: 39vw;\\n    font-size: 24px;\\n    line-height: 30px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .block__card_text {\\n    text-align: justify;\\n    max-width: 100%;\\n    font-size: 20px;\\n    line-height: 28px;\\n  }\\n}</style>"],"names":[],"mappings":"AAqBmB,qBAAO,CACxB,OAAO,CAAE,GAAG,CACZ,UAAU,CAAE,EAAE,CAAC,IAAI,CACnB,KAAK,CAAE,IACT,CACA,6BAAe,CACb,OAAO,CAAE,CACX,CACA,4BAAc,CACZ,OAAO,CAAE,KAAK,CAAC,IAAI,CACnB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,WAAW,CAAE,QAAQ,CACrB,eAAe,CAAE,UAAU,CAC3B,GAAG,CAAE,IAAI,CACT,UAAU,CAAE,KACd,CACA,4BAAc,CACZ,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MAAM,CAClB,UAAU,CAAE,MAAM,CAClB,KAAK,CAAE,IAAI,CACX,aAAa,CAAE,KACjB,CACA,8BAAgB,CACd,IAAI,CAAE,OAAO,CACb,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MACf,CACA,2BAAa,CACX,OAAO,CAAE,IAAI,CACb,GAAG,CAAE,IACP,CACA,MAAO,YAAY,SAAS,CAAE,CAC5B,2BAAa,CACX,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IACP,CACF,CACA,iCAAmB,CACjB,SAAS,CAAE,KAAK,CAChB,UAAU,CAAE,UACd,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,iCAAmB,CACjB,SAAS,CAAE,IAAI,CACf,UAAU,CAAE,MACd,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,iCAAmB,CACjB,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,iCAAmB,CACjB,SAAS,CAAE,IACb,CACF,CACA,MAAO,YAAY,MAAM,CAAE,CACzB,gCAAkB,CAChB,SAAS,CAAE,KAAK,CAChB,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,MAAM,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACpD,gCAAkB,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,gCAAkB,CAChB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,gCAAkB,CAChB,UAAU,CAAE,OAAO,CACnB,SAAS,CAAE,IAAI,CACf,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,IACf,CACF"}`
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
  $$result.css.add(css$2);
  return `<section class="${"block " + escape(active ? "block--active" : "", true) + " svelte-1t8qla5"}"><div class="block__inner svelte-1t8qla5">${id == 0 ? `<h2 class="block__title svelte-1t8qla5" data-svelte-h="svelte-1pyxup8">Market and target audience</h2>` : ``} <div class="block__content svelte-1t8qla5"><div class="block__card svelte-1t8qla5"><p class="block__card_title svelte-1t8qla5">${escape(title)}</p> <p class="block__card_text svelte-1t8qla5">${escape(description)}</p></div></div></div> </section>`;
});
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
const css$1 = {
  code: ".text.svelte-dbmvix{position:relative;min-height:100vh}.text__content.svelte-dbmvix{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;align-items:center;justify-content:flex-end;padding:100px 50px}.text__content_wrapper.svelte-dbmvix{display:flex;flex-direction:column;gap:20px;max-width:600px;padding:30px;border-radius:50px;background:rgba(0, 0, 0, 0.5960784314);backdrop-filter:blur(5px)}.text__title.svelte-dbmvix{font-size:46px;font-weight:700;color:#ffffff;text-shadow:0 0 10px #000}.text__text.svelte-dbmvix{font-size:30px;color:#ffffff}.text__background.svelte-dbmvix{position:absolute;left:0;top:0;width:100%;height:100%;min-height:100vh}.text__background_img.svelte-dbmvix{object-fit:cover}",
  map: '{"version":3,"file":"Text.svelte","sources":["Text.svelte"],"sourcesContent":["<script>\\r\\n\\r\\n<\/script>\\r\\n\\r\\n<section class=\\"text\\">\\r\\n  <div class=\\"text__background\\">\\r\\n    <img class=\\"text__background_img\\" src=\\"/images/glebe_hp.webp\\" alt=\\"background\\">\\r\\n  </div>\\r\\n  <div class=\\"text__content\\">\\r\\n    <div class=\\"text__content_wrapper\\">\\r\\n      <p class=\\"text__title\\">Gameplay:</p>\\r\\n      <p class=\\"text__text\\">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p>\\r\\n    </div>\\r\\n  </div>\\r\\n</section>\\r\\n\\r\\n<style lang=\\"scss\\">.text {\\n  position: relative;\\n  min-height: 100vh;\\n}\\n.text__content {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  align-items: center;\\n  justify-content: flex-end;\\n  padding: 100px 50px;\\n}\\n.text__content_wrapper {\\n  display: flex;\\n  flex-direction: column;\\n  gap: 20px;\\n  max-width: 600px;\\n  padding: 30px;\\n  border-radius: 50px;\\n  background: rgba(0, 0, 0, 0.5960784314);\\n  backdrop-filter: blur(5px);\\n}\\n.text__title {\\n  font-size: 46px;\\n  font-weight: 700;\\n  color: #ffffff;\\n  text-shadow: 0 0 10px #000;\\n}\\n.text__text {\\n  font-size: 30px;\\n  color: #ffffff;\\n}\\n.text__background {\\n  position: absolute;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  min-height: 100vh;\\n}\\n.text__background_img {\\n  object-fit: cover;\\n}</style>"],"names":[],"mappings":"AAgBmB,mBAAM,CACvB,QAAQ,CAAE,QAAQ,CAClB,UAAU,CAAE,KACd,CACA,4BAAe,CACb,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,OAAO,CAAE,IAAI,CACb,WAAW,CAAE,MAAM,CACnB,eAAe,CAAE,QAAQ,CACzB,OAAO,CAAE,KAAK,CAAC,IACjB,CACA,oCAAuB,CACrB,OAAO,CAAE,IAAI,CACb,cAAc,CAAE,MAAM,CACtB,GAAG,CAAE,IAAI,CACT,SAAS,CAAE,KAAK,CAChB,OAAO,CAAE,IAAI,CACb,aAAa,CAAE,IAAI,CACnB,UAAU,CAAE,KAAK,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,CAAC,YAAY,CAAC,CACvC,eAAe,CAAE,KAAK,GAAG,CAC3B,CACA,0BAAa,CACX,SAAS,CAAE,IAAI,CACf,WAAW,CAAE,GAAG,CAChB,KAAK,CAAE,OAAO,CACd,WAAW,CAAE,CAAC,CAAC,CAAC,CAAC,IAAI,CAAC,IACxB,CACA,yBAAY,CACV,SAAS,CAAE,IAAI,CACf,KAAK,CAAE,OACT,CACA,+BAAkB,CAChB,QAAQ,CAAE,QAAQ,CAClB,IAAI,CAAE,CAAC,CACP,GAAG,CAAE,CAAC,CACN,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KACd,CACA,mCAAsB,CACpB,UAAU,CAAE,KACd"}'
};
const Text = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<section class="text svelte-dbmvix" data-svelte-h="svelte-1buxaxo"><div class="text__background svelte-dbmvix"><img class="text__background_img svelte-dbmvix" src="/images/glebe_hp.webp" alt="background"></div> <div class="text__content svelte-dbmvix"><div class="text__content_wrapper svelte-dbmvix"><p class="text__title svelte-dbmvix">Gameplay:</p> <p class="text__text svelte-dbmvix">Glebe transports players to an immersive gold rush universe where each participant chooses their unique role and interacts with in-game assets to generate cryptocurrency profits. Players can become explorers, landlords or large-scale owners, creating a unique ecosystem where the economy is player-driven and hardened by real value through NFT.</p></div></div> </section>`;
});
const css = {
  code: ".image.svelte-hdcft2{position:fixed;top:200vh;left:50px;transform:translateY(calc(50vh - 50%));width:500px;aspect-ratio:1.5/1;pointer-events:none}@media(min-width: 768px) and (max-width: 1023.02px){.image.svelte-hdcft2{left:20px;max-width:400px}}@media(max-width: 767.02px){.image.svelte-hdcft2{transform:translateY(100px) translateX(-50%);left:50%;width:100%;max-width:600px}}.image__wrapper.svelte-hdcft2{position:relative;height:100%;overflow:hidden}.image__inner.svelte-hdcft2{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;transition:1s;opacity:0;transform:scale(100%)}.image--active.svelte-hdcft2{opacity:1;z-index:1;transform:scale(110%)}",
  map: `{"version":3,"file":"+page.svelte","sources":["+page.svelte"],"sourcesContent":["<script>\\r\\n  import Hero from \\"../lib/components/Hero.svelte\\";\\r\\n  import About from \\"../lib/components/About.svelte\\";\\r\\n  import Block from \\"../lib/components/Block.svelte\\";\\r\\n  import { Splide, SplideSlide } from '@splidejs/svelte-splide';\\r\\n  import '@splidejs/svelte-splide/css';\\r\\n  import { onMount } from \\"svelte\\";\\r\\n  import Text from \\"../lib/components/Text.svelte\\";\\r\\n\\r\\n  const blocks = [\\r\\n    {\\r\\n      title: 'Target audience:',\\r\\n      description: 'Glebe is aimed at gamers, crypto-enthusiasts and NFT investors aged 18 to 45. These users are actively involved in the development of Play2Earn and blockchain games, and many of them are using Telegram as their primary platform to interact with the crypto community.',\\r\\n      src: '/images/image1.png'\\r\\n    },\\r\\n    {\\r\\n      title: 'Market potential:',\\r\\n      description: \`The GameFi market is projected to reach $19.58 billion by 2024, with a robust compound annual growth rate (CAGR) of 27.7% from 2024 to 2031. This growth is driven by the integration of blockchain technologies, which enhance transparency, trust, and security in gaming environments. GameFi's rise is fueled by the increasing popularity of play-to-earn models, which allow players to earn digital assets and real-world value through in-game activities. The Asia Pacific, North America, and Europe are expected to lead in market revenue, with significant growth opportunities in China, the U.S., and Europe​.\\r\\nBy 2030, the market could grow exponentially, making GameFi a crucial player in both the gaming and decentralized finance ecosystems.\`,\\r\\n      src: '/images/image2.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'The potential of games on the Telegram platform:',\\r\\n      description: 'Telegram is one of the fastest-growing platforms in the world and currently has over 1 billion active users. Due to its flexibility, ability to integrate bots and mini-apps, Telegram has become an important tool for crypto-enthusiasts and Play2Earn game developers. The platform is also known for its focus on privacy and decentralization, which attracts both gamers and investors willing to participate in blockchain-based Play2Earn projects.',\\r\\n      src: '/images/image1.png'\\r\\n    },\\r\\n    {\\r\\n      title: 'The potential of the TON blockchain:',\\r\\n      description: 'The TON (The Open Network) blockchain plays a key role in providing low transaction costs and high performance, making it an ideal technological foundation for games with NFT elements.',\\r\\n      src: '/images/image2.webp'\\r\\n    },\\r\\n    {\\r\\n      title: 'Conclusion:',\\r\\n      description: 'Glebe integrates three powerful market trends - Play2Earn, Telegram as a gaming platform and the TON blockchain - which offers significant opportunities for growth and involvement of an active audience.',\\r\\n      src: '/images/image1.png'\\r\\n    },\\r\\n  ]\\r\\n\\r\\n  const delay = 800\\r\\n  const easing = 'ease-in-out'\\r\\n\\r\\n  let slideActiveId = 0\\r\\n  let blockActiveId = 0\\r\\n  let blockActiveId2 = 0\\r\\n  let mySlider\\r\\n  let image\\r\\n\\r\\n  onMount(() => {\\r\\n    // scrollHeight children\\r\\n    // console.log(mySlider.splide.root.children[0].children[0].children.length )\\r\\n    const heightSplider = mySlider.splide.root.children[0].scrollHeight\\r\\n    const sliders = mySlider.splide.root.children[0].children[0].children\\r\\n    // const maxHeight = sliders.forEach(slider => slider.scrollHeight)\\r\\n    console.log(mySlider.splide.Components)\\r\\n    image = document.querySelector('.image')\\r\\n    initImage()\\r\\n  })\\r\\n\\r\\n  function initImage() {\\r\\n    image.style.transition = \`\${delay / 1000}s \${easing}\`\\r\\n  }\\r\\n<\/script>\\r\\n\\r\\n<Splide aria-label=\\"My Favorite Images\\" class='slider' bind:this={ mySlider }\\r\\n    options={{\\r\\n      direction: 'ttb',\\r\\n      speed: delay,\\r\\n      easing: easing,\\r\\n      height   : '100vh',\\r\\n      autoHeight: true,\\r\\n      wheel    : true,\\r\\n      arrows: false,\\r\\n      pagination: false,\\r\\n      focus    : 'center',\\r\\n      waitForTransition: true\\r\\n    }}\\r\\n    on:move={e => {\\r\\n      const index = e.detail.index\\r\\n      const startId = 2\\r\\n      const endId = startId + blocks.length\\r\\n      const slides = e.detail.splide.root.firstElementChild.querySelectorAll('.splide__slide')\\r\\n      slideActiveId = index\\r\\n      blockActiveId = (index - startId < 0) \\r\\n      ? 0 \\r\\n      : (index - startId > blocks.length-1) \\r\\n      ? blocks.length-1 \\r\\n      : index - startId\\r\\n      \\r\\n      if(index <= startId) {\\r\\n        image.style.top = \`\${startId - index}00vh\`\\r\\n      } else if(index > startId && index < endId) {\\r\\n        image.style.top = \`0\`\\r\\n      } else if(index >= endId) {\\r\\n        image.style.top = \`\${endId -1 - index}00vh\`\\r\\n      }\\r\\n    }}\\r\\n    >\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Hero />\\r\\n    </SplideSlide>\\r\\n\\r\\n    <SplideSlide>\\r\\n      <About active={slideActiveId == 1}/>\\r\\n    </SplideSlide>\\r\\n\\r\\n    {#each blocks as el, i}\\r\\n      <SplideSlide>\\r\\n        <Block \\r\\n        id={i}\\r\\n        active={blockActiveId == i}\\r\\n        title={el.title}\\r\\n        description={el.description}\\r\\n        />\\r\\n      </SplideSlide>\\r\\n    {/each}\\r\\n\\r\\n    <SplideSlide>\\r\\n      <Text />\\r\\n    </SplideSlide>\\r\\n\\r\\n    {#each blocks as el, i}\\r\\n      <SplideSlide>\\r\\n        <Block \\r\\n        id={i}\\r\\n        active={slideActiveId == i}\\r\\n        title={el.title}\\r\\n        description={el.description}\\r\\n        />\\r\\n      </SplideSlide>\\r\\n    {/each}\\r\\n\\r\\n  </Splide>\\r\\n\\r\\n  <div class=\\"image\\">\\r\\n    <div class=\\"image__wrapper\\">\\r\\n      {#each blocks as el, i}\\r\\n        <img class=\\"image__inner {blockActiveId == i ? 'image--active' : ''}\\" src={el.src} alt=\\"image {i}\\">\\r\\n      {/each}\\r\\n    </div>\\r\\n  </div>\\r\\n\\r\\n<style lang=\\"scss\\">.text {\\n  margin-top: 100px;\\n  padding: 50px 20px;\\n  background: #000;\\n  border-top: 2px solid #fff;\\n  border-bottom: 2px solid #fff;\\n}\\n.text p {\\n  font-size: 26px;\\n  line-height: 36px;\\n  color: #fff;\\n}\\n.title {\\n  text-align: center;\\n  font-size: 50px;\\n  color: #fff;\\n}\\n.image {\\n  position: fixed;\\n  top: 200vh;\\n  left: 50px;\\n  transform: translateY(calc(50vh - 50%));\\n  width: 500px;\\n  aspect-ratio: 1.5/1;\\n  pointer-events: none;\\n}\\n@media (min-width: 768px) and (max-width: 1023.02px) {\\n  .image {\\n    left: 20px;\\n    max-width: 400px;\\n  }\\n}\\n@media (max-width: 767.02px) {\\n  .image {\\n    transform: translateY(100px) translateX(-50%);\\n    left: 50%;\\n    width: 100%;\\n    max-width: 600px;\\n  }\\n}\\n.image__wrapper {\\n  position: relative;\\n  height: 100%;\\n  overflow: hidden;\\n}\\n.image__inner {\\n  position: absolute;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 100%;\\n  object-fit: cover;\\n  transition: 1s;\\n  opacity: 0;\\n  transform: scale(100%);\\n}\\n.image--active {\\n  opacity: 1;\\n  z-index: 1;\\n  transform: scale(110%);\\n}</style>\\r\\n"],"names":[],"mappings":"AA+JA,oBAAO,CACL,QAAQ,CAAE,KAAK,CACf,GAAG,CAAE,KAAK,CACV,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,WAAW,KAAK,IAAI,CAAC,CAAC,CAAC,GAAG,CAAC,CAAC,CACvC,KAAK,CAAE,KAAK,CACZ,YAAY,CAAE,GAAG,CAAC,CAAC,CACnB,cAAc,CAAE,IAClB,CACA,MAAO,YAAY,KAAK,CAAC,CAAC,GAAG,CAAC,YAAY,SAAS,CAAE,CACnD,oBAAO,CACL,IAAI,CAAE,IAAI,CACV,SAAS,CAAE,KACb,CACF,CACA,MAAO,YAAY,QAAQ,CAAE,CAC3B,oBAAO,CACL,SAAS,CAAE,WAAW,KAAK,CAAC,CAAC,WAAW,IAAI,CAAC,CAC7C,IAAI,CAAE,GAAG,CACT,KAAK,CAAE,IAAI,CACX,SAAS,CAAE,KACb,CACF,CACA,6BAAgB,CACd,QAAQ,CAAE,QAAQ,CAClB,MAAM,CAAE,IAAI,CACZ,QAAQ,CAAE,MACZ,CACA,2BAAc,CACZ,QAAQ,CAAE,QAAQ,CAClB,GAAG,CAAE,CAAC,CACN,IAAI,CAAE,CAAC,CACP,KAAK,CAAE,IAAI,CACX,MAAM,CAAE,IAAI,CACZ,UAAU,CAAE,KAAK,CACjB,UAAU,CAAE,EAAE,CACd,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,IAAI,CACvB,CACA,4BAAe,CACb,OAAO,CAAE,CAAC,CACV,OAAO,CAAE,CAAC,CACV,SAAS,CAAE,MAAM,IAAI,CACvB"}`
};
const delay = 800;
const easing = "ease-in-out";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const blocks = [
    {
      title: "Target audience:",
      description: "Glebe is aimed at gamers, crypto-enthusiasts and NFT investors aged 18 to 45. These users are actively involved in the development of Play2Earn and blockchain games, and many of them are using Telegram as their primary platform to interact with the crypto community.",
      src: "/images/image1.png"
    },
    {
      title: "Market potential:",
      description: `The GameFi market is projected to reach $19.58 billion by 2024, with a robust compound annual growth rate (CAGR) of 27.7% from 2024 to 2031. This growth is driven by the integration of blockchain technologies, which enhance transparency, trust, and security in gaming environments. GameFi's rise is fueled by the increasing popularity of play-to-earn models, which allow players to earn digital assets and real-world value through in-game activities. The Asia Pacific, North America, and Europe are expected to lead in market revenue, with significant growth opportunities in China, the U.S., and Europe​.
By 2030, the market could grow exponentially, making GameFi a crucial player in both the gaming and decentralized finance ecosystems.`,
      src: "/images/image2.webp"
    },
    {
      title: "The potential of games on the Telegram platform:",
      description: "Telegram is one of the fastest-growing platforms in the world and currently has over 1 billion active users. Due to its flexibility, ability to integrate bots and mini-apps, Telegram has become an important tool for crypto-enthusiasts and Play2Earn game developers. The platform is also known for its focus on privacy and decentralization, which attracts both gamers and investors willing to participate in blockchain-based Play2Earn projects.",
      src: "/images/image1.png"
    },
    {
      title: "The potential of the TON blockchain:",
      description: "The TON (The Open Network) blockchain plays a key role in providing low transaction costs and high performance, making it an ideal technological foundation for games with NFT elements.",
      src: "/images/image2.webp"
    },
    {
      title: "Conclusion:",
      description: "Glebe integrates three powerful market trends - Play2Earn, Telegram as a gaming platform and the TON blockchain - which offers significant opportunities for growth and involvement of an active audience.",
      src: "/images/image1.png"
    }
  ];
  let slideActiveId = 0;
  let blockActiveId = 0;
  let mySlider;
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    $$rendered = `${validate_component(Splide_1, "Splide").$$render(
      $$result,
      {
        "aria-label": "My Favorite Images",
        class: "slider",
        options: {
          direction: "ttb",
          speed: delay,
          easing,
          height: "100vh",
          autoHeight: true,
          wheel: true,
          arrows: false,
          pagination: false,
          focus: "center",
          waitForTransition: true
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
              return `${validate_component(Text, "Text").$$render($$result, {}, {}, {})}`;
            }
          })} ${each(blocks, (el, i) => {
            return `${validate_component(SplideSlide, "SplideSlide").$$render($$result, {}, {}, {
              default: () => {
                return `${validate_component(Block, "Block").$$render(
                  $$result,
                  {
                    id: i,
                    active: slideActiveId == i,
                    title: el.title,
                    description: el.description
                  },
                  {},
                  {}
                )} `;
              }
            })}`;
          })}`;
        }
      }
    )} <div class="image svelte-hdcft2"><div class="image__wrapper svelte-hdcft2">${each(blocks, (el, i) => {
      return `<img class="${"image__inner " + escape(blockActiveId == i ? "image--active" : "", true) + " svelte-hdcft2"}"${add_attribute("src", el.src, 0)} alt="${"image " + escape(i, true)}">`;
    })}</div> </div>`;
  } while (!$$settled);
  return $$rendered;
});
export {
  Page as default
};
