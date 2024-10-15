

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.CzxmZF4F.js","_app/immutable/chunks/scheduler.dwoCa68s.js","_app/immutable/chunks/index.e0kVp9I_.js"];
export const stylesheets = [];
export const fonts = [];
