import Vue from 'vue'
import Router from 'vue-router'
//import main from '../view/main/main.vue';
/*懒加载*/
const main=()=>import('../view/main/main.vue')
/*1.导入路由对象*/
Vue.use(Router);

/*路由映射关系：组件于路径之间的关系*/
const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['../view/login/login.vue'], resolve);
    },
    meta:{//元数据
      title:'登录页面'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: resolve => {
      require(['../view/main/main.vue'], resolve);
    },
    meta: {
      icon: 'ios-settings',
      title: '系统首页',
      hideInMenu: true,
      requireAuth: false //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
    }
  },
  {
    path: '/sys',
    name: 'sys',
    component: main,
    meta: {
      icon: 'ios-construct',
      title: '系统管理',
      code:'system-manage',
      requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
    },
    children:[
      {
        path: 'dictList',
        name: 'dictList',
        component: resolve => {
          require(['../view/sys/dict/dictList.vue'], resolve);
        },
        meta: {
          icon: 'ios-paper',
          title: '字典维护',
          code:'system-manage-dict',
          requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
        }
      }
    ]
  }
];

/*2.创建路由实例*/
const router = new Router({
  routes,
  mode: 'history'
});

router.beforeEach((to,from,next)=> {
  document.title=to.meta.title;
  next()//调用该方法才能进行下一步，才能正常跳转
});

/*3.导出路由实例，并挂载到vue对象上*/
export default router
