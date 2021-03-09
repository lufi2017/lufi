import React, {Component} from 'react';
import {Row,Col} from "antd";

import ProcessDone from "../HomeCommon/ProcessDone";//已办流程
import ProcessUndo from "../HomeCommon/ProcessUndo";//未办流程
import NoticeNews from "../HomeCommon/NoticeNews";//新闻通知
import RiskRatingAntd from "../HomeCommon/RiskRatingAntd";
import FundlistAntd from "../HomeCommon/FundlistAntd";
import RiskIndicatorsAntd from "../HomeCommon/RiskIndicatorsAntd";
import Commonjs from "../../../../utils/common";

import '../index.less'

class HomeFk extends Component {
  componentDidMount() {
    Commonjs.tabsClick();
  }
  render() {
    return (
        <>
          <Row>
            <Col xs={24} sm={12} md={8} lg={6}>
              <Row>
                <Col span={24}>
                  <div className="Gutter-box">
                    <div className="WrapBox">
                      <div className="Tabs-scroller">
                        <div className="Tabs-container">
                          <div className="Tabs-item" >待办流程</div>
                          <div className="Tabs-item" >已办流程</div>
                        </div>
                        <div className="Tabs-more"><a href="#">More</a></div>
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide" style={{height:'380px'}}>
                          <ProcessUndo/>
                        </div>
                        <div className="TabViews-slide" style={{height:'380px'}}>
                          <ProcessDone/>
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
                          <div className="Tabs-item" >新闻通知</div>
                        </div>
                        <div className="Tabs-more"><a href="#">More</a></div>
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide" style={{height:'380px'}}>
                          <NoticeNews/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xs={24} sm={12} md={16} lg={18}>
              <Row>
                <Col span={24}>
                  <div className="Gutter-box">
                    <div className="WrapBox">
                      <div className="Tabs-scroller">
                        <div className="Tabs-container">
                          <div className="Tabs-item" >项目风险评级</div>
                        </div>
                        <div className="Tabs-more"><a href="#">More</a></div>
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide" style={{height:'380px'}}>
                          <RiskRatingAntd/>
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
                          <div className="Tabs-item" >项目指标</div>
                        </div>
                        <div className="Tabs-more"><a href="#">More</a></div>
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide" style={{height:'380px'}}>
                          <RiskIndicatorsAntd/>
                        </div>

                      </div>
                    </div>
                  </div>
                </Col>
              </Row>

            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" >基金信息</div>
                    </div>
                    <div className="Tabs-more"><a href="#">More</a></div>
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide" >
                      <FundlistAntd/>
                    </div>

                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </>

    );
  }
}

export default HomeFk;