import React, {Component} from 'react';
import {Row,Col} from "antd";

import TopIcon from "../../../common/TopIcon";//顶部icon
import ProcessDone from "../HomeCommon/ProcessDone";//已办流程
import ProcessUndo from "../HomeCommon/ProcessUndo";//未办流程
import NoticeFinancial from "../HomeCommon/NoticeFinancial";
import NoticeNews from "../HomeCommon/NoticeNews";//新闻通知
import RiskRatingAntd from "../HomeCommon/RiskRatingAntd";
import FundlistAntd from "../HomeCommon/FundlistAntd";
import RiskIndicatorsAntd from "../HomeCommon/RiskIndicatorsAntd";
import Commonjs from "../../../../utils/common";

import '../index.less'
import ChartProject from "../HomeCommon/ChartProject";
import ChartFof from "../HomeCommon/ChartFof";
import ChartFunnel from "../HomeCommon/ChartFunnel";
import ProlistCbAntd from "../HomeCommon/ProlistCbAntd";
import ChartRegional from "../HomeCommon/ChartRegional";

class HomeTz extends Component {
  componentDidMount() {
    Commonjs.tabsClick();
  }


  render() {

    return (
        <>
          <Row>
            <Col xs={24} sm={24} xl={7}>
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
                    <div className="TabViews-slide" style={{height:'400px'}}>
                      <ProcessDone/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} xl={10}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" >项目地域分布</div>
                      <div className="Tabs-item" >项目阶段统计图</div>
                      <div className="Tabs-item" >项目机会漏斗图</div>
                    </div>
                    {/*<div className="Tabs-more"><a href="#">More</a></div>*/}
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide">
                      <ChartRegional/>
                    </div>
                    <div className="TabViews-slide">
                      <ChartProject/>
                    </div>
                    <div className="TabViews-slide">
                      <ChartFunnel/>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={24} sm={24} xl={7}>
              <div className="Gutter-box">
                <div className="WrapBox">
                  <div className="Tabs-scroller">
                    <div className="Tabs-container">
                      <div className="Tabs-item" >新闻通知</div>
                    </div>
                    <div className="Tabs-more"><a href="#">More</a></div>
                  </div>
                  <div className="TabViews-views">
                    <div className="TabViews-slide" style={{height:'400px'}}>
                      <NoticeNews/>
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
                      <div className="Tabs-item" >股权直投</div>
                      <div className="Tabs-item" >科创版</div>
                      <div className="Tabs-item" >股权基金</div>
                      <div className="Tabs-item" >定增</div>
                      <div className="Tabs-item" >固收</div>
                      <div className="Tabs-item" >MOM</div>
                    </div>
                    <div className="Tabs-more"><a href="#">More</a></div>
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

        </>

    );
  }
}

export default HomeTz;