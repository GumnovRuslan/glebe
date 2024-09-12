

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BqyKKsUR.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/chunks/index.l9p5xdCo.js","_app/immutable/chunks/entry.DU6h3AEK.js"];
export const stylesheets = [];
export const fonts = [];
