import Vue from 'vue'
import Router from 'vue-router'

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
    meta:{
      title:'主页'
    }
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
