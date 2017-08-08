import React from 'react';
import {Icon} from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
  	key: 'province',
  	title: '省份',
  	dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{key: '1', value: '江苏'}, {key: '2', value: '河南'}],
    defaultValue: '1', // 这个defaultValue必须和options中的key是对应的
  },
  {
    key: 'type',
    title: '类别',
    dataType: 'int',
    showType: 'select',  // 下拉框选择, antd版本升级后, option的key要求必须是string, 否则会有个warning, 后端反序列化时要注意
    options: [{key: '1', value: '棉纺'}, {key: '2', value: '纱纺'}],
    defaultValue: '1', // 这个defaultValue必须和options中的key是对应的
  },
  {
    key: 'starttime',
    title: '开始时间',
    dataType: 'datetime',  // 日期等值查询
  },
];
