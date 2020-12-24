import React, { Component } from 'react'
import './layout.less';
import { Layout , Row, Col, Input } from 'antd';
import {  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  HeartTwoTone,
  HomeOutlined, 
  ForkOutlined, 
  TagOutlined, 
  MessageOutlined,
  HomeFilled,
  UnorderedListOutlined,
  KeyOutlined
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;
const { Search } = Input;

class Home extends Component {
  render () {
    return (
      <div className="app-container">
          {/* 头部导航栏 */}
          <header id="header" className="nav-bar box-shadow-bottom-lg">
            <div className="nav-bar-left bg-white">
              <a className="nav-bar-title">
                <HomeFilled />
                <span className="m-l-xs">guitu18.com</span>
              </a>
            </div>

            <div className="nav-bar-right bg-white">
                    
                      <div className="nav-bar-search">
                        <Search className="header-search" placeholder="input search text"/>
                      </div>

                      <div className="nav-bar-login">
                          <ul>
                            <li><a href="#">播放器</a></li>
                            <li><a href="#"><UnorderedListOutlined /></a></li>
                            <li><a href="#"><MessageOutlined /></a></li>
                            <li><a href="#"><KeyOutlined /></a></li>
                          </ul>
                      </div>

              </div>
          </header>


        
      </div>
    )
  }
}

export default Home
