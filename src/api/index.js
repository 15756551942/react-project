import ajax from './ajax'

export const reqLogin = (name,pwd) => ajax('http://dev.admin.carrots.ptteng.com/a/login;',{name,pwd},'POST')