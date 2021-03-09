import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {Row,Col} from 'antd'
const noticeNews=[
  {title:'参会培训',time:'2021-03-25',people:'管理员'},
  {title:'年会通知',time:'2021-02-04',people:'李雷阳'},
  {title:'公司组织结构调整',time:'2021-02-05',people:'王明浩'},
  {title:'最新时讯',time:'2021-02-05',people:'王明浩'},
  {title:'公司年度大会通知',time:'2021-01-15',people:'张成新'},
  {title:'年会通知',time:'2021-02-04',people:'李雷阳'},
  {title:'公司组织结构调整',time:'2021-02-05',people:'王明浩'},
  {title:'最新时讯',time:'2021-02-05',people:'王明浩'},
  {title:'公司组织结构调整',time:'2021-02-05',people:'王明浩'}
]

class NoticeNews extends Component {
  render() {
    return (
        <>
          {
            noticeNews.map((newsObj)=>{
              return(
                  <Row key={nanoid()} style={{padding:'10px'}}>
                    <Col xs={12} sm={12}><a href="#">{newsObj.title}</a></Col>
                    <Col xs={8} sm={8} className="TextLight">{newsObj.time}</Col>
                    <Col xs={4} sm={4} className="TextRight TextLight">{newsObj.people}</Col>
                  </Row>
              )
            })
          }
        </>
    );
  }
}

export default NoticeNews;