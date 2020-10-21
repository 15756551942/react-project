import React,{Component} from 'react'
import {Card,List,Select} from 'antd'

export default class Add extends Component{
    render(){
        return(
            <Card title='新增article列表' className='add'>
                <List>
                    <List.Item>
                        <span className='addleft'>标题名称</span>
                        <input></input>
                    </List.Item>
                    <List.Item>
                        <span className='addleft'>类型</span>
                        <Select>
                            <Select.Option>请选择</Select.Option>
                            <Select.Option>首页Banner</Select.Option>
                            <Select.Option>找职业Banner</Select.Option>
                            <Select.Option>找精英Banner</Select.Option>
                            <Select.Option>行业大图</Select.Option>
                        </Select>
                    </List.Item>
                    <List.Item>
                        <span className='addleft'>说明</span>
                        <input></input>
                    </List.Item>
                    <List.Item>
                        <span className='addleft'>跳转链接</span>
                        <input></input>
                    </List.Item>
                    <List.Item>
                        <span className='addleft'>配图</span>
                        <input></input>
                    </List.Item>
                </List>
            </Card>
        )
    }
}