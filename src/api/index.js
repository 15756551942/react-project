import ajax from './ajax'

const BASE = 'http://localhost:8800'

export const reqLogin = (name,pwd) => ajax(BASE + '/a/login;',{name,pwd},'POST')