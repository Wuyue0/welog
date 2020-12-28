import React , { Component } from 'react';
import { Layout , Input } from 'antd';
import {  
          UserOutlined,
          HomeOutlined, 
          ForkOutlined, 
          TagOutlined, 
          MessageOutlined,
          HomeFilled,
          UnorderedListOutlined,
          KeyOutlined
} from '@ant-design/icons';
// import ContentMain from '@/components/Layout/ContentMain';
// import CustomMenu from '@/components/Layout/CustomMenu';
import './index.less';

const { Header } = Layout;
const { Search } = Input;



// const menus = [
//     {
//         key: '/home',
//         title: '首页',
//         icon: <HomeOutlined/>,
//         name: '/home'
//     },
//     {
//         key: '/archives',
//         title: '归档',
//         icon: <ForkOutlined/>,
//         name: '/archives'
//     },

//     {
//         key: '/categories',
//         title: '标签',
//         icon: <TagOutlined />,
//         name: '/categories'
//     },


//     {
//         key: '/leavemsg',
//         title: '留言',
//         icon: <MessageOutlined />,
//         name: '/leavemsg'
//     },

//     {
//         key: '/about',
//         title: '关于',
//         icon: <UserOutlined />,
//         name: '/about'
//     },
// ]

class IndexLayout extends Component {

    constructor(props){
        super(props)
        this.state = {
            collapsed: false
        }
    }

    toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
    };
    
    

    render(){
        return (
            <div  id="allLayOut">
                {/* 头部导航栏 */}
                <Header id="" className="site-layout-header">


                  <div className="header-left">
                    <a className="navbar-brand">
                      <HomeFilled />
                      <span className="m-l-xs">guitu18.com</span>
                    </a>
                  </div>

                  <div className="header-right">
                            <div className="header-right-search">
                              <Search className="header-search" placeholder="input search text"/>
                            </div>

                            <div className="header-right-player">
                                <ul className="nav-bar-right">
                                  <li><a href="#">播放器</a></li>
                                  <li><a href="#"><UnorderedListOutlined /></a></li>
                                  <li><a href="#"><MessageOutlined /></a></li>
                                  <li><a href="#"><KeyOutlined /></a></li>
                                </ul>
                            </div>

                          </div>
                </Header>
            </div>
        )
    }
}

export default IndexLayout;