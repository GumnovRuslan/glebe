

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CkbWBouU.js","_app/immutable/chunks/scheduler.dwoCa68s.js","_app/immutable/chunks/index.e0kVp9I_.js"];
export const stylesheets = ["_app/immutable/assets/2.Dj9OKJgk.css"];
export const fonts = [];
