

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.COOHZlDB.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/chunks/index.l9p5xdCo.js"];
export const stylesheets = ["_app/immutable/assets/0.B6Nhk9wJ.css"];
export const fonts = [];
