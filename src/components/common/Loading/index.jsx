import React, {Component} from 'react';
import { Spin } from 'antd';

class Loading extends Component {
  state={ divStyle :{
    background: 'rgba(0,0,0,.05)',
    fontSize: '32px',
    padding: '50px'
  }}

  render() {
    return(
        <div className="loading">
          <Spin style={this.state.divStyle} tip="Loading..."></Spin>
        </div>
    )
  }
}

export default Loading;