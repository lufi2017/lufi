import React, {Component} from 'react';
import {nanoid} from 'nanoid'
import {Col, Row} from "antd";
const processUndo=[
  {title:'项目投决流程',time:'2021-03-25',people:'管理员'},
  {title:'备案申请流程',time:'2021-02-04',people:'李雷'},
  {title:'项目立项申请',time:'2021-02-05',people:'王明浩'},
  {title:'项目立项申请',time:'2021-02-05',people:'王明浩'},
  {title:'投资协议申请',time:'2021-01-15',people:'张成新'},
  {title:'项目立项申请',time:'2021-02-05',people:'刘灿一'},
  {title:'项目立项申请',time:'2021-02-05',people:'王辉亮'},
  {title:'投资协议申请',time:'2021-01-15',people:'李娜娜'},
  {title:'项目立项申请',time:'2021-02-05',people:'刘同知'}
]

class ProcessUndo extends Component {
  render() {
    return (
        <>
          {
            processUndo.map((processObj)=>{
              return(
                  <Row key={nanoid()} style={{padding:'10px'}}>
                    <Col xs={12} sm={12}><a href="#">{processObj.title}</a></Col>
                    <Col xs={8} sm={8} className="TextLight">{processObj.time}</Col>
                    <Col xs={4} sm={4} className="TextRight TextLight">{processObj.people}</Col>
                  </Row>
              )
            })
          }
        </>
    );
  }
}

export default ProcessUndo;