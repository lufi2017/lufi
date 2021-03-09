import React, {Component} from 'react';
import {Row,Col} from "antd";
import ProcessDone from "../HomeCommon/ProcessDone";//已办流程
import ProcessUndo from "../HomeCommon/ProcessUndo";//未办流程
import ChartAnalysis from "../HomeCommon/ChartAnalysis";//投资行业分析图
import NoticeFinancial from "../HomeCommon/NoticeFinancial";//回款通知
import NoticeNews from "../HomeCommon/NoticeNews";//新闻通知
import ProlistCbAntd from "../HomeCommon/ProlistCbAntd";//项目储备列表
import Commonjs from "../../../../utils/common";

import '../index.less'

class HomePt extends Component {
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
                          <div className="Tabs-item" >回款到账通知</div>
                        </div>
                        <div className="Tabs-more"><a href="#">More</a></div>
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide">
                          <NoticeFinancial/>
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
                        <div className="TabViews-slide">
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
                <Col xs={24} sm={24} md={24} lg={12}>
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
                        <div className="TabViews-slide" style={{height:'400px'}}>
                          <ProcessUndo/>
                        </div>
                        <div className="TabViews-slide">
                          <ProcessDone/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs={24} sm={24} md={24} lg={12}>
                  <div className="Gutter-box">
                    <div className="WrapBox">
                      <div className="Tabs-scroller">
                        <div className="Tabs-container">
                          <div className="Tabs-item" >投资行业分析</div>
                        </div>
                        {/*<div className="Tabs-more"><a href="#">More</a></div>*/}
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide">
                          <ChartAnalysis/>
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
                          <div className="Tabs-item" >储备</div>
                          <div className="Tabs-item" >立项</div>
                          <div className="Tabs-item" >投决</div>
                          <div className="Tabs-item" >投资</div>
                          <div className="Tabs-item" >投后</div>
                          <div className="Tabs-item" >退出</div>
                        </div>
                        {/*<div className="Tabs-more"><a href="#">More</a></div>*/}
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide">
                          <ProlistCbAntd/>
                        </div>
                      </div>
                    </div>
                  </div>
                </Col>


              </Row>

            </Col>
          </Row>




        </>

    );
  }
}

export default HomePt;