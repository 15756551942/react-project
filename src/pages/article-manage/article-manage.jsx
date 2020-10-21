import React,{Component} from 'react'
import {Switch,Route} from 'react-router-dom'

import Home from './home'
import Add from './add'

export default class ArticleManage extends Component{
    render(){
        return(
            <Switch>
                <Route path='/articlemanage' component={ArticleManage}></Route>
                <Route path='/home' component={Home} exact></Route>
                <Route path='/add' component={Add}></Route>
            </Switch>
        )
    }
}