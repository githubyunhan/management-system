import main from '../view/main/main.vue';

export default [
  {
    path: '/login',
    name: 'login',
    component: resolve => {
      require(['../view/login/login.vue'], resolve);
    },
    meta: {
      icon: 'ios-settings',
      hideInMenu: true,
      title: '登陆页',
      requireAuth: false //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
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
      },
      {
        path: 'treeList',
        name: 'treeList',
        component: resolve => {
          require(['../view/sys/tree/treeList.vue'], resolve);
        },
        meta: {
          icon: 'md-git-network',
          title: '菜单管理',
          code:'system-manage-tree',
          requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
        }
      },
      {
        path: 'roleList',
        name: 'roleList',
        component: resolve => {
          require(['../view/sys/role/roleList.vue'], resolve);
        },
        meta: {
          icon: 'ios-cog',
          title: '角色管理',
          code:'system-manage-role',
          requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
        }
      },
      {
        path: 'orgList',
        name: 'orgList',
        component: resolve => {
          require(['../view/sys/user/orgList.vue'], resolve);
        },
        meta: {
          icon: 'ios-people',
          title: '用户组织',
          code:'system-manage-user',
          requireAuth: true //表示当前响应的请求是否需要进行登录拦截验证【true：需要；false：不需要】
        }
      }
    ]
  }
]
