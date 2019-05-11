import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: resolve=>require(['@/view/page/index/index'],resolve)
    },
		{
		  path: '/index',
		  name: 'index',
		  component: resolve=>require(['@/view/page/index/index'],resolve)
		},
		{
		  path: '/investment',
		  name: 'investment',
		  component: resolve=>require(['@/view/page/investment/investment'],resolve)
		},
		{
		  path: '/personalAssets',
		  name: 'personalAssets',
		  component: resolve=>require(['@/view/page/personalAssets/personalAssets'],resolve)
		},
		{
		  path: '/mine',
		  name: 'mine',
		  component: resolve=>require(['@/view/page/mine/mine'],resolve)
		},
		{
		  path: '/login',
		  name: 'login',
		  component: resolve=>require(['@/view/user/login'],resolve)
		},
		{
		  path: '/reg',
		  name: 'reg',
		  component: resolve=>require(['@/view/user/reg'],resolve)
		}
  ]
})
