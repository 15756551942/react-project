import React,{Component} from 'react'
import { Menu } from 'antd';
import { MailOutlined } from '@ant-design/icons';

import './left-nav.less'

const { SubMenu } = Menu;

export default class NavLeft extends Component {
    // submenu keys of first level
    rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  
    state = {
      openKeys: ['sub1'],
    };
  
    onOpenChange = openKeys => {
      const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
      if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
        this.setState({ openKeys });
      } else {
        this.setState({
          openKeys: latestOpenKey ? [latestOpenKey] : [],
        });
      }
    };
  
    render() {
      return (
        <div className='left-nav'>
            <header className='left-nav-head'><h1>萝卜多后台管理系统</h1></header>
            <Menu
            mode="inline"
            openKeys={this.state.openKeys}
            onOpenChange={this.onOpenChange}
            >
                <SubMenu key="sub1" icon={<MailOutlined />} title="Article管理">
                    <Menu.Item key="1">Article管理列表</Menu.Item>
                </SubMenu>
            </Menu>
        </div>
      );
    }
  }
  
  

// export default class LeftNav extends Component{
//     render(){
//         return(
//             <div className='left-nav'>
//                 <header className='left-nav-head'><h1>萝卜多后台管理系统</h1></header>

//             </div>
//         )
//     }
// }