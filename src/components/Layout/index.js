import React , { Component } from 'react';
import { Layout , Menu , Row, Col } from 'antd';
import {  MenuUnfoldOutlined,
          MenuFoldOutlined,
          UserOutlined,
          VideoCameraOutlined,
          UploadOutlined,
          HeartTwoTone,
          HeartFilled
} from '@ant-design/icons';
import ContentMain from '@/components/Layout/ContentMain';
import CustomMenu from '@/components/Layout/CustomMenu';
import './index.less';

const { Header, Sider, Content } = Layout;



const menus = [
    {
        key: '/home',
        title: '首页',
        imgUrl: require('@/assets/imgs/common/icon_apply.png'),
        selectedImgUrl: require('@/assets/imgs/common/icon_apply_selected.png'),
        name: 'apply-item'
    },
    {
        key: '/archives',
        title: '维权案件',
        imgUrl: require('@/assets/imgs/common/icon_case.png'),
        selectedImgUrl: require('@/assets/imgs/common/icon_case_selected.png'),
        name: 'case-item'
    },

    {
        key: '/case',
        title: '维权案件',
        imgUrl: require('@/assets/imgs/common/icon_case.png'),
        selectedImgUrl: require('@/assets/imgs/common/icon_case_selected.png'),
        name: 'case-item'
    },


    {
        key: '/case',
        title: '维权案件',
        imgUrl: require('@/assets/imgs/common/icon_case.png'),
        selectedImgUrl: require('@/assets/imgs/common/icon_case_selected.png'),
        name: 'case-item'
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
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                            <Menu.Item key="1">
                                <UserOutlined />
                                <span>nav 1</span>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <VideoCameraOutlined />
                                <span>nav 2</span>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <UploadOutlined />
                                <span>nav 3</span>
                            </Menu.Item>
                        </Menu>
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