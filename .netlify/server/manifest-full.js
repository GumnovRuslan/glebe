export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.ico","favicons.png","fonts/NEXA-HEAVY.ttf","fonts/NEXA-HEAVY.woff2","images/block/Deep-integration-of-NFT_size.webp","images/block/Passive-income-through-NFT_size.webp","images/block/Unique-land_size.webp","images/block/Variety-of-game-roles_size.webp","images/block/Variety-of-ways_size.webp","images/gameplay.webp","images/hero.webp","images/image1.png","images/image2.webp","images/roles/digger.webp","images/roles/islandLord.webp","images/roles/landLord.webp","images/roles/toolLord.webp","images/team.webp","images/telegram.svg","styles/mixins.scss","styles/styles.css","styles/template/fonts.scss","styles/template/reset.scss","styles/template/root.scss"]),
	mimeTypes: {".png":"image/png",".ttf":"font/ttf",".woff2":"font/woff2",".webp":"image/webp",".svg":"image/svg+xml",".css":"text/css"},
	_: {
		client: {"start":"_app/immutable/entry/start.yVie--VU.js","app":"_app/immutable/entry/app.CtoHC3Za.js","imports":["_app/immutable/entry/start.yVie--VU.js","_app/immutable/chunks/entry.DOXZhske.js","_app/immutable/chunks/scheduler.dwoCa68s.js","_app/immutable/entry/app.CtoHC3Za.js","_app/immutable/chunks/scheduler.dwoCa68s.js","_app/immutable/chunks/index.e0kVp9I_.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
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
