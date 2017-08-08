import React from 'react';
import {Icon} from 'antd';

// 定义某个表的querySchema
// schema的结构和含义参考下面的例子
// 注意: 所有的key不能重复

module.exports = [
  {
    key: 'starttime',
    title: '开始日期',
    dataType: 'datetime',  // 日期等值查询
  },
  {
    key: 'endtime',
    title: '结束日期',
    dataType: 'datetime',  // 日期等值查询
  },
];
