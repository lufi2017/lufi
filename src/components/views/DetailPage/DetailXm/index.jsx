import React, {Component} from 'react';
import {Row,Col, Steps ,Popover } from 'antd';
import StepBar from "../DetailCommon/StepBar";
import BasicInfoXm from "../DetailCommon/BasicInfoXm";//项目基本信息
import ContactXm from "../DetailCommon/ContactXm";//项目联系人
import TrackRecordXm from "../DetailCommon/TrackRecordXm";//项目跟踪记录

import Commonjs from "../../../../utils/common";
const { Step } = Steps;
const customDot = (dot, { status, index }) => (
    <Popover
        content={<span>step {index} status: {status}</span>}>
      {dot}
    </Popover>
);

class DetailXm extends Component {
  state = {
    targetOffset: undefined,
  };
  componentDidMount() {
    Commonjs.tabsClick();
    Commonjs.fixednavClick()
    this.setState({
      // targetOffset: window.innerHeight / 2,
      targetOffset: 100,
    });
  }

  state={
    current:'4',
    stepData:[
        {title:'储备',description:'项目储备阶段'},
      {title:'已立项',description:'项目立项阶段'},
      {title:'已决策',description:'项目决策阶段'},
      {title:'已签署',description:'项目签署阶段'},
      {title:'投后',description:'项目投后阶段'},
      {title:'退出',description:'项目退出阶段'},
      {title:'终止',description:'项目终止阶段'},
      ],
  }
  render() {
    return (
        <div className="PageContent HasAnchor">
          <Row>
            <Col>
              <div className="FixnavRight-box">
                <div className="FixnavTit">项目信息</div>
                <ul className="FixnavRight">
                  <li sta="1" className="Factive">项目基本信息</li>
                  <li sta="2">项目联系人</li>
                  <li sta="3">项目跟踪情况</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="Gutter-box">
                <div className="WrapBox" style={{padding:'20px'}}>
                  <StepBar current={this.state.current} stepData={this.state.stepData}/>
                </div>
              </div>

            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" sta="1" >项目基本信息</div>
                    </div>
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide" style={{padding:'15px'}}>
                      <BasicInfoXm/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" sta="2">项目联系人</div>
                    </div>
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide">
                      <ContactXm/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" sta="3">项目跟踪记录</div>
                    </div>
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide">
                      <TrackRecordXm/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}

export default DetailXm;