const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "Home" */ '../pages/Home.vue'),
	},
	{
		path: '/play',
		name: 'Game',
		component: () => import(/* webpackChunkName: "Game" */ '../pages/Game.vue'),
	},
	{
		path: '*',
		name: 'notFound',
		redirect: '/',
	},
];

export default routes;
