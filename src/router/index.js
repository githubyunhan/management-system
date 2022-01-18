import Vue from 'vue';
import iView from 'iview';
import Util from '../network/util';
import Router from 'vue-router';
import routers from './router';

Vue.use(Router);

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: routers
};

export const router = new Router(RouterConfig);

router.beforeEach((to, from, next) => {
  iView.LoadingBar.start();
  Util.title(to.meta.title);
  if (to.meta.requireAuth) {
    console.log('需要权限，暂时放开！');
    next();
  } else {
    next();
  }
});

router.afterEach((to) => {
  iView.LoadingBar.finish();
  window.scrollTo(0, 0);
});
