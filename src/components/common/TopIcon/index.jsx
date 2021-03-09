import React, {Component} from 'react';
import {Col, Row} from "antd";
import {nanoid} from "nanoid";
import './index.less'
class TopIcon extends Component {

  render() {
    const {icondata}=this.props
    return (
        <Row>
          {
            icondata.map((iconObj) => {
              return (
                  <Col key={nanoid()} xs={24} sm={12} md={8} lg={6} xl={4} xxl={4}>
                    <div className="Gutter-box ">
                      <div className="i-iconbox">
                        <div className="icon" style={{background:`${iconObj.color}`}}><i className={iconObj.iconClassName}/></div>
                        <a href="#" target="_blank" rel="noreferrer">
                          <div className="text">{iconObj.title}
                            <div className="number" style={{color:`${iconObj.color}`}}>{iconObj.num}</div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </Col>
              )
            })
          }

        </Row>
    );
  }
}

export default TopIcon;