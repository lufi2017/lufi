import React, {Component} from 'react';
import {Row,Col} from "antd";

import TopIcon from "../../../common/TopIcon";//顶部icon
import ProcessDone from "../HomeCommon/ProcessDone";//已办流程
import ProcessUndo from "../HomeCommon/ProcessUndo";//未办流程
import ChartProject from "../HomeCommon/ChartProject";//项目统计图
import ChartFof from "../HomeCommon/ChartFof";//FOF统计
import ChartFunnel from "../HomeCommon/ChartFunnel";//项目机会漏斗图
import ChartAnalysis from "../HomeCommon/ChartAnalysis";//投资行业分析图
import NoticeFinancial from "../HomeCommon/NoticeFinancial";
import ProlistCbAntd from "../HomeCommon/ProlistCbAntd";//储备项目列表
import NoticeNews from "../HomeCommon/NoticeNews";//新闻通知
import FundlistAntd from "../HomeCommon/FundlistAntd";//基金列表
import Commonjs from "../../../../utils/common";

import '../index.less'

class HomeGc extends Component {
  componentDidMount() {
    Commonjs.tabsClick();
  }

  state={
    icondata: [
      {
        title: '年度新增备案',
        num: '13',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#8fb6da'
      },
      {
        title: '年度新增投资',
        num: '23',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#54a9df'
      },
      {
        title: '在投项目',
        num: '17',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#f5c577'
      },
      {
        title: '退出项目',
        num: '13',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#96d788'},
      {
        title: '年度新增基金',
        num: '26',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#a4a9d2'},
      {
        title: '在投基金',
        num: '56',
        href:'http://baidu.com',
        iconClassName:'ti-check-box',
        color:'#ec9b91'}
    ]
  }
  render() {

    return (
        <>
          <TopIcon icondata={this.state.icondata} />
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
              </Row>
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
                          <div className="Tabs-item" >项目统计</div>
                          <div className="Tabs-item" >FOF统计</div>
                          <div className="Tabs-item" >项目机会漏斗图</div>
                        </div>
                        {/*<div className="Tabs-more"><a href="#">More</a></div>*/}
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide">
                          <ChartProject/>
                        </div>
                        <div className="TabViews-slide">
                          <ChartFof/>
                        </div>
                        <div className="TabViews-slide">
                          <ChartFunnel/>
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
              <Row>
                <Col span={24}>
                  <div className="Gutter-box">
                    <div className="WrapBox">

                      <div className="Tabs-scroller">
                        <div className="Tabs-container">
                          <div className="Tabs-item" >基金信息</div>
                        </div>
                        {/*<div className="Tabs-more"><a href="#">More</a></div>*/}
                      </div>
                      <div className="TabViews-views">
                        <div className="TabViews-slide">
                          <FundlistAntd/>
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

export default HomeGc;