import React, { Component , Fragment } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import Background from '@/components/Background'
import './index.less'


const imgBacUrl = require('@/assets/imgs/login/login_bg.png')

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};


class Login extends Component {
  
  onFinish = values => {
    console.log('Success:', values);
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
                  name="basic"
                  initialValues={{ remember: true }}
                  onFinish={this.onFinish}
                  onFinishFailed={this.onFinishFailed}  
                  className="login-form"
                >

                <section>
                    <Form.Item
                      label="Username"
                      name="username"
                      rules={[{ required: true, message: 'Please input your username!' }]}
                      
                    >
                      <div className="common-input">
                        <span className="icon-font iconyonghuming"></span>
                        <Input placeholder="请输入手机号码"/>
                      </div>

                    </Form.Item>

                    <Form.Item
                      label="Password"
                      name="password"
                      rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                      <div className="common-input">
                        <span className="icon-font iconmima"></span>
                        <Input type="password" placeholder="请输入密码"/>
                      </div>
                    </Form.Item>

                    <Form.Item>
                      <Button type="primary" htmlType="submit" className="login-btn">
                        Submit
                      </Button>
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