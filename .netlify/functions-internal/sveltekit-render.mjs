import { init } from '../serverless.js';

export const handler = init((() => {
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
		client: {"start":"_app/immutable/entry/start.D1r3ZQH2.js","app":"_app/immutable/entry/app.Cq7uNKGb.js","imports":["_app/immutable/entry/start.D1r3ZQH2.js","_app/immutable/chunks/entry.DU6h3AEK.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/entry/app.Cq7uNKGb.js","_app/immutable/chunks/scheduler.BqLoZ0SL.js","_app/immutable/chunks/index.l9p5xdCo.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
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
})());
