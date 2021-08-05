import React, { Component } from 'react'
import { Row, Col, Button,Divider} from 'antd'
import 'antd/dist/antd.css'
const style = { background: '#0092ff' };
export default class App extends Component {
    render() {
        return (
            <>
                <Row>
                    <Col span={24}>Col基本使用</Col>
                </Row>
                <Row>
                    <Col span={12} >col-12</Col>
                    <Col span={12} >col-12</Col>
                </Row>
                <Row>
                    <Col span={24}>col</Col>
                </Row>
                <Row>
                    <Col span={12}>col-12</Col>
                    <Col span={12}>col-12</Col>
                </Row>
                <Row>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                    <Col span={8}>col-8</Col>
                </Row>
                <Row>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                    <Col span={6}>col-6</Col>
                </Row>
                <Divider orientation="left">栅格间距</Divider>
                <Row gutter={32}>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
                <Divider orientation="left">栅格间距</Divider>
                <Divider orientation="left">栅格间距</Divider>
                <Divider orientation="left">栅格间距</Divider>
                <Row gutter={[16,35]}>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
                <Divider orientation="left">栅格偏移</Divider>
                <Divider orientation="left">栅格偏移</Divider>
                <Row gutter={16}>
                    <Col  span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col span={6}>
                        <div style={style}>col-6</div>
                    </Col>
                    <Col span={6} offset={6}>
                        <div style={style}>col-6</div>
                    </Col>
                </Row>
                <Divider orientation="left">push改变列顺序</Divider>
                <Divider orientation="left">pull改变列顺序</Divider>
                <Row gutter={16}>
                    <Col  span={18}  push={3}>
                        <div style={style}>col-18</div>
                    </Col>
                    {/* <Col span={6}>
                        <div style={{background:'red'}}>col-6</div>
                    </Col> */}
                 
                </Row>
            </>
        )
    }
}
