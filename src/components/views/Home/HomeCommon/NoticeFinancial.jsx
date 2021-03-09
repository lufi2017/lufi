import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {Row,Col} from 'antd'
const noticeFinancial=[
  {title:'传奇文化',time:'2021-03-25',people:'管理员'},
  {title:'紫光新源',time:'2021-02-04',people:'李雷阳'},
  {title:'泯还纸业',time:'2021-02-05',people:'王明浩'},
  {title:'飞迅通信股',time:'2021-02-05',people:'王明浩'},
  {title:'青原化工股',time:'2021-01-15',people:'张成新'},
  {title:'泯还纸业',time:'2021-02-05',people:'王明浩'},
  {title:'飞迅通信股',time:'2021-02-05',people:'王明浩'},
  {title:'青原化工股',time:'2021-01-15',people:'张成新'},
  {title:'飞迅通信股',time:'2021-02-05',people:'王明浩'}
]

class NoticeFinancial extends Component {
  render() {
    return (
        <>
          {
            noticeFinancial.map((financialObj)=>{
              return(
                  <Row key={nanoid()} style={{padding:'10px'}}>
                    <Col xs={12} sm={12}><a href="#">{financialObj.title}</a></Col>
                    <Col xs={8} sm={8} className="TextLight">{financialObj.time}</Col>
                    <Col xs={4} sm={4} className="TextRight TextLight">{financialObj.people}</Col>
                  </Row>
              )
            })
          }
        </>
    );
  }
}

export default NoticeFinancial;