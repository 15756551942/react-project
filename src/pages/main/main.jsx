import React,{Component} from 'react'
import { Layout } from 'antd';

import LeftNav from '../../components/left-nav/left-nav'
import HeadBar from '../../components/head-bar/head-bar'

const { Sider, Content } = Layout;

export default class Main extends Component{
    render(){
        return (
            <Layout style={{height:'100%'}}>
                <Sider><LeftNav></LeftNav></Sider>
                <Layout>
                    <HeadBar></HeadBar>
                    <Content>Content</Content>
                </Layout>
            </Layout>
        )
    }
}