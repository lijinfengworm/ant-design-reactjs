import React from 'react';
import {Icon} from 'antd';

// 定义某个表的dataSchema, 结构跟querySchema很相似, 见下面的例子
// 注意: 所有的key不能重复

// 这个配置不只决定了table的schema, 也包括用于新增/删除的表单的schema

module.exports = [
  {
    key: 'id',  // 传递给后端的key
    title: 'ID',  // 前端显示的名字

    // 其实dataType对前端的意义不大, 更重要的是生成后端接口时要用到, 所以要和DB中的类型一致
    // 对java而言, int/float/varchar/datetime会映射为Long/Double/String/Date
    dataType: 'int',  // 数据类型, 目前可用的: int/float/varchar/datetime

    // 这一列是否是主键?
    // 如果不指定主键, 不能update/delete, 但可以insert
    // 如果指定了主键, insert/update时不能填写主键的值;
    // 只有int/varchar可以作为主键, 但是实际上主键一般都是自增id
    primary: true,

    // 可用的showType: normal/radio/select/checkbox/multiSelect/textarea/image/file/cascader
    showType: 'normal',  // 默认是normal, 就是最普通的输入框

    showInTable: true,  // 这一列是否要在table中展示, 默认true
    disabled: false, // 表单中这一列是否禁止编辑, 默认false

    // 扩展接口, 决定了这一列渲染成什么样子
    render: (text, record) => text,
  },
  {
    key: 'status',
    title: '状态',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'info',
    title: '信息',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'name',
    title: '信息',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'fault_author',
    title: '电源',
    dataType: 'int',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'bottom',
    title: '机器状态',
    dataType: 'int',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'image',
    title: '图片',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'sta',
    title: '状态',
    dataType: 'int',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'fault_msg',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'fault_time',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'process',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'left',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'right',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'value',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data1',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data2',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data3',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
  {
    key: 'data4',
    title: '数据',
    dataType: 'varchar',  
    primary: true,
    showType: true,
    disabled: false,
  },
];
