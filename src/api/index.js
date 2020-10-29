import ajax from './ajax'

const BASE = 'api'

export const reqLogin = (name,pwd) => ajax(BASE + '/a/login',{name,pwd},'POST')

// export const reqsearch = () => ajax(BASE + '/main/article-manage')