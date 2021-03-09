import React, {Component} from 'react';
import {Row,Col} from 'antd'
import Linkitem from "./Linkitem";
class Pagelink extends Component {

  state= {
    home: [
      {
        moduleTitle: '首页',
        moduleData: [
            {
              partData: [
                  {
                    title: '高管首页',
                    path: '/home/homeGc',
                    color:'#8fb6da',
                  },

                {
                  title: '普通首页',
                  path: '/home/homePt',
                  color:'#f5c577',
                },
                {
                  title: '风控首页',
                  path: '/home/homeFk',
                  color:'#f08a7c',},
                {
                  title: '投资首页',
                  path: 'home/homeTz',
                  color:'#8fcad8',}
                  ]
        }]
      }],
    page: [
      {
        moduleTitle: '项目',
        moduleData: [
          {
            partData: [
              {
                title: '项目列表',
                path: '/pro/pro-list',
                color:'#96d788',
              },

              {
                title: '项目详细',
                path: '/pro-detail',
                color:'#f5c577',
              },
              {
                title: '基金列表',
                path: 'fund/fund-list',
                color:'#8fb6da',
              },
              {
                title: '基金详细',
                path: 'fund/fund-detail',
                color:'#9ce1d6'}
            ]
          }]
      }],
    report: [
      {
        moduleTitle: '统计分析',
        moduleData: [
          {
            partTitle: '统计分析报表',
            partData: [
              {
                title: '私募产品运行表',
                path: 'http://www.baidu.com',
                color:'#8fb6da'},
              {
                title: '私募股权产品季报',
                path: 'http://www.baidu.com',
                color:'#cce19c'},
              {
                title: '私募股权产品半年报',
                path: 'http://www.baidu.com',
                color:'#e1d59c'},
              {
                title: '私募股权产品年报',
                path: 'http://www.baidu.com',
                color:'#9cd0e1'}
            ]
          },{
            partTitle: '投资项目报表',
            partData: [
              {
                title: '项目一览表',
                path: 'http://www.baidu.com',
                color:'#9cd0e1'},
              {
                title: '投资机会漏斗',
                path: 'http://www.baidu.com',
                color:'#9ce1bc'},
              {
                title: '按项目阶段统计',
                path: 'http://www.baidu.com',
                color:'#b8aee6'},
              {
                title: '按项目投向统计',
                path: 'http://www.baidu.com',
                color:'#f5c577'},
              {
                title: '按项目人员统计',
                path: 'http://www.baidu.com',
                color:'#88dfcd'},
              {
                title: '按人员项目统计',
                path: 'http://www.baidu.com',
                color:'#d1db9c'}
            ]
          },{
            partTitle: '资金动作报表',
            partData: [
              {
                title: '基金运作分析',
                path: 'http://www.baidu.com',
                color:'#a2c7f1'},
              {
                title: '投资项目运作分析',
                path: 'http://www.baidu.com',
                color:'#bca5d1'},
              {
                title: '费用科目报销统计',
                path: 'http://www.baidu.com',
                color:'#dfcdae'},
              {
                title: '基金年度统计',
                path: 'http://www.baidu.com'}
            ]
          }]
      }]
  }


  render() {
    /*首页*/
    const moduleTitleHome=this.state.home[0].moduleTitle
    const moduleDataHome=this.state.home[0].moduleData

    //报表页
    const moduleTitleReport=this.state.report[0].moduleTitle
    const moduleDataReport=this.state.report[0].moduleData

    //其他页面
    const moduleTitlePage=this.state.page[0].moduleTitle
    const moduleDataPage=this.state.page[0].moduleData
    return (
        <>
          {/*首页*/}
          <Row>
            <Col xs={24}>
              <div className="Gutter-box">
                <Linkitem moduleTitle={moduleTitleHome} moduleData={moduleDataHome} />
              </div>
            </Col>
          </Row>

          {/*其他页*/}
          <Row>
            <Col xs={24}>
              <div className="Gutter-box">
                <Linkitem moduleTitle={moduleTitlePage} moduleData={moduleDataPage} />
              </div>
            </Col>
          </Row>

          {/*报表页*/}
          <Row>
            <Col xs={24}>
              <div className="Gutter-box">
                <Linkitem moduleTitle={moduleTitleReport} moduleData={moduleDataReport} />
              </div>
            </Col>
          </Row>
        </>
    );
  }
}


export default Pagelink;