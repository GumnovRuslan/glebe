

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.nrmkK_qe.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/chunks/index.l9p5xdCo.js"];
export const stylesheets = ["_app/immutable/assets/2.Bd6RWzYN.css"];
export const fonts = [];
