import React , { Component } from 'react';
import { Layout , Row, Col } from 'antd';
import {  MenuUnfoldOutlined,
          MenuFoldOutlined,
          UserOutlined,
          HeartTwoTone,
          HomeOutlined, 
          ForkOutlined, 
          TagOutlined, 
          MessageOutlined,
} from '@ant-design/icons';
import ContentMain from '@/components/Layout/ContentMain';
import CustomMenu from '@/components/Layout/CustomMenu';
import './index.less';

const { Header, Sider, Content } = Layout;



const menus = [
    {
        key: '/home',
        title: '首页',
        icon: <HomeOutlined/>,
        name: '/home'
    },
    {
        key: '/archives',
        title: '归档',
        icon: <ForkOutlined/>,
        name: '/archives'
    },

    {
        key: '/categories',
        title: '标签',
        icon: <TagOutlined />,
        name: '/categories'
    },


    {
        key: '/leavemsg',
        title: '留言',
        icon: <MessageOutlined />,
        name: '/leavemsg'
    },

    {
        key: '/about',
        title: '关于',
        icon: <UserOutlined />,
        name: '/about'
    },
]

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
            <Layout className="main-view">

                {/* 头部导航栏 */}
                <Header className="site-layout-header" style={{ padding: 0 }}>
                    <Row>
                        <Col span={4}>
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                    className: 'trigger',
                                    onClick: this.toggle,
                                    })} 
                        </Col>
                        <Col span={16}>
                            <div className="header-content">
                                <HeartTwoTone twoToneColor="#eb2f96" />
                                <div className="side-top-name">
                                    吴越的博客
                                </div>
                            </div>
                        </Col>
                        <Col span={4}>内容待定</Col>
                    </Row>
                    
                </Header>

                
                <Layout>
                    <Sider className="side-bar" trigger={null} collapsible collapsed={this.state.collapsed}>
                        <div className="side-top">
                            <HeartTwoTone twoToneColor="#eb2f96" />
                        </div>

                        <CustomMenu menus={menus}/>

                    </Sider>
                    <Layout className="site-layout-content">

                        <Content  className="site-layout-background"
                            style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            }}
                        >
                            <ContentMain/>
                        </Content>

                    </Layout>
            
                </Layout>
            </Layout>
        )
    }
}

export default IndexLayout;