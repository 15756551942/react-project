import React,{Component} from 'react'
import { Card,Button,Table } from 'antd';

export default class Home extends Component{
    render(){
        const dataSource = [
            {
              key: '1',
              name: '胡彦斌',
              age: 32,
              address: '西湖区湖底公园1号',
            },
            {
              key: '2',
              name: '胡彦祖',
              age: 42,
              address: '西湖区湖底公园1号',
            },
          ];
          
          const columns = [
            {
              title: '姓名',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '年龄',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: '住址',
              dataIndex: 'address',
              key: 'address',
            },
          ];

        const extre = (
            <Button>新增</Button>
        )

        return(
            <Card title="Article列表" extra={extre}>
                <Table dataSource={dataSource} columns={columns} />;
            </Card>
        )
    }
}