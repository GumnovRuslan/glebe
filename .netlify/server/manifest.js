export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/glebe_hp.webp","images/hero.jpg","images/iconmonstr-telegram-1.svg","images/image1.png","images/image2.webp","styles/mixins.scss","styles/reset.css","styles/root.css"]),
	mimeTypes: {".png":"image/png",".webp":"image/webp",".jpg":"image/jpeg",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.CUwgxuc6.js","app":"_app/immutable/entry/app.BxaGZZ7x.js","imports":["_app/immutable/entry/start.CUwgxuc6.js","_app/immutable/chunks/entry.D8pyqrsI.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/entry/app.BxaGZZ7x.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/chunks/index.l9p5xdCo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
