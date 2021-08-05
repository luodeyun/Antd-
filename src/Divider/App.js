
import React, {Component} from 'react';
import {Divider} from 'antd'
import  'antd/dist/antd.css'
export default class App extends Component {
  render() {
    return (
    <> 
    <Divider/>
    <Divider>Text</Divider>
    <Divider orientation='left'>Left</Divider>
    <Divider orientation='right'>Right</Divider>
    <Divider plain={false}>文字是否显示普通正文样式fasle</Divider> 
    <Divider plain={true}>文字是否显示普通正文样式true</Divider> 
    </>
    );
  }
}

