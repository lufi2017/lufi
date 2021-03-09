import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import {nanoid} from "nanoid";
import {
  Card,
  Row,
  Col
} from 'antd';
import {
  SafetyCertificateOutlined,
  DoubleRightOutlined} from '@ant-design/icons';
import './index.less'

class Linkitem extends Component {
  componentDidMount() {

  }
  changePage =()=>{

  }


  render() {
    const {moduleData,moduleTitle}=this.props
    return (
        <div>
          <Card title={moduleTitle} >
              {
                moduleData.map((mitemObj)=>{
                  const itemarr =mitemObj.partData.map((pitemObja)=>{
                    return(

                        <Col xs={12}  sm={12} md={8} lg={6} xl={4} xxl={3} key={nanoid()}>
                          {/*<div className="iconbox-root" onClick={this.changePage} target="_blank" rel="noreferrer">*/}
                          <Link to={pitemObja.path}>
                            <div className="iconbox-root">
                            <div className="icon-wrap" >
                              <div className="iconbox"  style={{background:`${pitemObja.color}`}} >
                                <div className="icon"><SafetyCertificateOutlined /></div>
                              </div>
                            </div>
                            <div className="textbox">{pitemObja.title}</div>
                            </div>
                          </Link>
                          {/*</div>*/}
                        </Col>
                    )
                  })
                  return(
                      <Row key={nanoid()}>
                        <Col xs={24} style={{display:mitemObj.partTitle ? 'block':'none'}}><div className="parttitle"><DoubleRightOutlined />{mitemObj.partTitle}</div></Col>
                        {itemarr}
                      </Row>
                  )
                })
              }
          </Card>



        </div>
    );
  }
}


export default Linkitem;