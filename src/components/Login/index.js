import React from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import globalConfig from 'config';
import ajax from '../../utils/ajax';
import Logger from '../../utils/Logger';
import {message, Row, Col,Form, Icon, Input, Button, Checkbox} from 'antd';
import './index.less';
import {loginSuccessCreator} from '../../redux/Login.js';

const logger = Logger.getLogger('Login');

/**
 * 定义Login组件
 */
class Login extends React.PureComponent {

  // 这个login样式是直接从网上找的: https://colorlib.com/wp/html5-and-css3-login-forms/
  // 一般而言公司内部都会提供基于LDAP的统一登录, 用到这个登录组件的场景应该挺少的

  state = {
    username: '',  // 当前输入的用户名
    password: '',  // 当前输入的密码
    requesting: false, // 当前是否正在请求服务端接口
  };

  // controlled components

  handleUsernameInput = (e) => {
    this.setState({username: e.target.value});
  };

  handlePasswordInput = (e) => {
    this.setState({password: e.target.value});
  };

  /**
   * 处理表单的submit事件
   *
   * @param e
   */
  handleSubmit = async(e) => {  // async可以配合箭头函数
    e.preventDefault();  // 这个很重要, 防止跳转
    this.setState({requesting: true});
    const hide = message.loading('正在验证...', 0);

    const username = this.state.username;
    const password = this.state.password;
    logger.debug('username = %s, password = %s', username, password);

    try {
      // 服务端验证
      const res = await ajax.login(username, password);
      hide();
      logger.debug('login validate return: result %o', res);

      if (res.success) {
        message.success('登录成功');
        await ajax.addCookie('name',res.data,1);
          // App组件也可能触发loginSuccess action
        // 如果登录成功, 触发一个loginSuccess的action, payload就是登录后的用户名
        this.props.handleLoginSuccess(res.data);
      } else {
        message.error(`登录失败: ${res.message}, 请联系管理员`);
        this.setState({requesting: false});
      }
    } catch (exception) {
      hide();
      message.error(`网络请求出错: ${exception.message}`);
      logger.error('login error, %o', exception);
      this.setState({requesting: false});
    }
  };

  render() {
    // 整个组件被一个id="loginDIV"的div包围, 样式都设置到这个div中
    return (
      <div id="loginDIV">
        <Row type="flex" justify="center" align="middle">
          <Col xs={22} sm={20} md={18} lg={16} >
            <img src="/static/img/login.png" />
          </Col>

           <Col xs={2} sm={4} md={6} lg={8} >
            <div className="login-block">
              <div className="login">
                <h1>{globalConfig.name}</h1>

                <form onSubmit={this.handleSubmit}>
                  
                  <div className="inputarea">
                    <span className="anticon anticon-user"></span>
                    <input maxlength="" type="text" value={this.state.username} onChange={this.handleUsernameInput} placeholder="username" required="required"/>
                  </div>
                  
                  <div className="inputarea">
                    <span className="anticon anticon-lock"></span>
                    <input className="password" maxlength="" id="password" type="password" value={this.state.password} onChange={this.handlePasswordInput} placeholder="password" required="required"/>
                  </div>
                  
                  <button className="inputarea button"
                          type="submit" disabled={this.state.requesting}>
                    登录
                  </button>
                </form>
                <label>xxxxxxx</label>
              </div>
            </div>
          </Col>
        </Row>

      </div>
    );
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoginSuccess: bindActionCreators(loginSuccessCreator, dispatch),
  };
};

// 不需要从state中获取什么, 所以传一个null
export default connect(null, mapDispatchToProps)(Login);
