import React, {Component} from 'react';
import {Steps ,Popover } from 'antd';
import {nanoid} from 'nanoid'

const { Step } = Steps;
const customDot = (dot, { status, index }) => (
    <Popover
        content={<span>step {index} status: {status}</span>}>
      {dot}
    </Popover>
);


class StepBar extends Component {
  render() {
    const {current,stepData} = this.props
    return (
        <>
          <Steps size="large" current={current}  >
            {
              stepData.map((stepObj)=>{
                return(
                    <Step key={nanoid()} title={stepObj.title}  description={stepObj.description}  />
                )
              })
            }
          </Steps>
        </>
    );
  }
}

export default StepBar;