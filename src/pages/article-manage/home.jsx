import React,{Component} from 'react'
import { Card,Button,Table } from 'antd';
import {PlusOutlined} from '@ant-design/icons'

import LinkButton from '../../components/link-button/link-button'

export default class Home extends Component{
  state = {
    articlelis:[
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      }
    ]
  }
  render(){
    const {articlelis} = this.state

    const columns = [
      {
        title: 'ID',
        dataIndex: 'ID',
        align: 'center'
      },
      {
        title: '名称',
        dataIndex: 'name',
        align: 'center'
      },
      {
        title: '类型',
        dataIndex: 'type',
        align: 'center'
      },
      {
        title: '发布时间',
        dataIndex: 'pubtime',
        align: 'center'
      },
      {
        title: '修改时间',
        dataIndex: 'modtime',
        align: 'center'
      },
      {
        title: '发布者',
        dataIndex: 'puber',
        align: 'center'
      },
      {
        title: '状态',
        dataIndex: 'sta',
        align: 'center'
      },
      {
        title: '操作',
        align: 'center',
        render: () => (
          <span>
            <LinkButton>下线</LinkButton>
            <LinkButton>编辑</LinkButton>
            <LinkButton>删除</LinkButton>
          </span>
        )
      },
    ];
    
    const extre = (
      <Button type='primary'><PlusOutlined></PlusOutlined>新增</Button>
    )
    return(
      <Card title="Article列表" extra={extre} className='home'>
          <Table dataSource={articlelis} columns={columns} bordered rowKey='key'/>;
      </Card>
    )
  }
}