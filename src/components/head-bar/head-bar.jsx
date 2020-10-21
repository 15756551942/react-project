import React,{Component} from 'react'

import './head-bar.less'

export default class HeadBar extends Component{
    render(){
        return(
            <div className='head-bar'>
                <div>管理员</div>
                <div>|</div>
                <div>admin</div>
                <div>|</div>
                <div>退出</div>
            </div>
        )
    }
}