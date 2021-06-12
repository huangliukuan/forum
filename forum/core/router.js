import {RouterMount,createRouter} from 'uni-simple-router';

const router = createRouter({
	platform: process.env.VUE_APP_PLATFORM,  
	routes: [...ROUTES]
});
//全局路由前置守卫
router.beforeEach((to, from, next) => {
	// console.log(to,from,next);
	// if(to.path !== "/pages/index/index"){
	// 	return next({
	// 		path:'/pages/index/index',
	// 		NAVTYPE:'push'
	// 	})
	// }
	next()
});
// 全局路由后置守卫
router.afterEach((to, from) => {
    console.log('跳转结束')
})

export {
	router,
	RouterMount
}