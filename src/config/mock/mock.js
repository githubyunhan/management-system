// 引入mockjs
const Mock = require('mockjs');
import userLogin from './user/user.login';
import userGetUserInfo from './user/user.getUserInfo';

Mock.mock('/user/login', 'post', userLogin);
Mock.mock('/user/getUserInfo', 'post', userGetUserInfo);
