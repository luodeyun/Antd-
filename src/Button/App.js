
import React, {Component} from 'react';
import { Button} from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import  'antd/dist/antd.css'
export default class App extends Component {
  render() {
    return (
    <> 
      <div> 按钮有五种类型：主按钮、次按钮、虚线按钮、文本按钮和链接按钮。主按钮在同一个操作区域最多出现一次。</div>
       <Button type="primary">Primary Button</Button> 
       <Button>Default Button</Button>
       <Button type="dashed">Dashed Button</Button>
       <br />
       <br/>
       <br/>
       <br/>
       <Button type="text">Text Button</Button>
       <Button type="link">Link Button</Button> 
       <br/>
       <br/>
       <br/>
       <div> 如果想做其他的我们还可以内嵌图标。控制形状等等</div>
       
       <Button type="primary" shape="circle" icon={<SearchOutlined />} />
       <Button type="primary" loading>loading Button</Button> 
       <br/>
       <br/>
       <br/>
       <Button onClick={(e) => { console.log(e)}}>点我</Button>
    </>
    );
  }
}

