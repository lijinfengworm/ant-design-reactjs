import React from 'react';
import {Menu, Dropdown,message} from 'antd';
import globalConfig from 'config.js';
import './index.less';
import Login from '../Login';

/**
 * MainHeader
 */

class MainHeader extends React.PureComponent {
  
  loginOutClick = async(e) =>{
  	e.preventDefault();
  	var date=new Date();
    date.setTime(date.getTime()-10000);
  	document.cookie='name'+"=v; expires="+date.toGMTString();
  	window.location.reload();
  };
 
  render() {

  	
    const menu = (
	  <Menu>
	    <Menu.Item>
	      <a  rel="noopener noreferrer" onClick={this.loginOutClick} ><i className="anticon anticon-logout"></i>退出</a>
	    </Menu.Item>
	  </Menu>
	);

    // backtop如果不设置target会有问题
    // footer的字可以有html标签, 有一定XSS的风险, 不过问题不大
    return (
      <div className="main-header">
        <nav className="navbar navbar-static-top">
    		<a className="sidebar-toggle">
	        	<span className="sr-only"></span>
	      	</a>
	      	<div className="navbar-custom-menu">
	      		<ul className="nav navbar-nav">
	      			<li className="dropdown user user-menu">
	      			  <Dropdown overlay={menu}>
						  <a className="ant-dropdown-link">
						  	<img className="user-image" src="/static/img/user2-160x160.jpg" />
						  	<span className="hidden-xs">Alexander Pierce</span>
						  </a>
					  </Dropdown>
					</li>
	      		</ul>
	      	</div>
        </nav>
      </div>
    );
  }

}

export default MainHeader;
