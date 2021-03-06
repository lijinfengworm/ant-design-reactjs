/**
 * 程序的入口, 类似java中的main
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import './utils/index.js';  // 引入各种prototype辅助方法
import store from 'redux/store.js';  // redux store

// 开始引入各种自定义的组件
import App from './components/App';
import Welcome from './components/Welcome';
import Error from './components/Error';
import Hello from './components/Hello';
//import DBTable from './components/DBTable';

// 将DBTable组件做成动态路由, 减小bundle size
// 注意不要再import DBTable了, 不然就没意义了
// 一些比较大/不常用的组件, 都可以考虑做成动态路由
const DBTableContainer = (location, cb) => {
  require.ensure([], require => {
    cb(null, require('./components/DBTable').default)
  }, 'DBTable');
};

// 路由表, 只要menu.js中所有的叶子节点配置了路由就可以了
// 我本来想根据menu.js自动生成路由表, 但那样太不灵活了, 还是自己配置好些
 // <Route path="facility" tableName="facility" getComponent={DBTableContainer}/>
  // <Route path="capacity" tableName="capacity" getComponent={DBTableContainer}/>
  // <Route path="fault" tableName="fault" getComponent={DBTableContainer}/>
const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Welcome}/>

        <Route path="capacity">
          <Route path="option1" tableName="capacityData" getComponent={DBTableContainer}/>
          <Route path="option2" tableName="capacityProvinceData" getComponent={DBTableContainer}/>
          <Route path="capacitydetail" tableName="capacityDetailData" getComponent={DBTableContainer}/>
        </Route>

        <Route path="daohang">
          <Route path="555" component={Hello}/>
          <Route path="sanji">
            <Route path="666" component={Hello}/>
            <Route path="777" component={Hello}/>
            <Route path="888" component={Hello}/>
            <Route path="999" component={Hello}/>
          </Route>
        </Route>

        <Route path="test">
          <Route path="aaa" component={Hello}/>
          <Route path="bbb" component={Hello}/>
          <Route path="ccc" component={Hello}/>
          <Route path="sanjiaaa">
            <Route path="666aa" component={Hello}/>
          </Route>
          <Route path="sanjibbb">
            <Route path="666bb" component={Hello}/>
          </Route>
        </Route>

        <Route path="headerMenu5">
          <Route path="headerMenu5000000" component={Hello}/>
          <Route path="headerMenu51111">
            <Route path="headerMenu51111aa" component={Hello}/>
            <Route path="headerMenu51111bb" component={Hello}/>
          </Route>
          <Route path="headerMenu52222">
            <Route path="headerMenu52222aa" component={Hello}/>
            <Route path="headerMenu52222bb" component={Hello}/>
          </Route>
        </Route>

        <Route path="headerMenu4" component={Hello}/>
        <Route path="alone" component={Hello}/>
        <Route path="alone2" component={Hello}/>
        <Route path="total" tableName="totalData" getComponent={DBTableContainer}/>
        <Route path="datas" tableName="testData" getComponent={DBTableContainer}/>
        <Route path="fault" tableName="faultData" getComponent={DBTableContainer}/>
        <Route path="fault_detail" tableName="faultDataDetail" getComponent={DBTableContainer}/>
        <Route path="machine" tableName="queryMachine" getComponent={DBTableContainer}/>
        <Route path="*" component={Error}/>

      </Route>
    </Router>
  </Provider>
);

ReactDOM.render(routes, document.getElementById('root'));
