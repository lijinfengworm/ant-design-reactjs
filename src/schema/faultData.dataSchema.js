import React from 'react';
import {Icon} from 'antd';
import {Link} from 'react-router';
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
    key: 'province',
    title: '省份',
    dataType: 'varchar',  // 对于普通的input框, 可以设置addonBefore/addonAfter
    placeholder: '请输入用户名',
    addonBefore: (<Icon type="user"/>),
    addonAfter: '切克闹',
    defaultValue: 'foolbear', // 默认值, 只在insert时生效, update时不生效
  },
  {
    key: 'machine',
    title: '设备编号',
    dataType: 'varchar',
  },
  {
    key: 'machine_type',
    title: '设备类型',
    dataType: 'varchar',
  },
  {
    key: 'machine_count',
    title: '纱支',
    dataType: 'varchar',
  },
  {
    key: 'fault_point',
    title: '点位',
    dataType: 'varchar',
  },
  {
    key: 'fault_code',
    title: '故障码',
    dataType: 'varchar',  
  },
  {
    key: 'fault_msg',
    title: '故障描述',
    dataType: 'varchar',
    showType: 'image',  // 后端必须提供图片上传接口
    showInTable: false,
  },
  {
    key: 'fault_type',
    title: '故障类型',
    dataType: 'varchar',
    defaultValue: '个人简介个人简介个人简介',
  },
  {
    key: 'fault_level',
    title: '级别',
    dataType: 'varchar',
    max: 99,
    min: 9,
  },
  {
    key: 'fault_print',
    title: '是否生成工单',
    dataType: 'float',
    max: 9.9,
    placeholder: '哈哈',
    width: 50,
  },
  {
    // 这个key是我预先定义好的, 注意不要冲突
    key: 'singleRecordActions',
    title: '操作',  // 列名
    actions: [
      {
        // 这样写似乎和Link组件是一样的效果
        render: (record) => <a href={`/#/fault_detail?id=${record.id}`}>{'查看详情'}</a>,
      },
    ],
  },
];
