import React, { Component , Fragment } from 'react';
import { Form, Input, Button } from 'antd';
import Background from '@/components/Background';
import { connect } from 'react-redux';
import { loginRequest } from '@/store/actions/login';
import './index.less'


const imgBacUrl = require('@/assets/imgs/login/login_bg.png')

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

@connect(
  state => {
    return {
      id_token: state.loginReducer.id_token
    }
  },
  dispatch => ({
      login: (data) => {
          dispatch(loginRequest(data));
      }
  })
)


class Login extends Component {

  constructor(props) {
    super(props)
    this.state = {
        loading: false
    }
  }

  componentDidMount(){
    this.setState({
      loading:true
    })
    this.initPage()
  }

  initPage = () => {
    console.log(this.state.loading)
 }
  
  handleSubmit = values => {
    console.log('Success:', values);
    this.props.login({
      loginName: values.loginName,
      password: values.password
    })
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  componentDidMount = async () => {
    //   axios.get('/users/hello')
    //   .then(res=>{
    //       console.log('res=>',res);            
    //   })
  }

  render() {
    return (
      <Fragment>
        <Background url={imgBacUrl}>
          <section className="login-wrap-container">
            <main>


                <section className="v-left">
                    <img src={require('@/assets/imgs/login/logo_icon.png')} alt="React"/>
                </section>


                <section className="v-right">
                  <Form
                    {...layout}
                    onFinish={this.handleSubmit}
                    onFinishFailed={this.onFinishFailed}  
                    className="login-form"
                  >

                  <section>
                      <Form.Item
                        label="用户名"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                        
                      >
                        <div className="common-input">
                          <span className="icon-font iconyonghuming"></span>
                          <Input placeholder="请输入用户名"/>
                        </div>

                      </Form.Item>

                      <Form.Item
                        label="密码"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                      >
                        <div className="common-input">
                          <span className="icon-font iconmima"></span>
                          <Input type="password" placeholder="请输入密码"/>
                        </div>
                      </Form.Item>

                      <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-btn">登录</Button>
                      </Form.Item>
                    </section>

                  </Form>
                </section>
            </main>
          </section>
            
          </Background>
      </Fragment>
      
    )
  }
}


export default Login;