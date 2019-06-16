import React from 'react'
import { Form,Icon, Input, Button,} from 'antd';
import logo from './images/logo.png'

import './login.less'



 class Login extends React.Component{
     
            handleSubmit = (event)=>{
                event.preventDefault()
                // const username = this.props.form.getFieldValue('username')
                // const password = this.props.form.getFieldValue('password')
                // const Values = this.props.form.getFieldsValue()
                // console.log(password,username,Values)
                // 统一进行所有表单项的验证
                this.props.form.validateFields((err, values) => {
                    if (!err) { // 验证成功了
                    //   console.log('发ajax请求: ', values)
                    }
                })
            }

            //自定义校验
            validatePwd = (rule, value='', callback) =>{
                // console.log(rule,value)
                value = value.trim()
                if(!value){
                    callback('必须输入密码')
                }else if(value.length < 4){
                    callback('密码长度不能小于4位')
                }else if(value.length > 12){
                    callback('密码长度不能大于12位')
                }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
                    callback('密码必须是英文、数字或下划线组成')
                }else{
                    callback()
                }
                
            }

            render(){

                const { getFieldDecorator } = this.props.form;
                return(
                    <div className='login'>
                        <header className='login-header'>
                            <img src={logo} alt="logo"/>
                            <h1>React: 后台管理系统</h1>
                        </header>
                        <section className='login-content'>
                            <h2>用户登录</h2>
                            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {
                        getFieldDecorator('username',{
                            initialValue: '',
                            rules: [
                                { required: true,whitespace:true, message: '请输入用户名' },
                                { min: 4, message: '用户名不能小于4位' },
                                { max: 12, message: '用户最大12位' },
                                { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必须是英文、数字或下划线组成' },

                            ],
                        })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="用户名"
                            />
                            )
                    }
                    
                
                </Form.Item>
                <Form.Item>
                    {
                        getFieldDecorator('password',{
                            rules: [
                                {
                                  validator: this.validatePwd
                                }
                              ]
                        })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="密码"
                            />
                            )
                    }
                </Form.Item>
                <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    登录
                </Button>
                </Form.Item>
            </Form>
            </section>
        </div>
        )
    }
}
const WarpperLogin = Form.create()(Login);
export default WarpperLogin