import React,{Component} from 'react'
import { Card,Button,Table,Select,Input } from 'antd';
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
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
      {
        key: '1',
        ID: 1,
        name: 'test',
        type: '行业大图',
        pubtime: '20200101',
        modtime: '20200102',
        puber: 'admin',
        sta: '在线',
      },
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
        render: (product) => (
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
      <div style={{margin:20}}>
        <Card style={{marginBottom:30,height:200}}>
          <div style={{display:'flex',justifyContent:'space-between',flexWrap:'wrap',height:100,alignItems:'space-between'}}>
            <span style={{width:350}}>
              <span>发布时间</span>
              <Input type="text" style={{width:250,marginLeft:20}}/>
            </span>
            <span style={{width:350}}>
              <span>修改时间</span>
              <Input type="text" style={{width:250,marginLeft:20}}/>
            </span>
            <span style={{width:350}}>
              <span>类型</span>
              <Select value='1' style={{width:250,marginLeft:20}}>
                <Select.Option value='1'>全部</Select.Option>
                <Select.Option value='2'>首页Banner</Select.Option>
                <Select.Option value='3'>找职业Banner</Select.Option>
                <Select.Option value='4'>找精英Banner</Select.Option>
                <Select.Option value='5'>行业大图</Select.Option>
              </Select>
            </span>
            <span style={{width:350}}>
              <span>状态</span>
              <Select value='1' style={{width:250,marginLeft:48}}>
                <Select.Option value='1'>全部</Select.Option>
                <Select.Option value='2'>上线</Select.Option>
                <Select.Option value='3'>草稿</Select.Option>
              </Select>
            </span>
          </div>
          <div style={{marginLeft:1000}}>
            <Button type='primary'>清空</Button>
            <Button type='primary'>搜索</Button>
          </div>
        </Card>
        <Card title="Article列表" extra={extre} className='home'>
          <Table dataSource={articlelis} columns={columns} bordered rowKey='key' pagination={{showQuickJumper:true}}/>;
        </Card>
      </div>
    )
  }
}