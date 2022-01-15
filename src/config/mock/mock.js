// 引入mockjs
const Mock = require('mockjs');

// 用户的mock
import userLogin from './user/user.login';
import userGetUserInfo from './user/user.getUserInfo';
import userGetOrgTree from './user/user.getOrgTree';
import userQueryUserList from './user/user.queryUserList';
import userCheckOrgNameAndCode from './user/user.checkOrgNameAndCode';
import userAddOrg from './user/user.addOrg';
import userGetOrgByOrgId from './user/user.getOrgByOrgId';
import userUpdateOrg from './user/user.updateOrg';
import userDeleteOrg from './user/user.deleteOrg';
import userGetOrgCascader from './user/user.getOrgCascader';
import userLoadAllRole from './user/user.loadAllRole';
import userCheckLoginAccount from './user/user.checkLoginAccount';
import userCcreateUser from './user/user.createUser';
import userGetUserByUserId from './user/user.getUserByUserId';
import userUpdateUser from './user/user.updateUser';
import userDeleteUser from './user/user.deleteUser';

Mock.mock('/user/login', 'post', userLogin);
Mock.mock('/user/getUserInfo', 'post', userGetUserInfo);
Mock.mock('/org/getOrgTree', 'post', userGetOrgTree);
Mock.mock('/user/queryUserList', 'post', userQueryUserList);
Mock.mock('/org/checkOrgNameAndCode', 'post', userCheckOrgNameAndCode);
Mock.mock('/org/addOrg', 'post', userAddOrg);
Mock.mock('/org/getOrgByOrgId', 'post', userGetOrgByOrgId);
Mock.mock('/org/updateOrg', 'post', userUpdateOrg);
Mock.mock('/org/deleteOrg', 'post', userDeleteOrg);
Mock.mock('/org/getOrgCascader', 'post', userGetOrgCascader);
Mock.mock('/user/loadAllRole', 'post', userLoadAllRole);
Mock.mock('/user/checkLoginAccount', 'post', userCheckLoginAccount);
Mock.mock('/user/createUser', 'post', userCcreateUser);
Mock.mock('/user/getUserByUserId', 'post', userGetUserByUserId);
Mock.mock('/user/updateUser', 'post', userUpdateUser);
Mock.mock('/user/deleteUser', 'post', userDeleteUser);

// 字典的mock
import dictQueryDictList from './dictionary/dict.queryDictList';
import dictDeleteDict from './dictionary/dict.deleteDict';
import dictUpdateDict from './dictionary/dict.updateDict';
import dictCheckTypeAndCode from './dictionary/dict.checkTypeAndCode';
import dictAddDict from './dictionary/dict.addDict';

Mock.mock('/dict/queryDictList', 'post', dictQueryDictList);
Mock.mock('/dict/deleteDict', 'post', dictDeleteDict);
Mock.mock('/dict/updateDict', 'post', dictUpdateDict);
Mock.mock('/dict/checkTypeAndCode', 'post', dictCheckTypeAndCode);
Mock.mock('/dict/addDict', 'post', dictAddDict);

// 角色的mock
import roleQueryRoleList from './role/role.queryRoleList';
import roleLoadTree from './role/role.loadTree';
import roleCheckRoleCodeAndName from './role/role.checkRoleCodeAndName';
import roleAddRole from './role/role.addRole';
import roleGetRoleByRoleId from './role/role.getRoleByRoleId';
import roleUpdateRole from './role/role.updateRole';
import roleDeleteRole from './role/role.deleteRole';

Mock.mock('/role/queryRoleList', 'post', roleQueryRoleList);
Mock.mock('/role/loadTree', 'post', roleLoadTree);
Mock.mock('/role/checkRoleCodeAndName', 'post', roleCheckRoleCodeAndName);
Mock.mock('/role/addRole', 'post', roleAddRole);
Mock.mock('/role/getRoleByRoleId', 'post', roleGetRoleByRoleId);
Mock.mock('/role/updateRole', 'post', roleUpdateRole);
Mock.mock('/role/deleteRole', 'post', roleDeleteRole);

// 菜单的mock
import treeGetTreeList from './tree/tree.getTreeList';
import treeCheckTreeCode from './tree/tree.checkTreeCode';
import treeAddTree from './tree/tree.addTree';
import treeGetTreeByTreeId from './tree/tree.getTreeByTreeId';
import treeUpdateTree from './tree/tree.updateTree';
import treeDeleteTree from './tree/tree.deleteTree';
import treeAddButton from './tree/tree.addButton';
import treeUpdateButton from './tree/tree.updateButton';
import treeOperateButton from './tree/tree.operateButton';
import treeDeleteButton from './tree/tree.deleteButton';
import treeQueryTreeButtonList from './tree/tree.queryTreeButtonList';

Mock.mock('/tree/getTreeList', 'post', treeGetTreeList);
Mock.mock('/tree/checkTreeCode', 'post', treeCheckTreeCode);
Mock.mock('/tree/addTree', 'post', treeAddTree);
Mock.mock('/tree/getTreeByTreeId', 'post', treeGetTreeByTreeId);
Mock.mock('/tree/updateTree', 'post', treeUpdateTree);
Mock.mock('/tree/deleteTree', 'post', treeDeleteTree);
Mock.mock('/tree/addButton', 'post', treeAddButton);
Mock.mock('/tree/updateButton', 'post', treeUpdateButton);
Mock.mock('/tree/operateButton', 'post', treeOperateButton);
Mock.mock('/tree/deleteButton', 'post', treeDeleteButton);
Mock.mock('/tree/queryTreeButtonList', 'post', treeQueryTreeButtonList);

// 日志行为的mock
import treeQueryBehaviorLogList from './behaviorLog/behaviorLog.queryBehaviorLogList';

Mock.mock('/behaviorLog/queryBehaviorLogList', 'post', treeQueryBehaviorLogList);
