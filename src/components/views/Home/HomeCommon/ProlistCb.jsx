import React, {Component} from 'react';
import axios from "axios";
import {nanoid} from "nanoid";

class ProlistCb extends Component {

  state={
    tablecolumn:[],
    tabledata:[]
  }

  componentDidMount() {
      axios.get('/json/datasourseXM.json').then(
          response=>{
            //请求成功后通知APP更新状态
            this.setState({tabledata:response.data.tabledata})
            this.setState({tablecolumn:response.data.tablecolumn})
          },
          error=>{
            //请求失败后通知APP更新状态
            console.log(error)
          }
      )
  }

  render() {
    const {tablecolumn,tabledata}=this.state
    return (
        <div>
          <div className="GridRoot-root">
            <div className="Table-content">
              <div className="StickyItem-root">
                <table className="Table-root">
                  <thead className="TableHead-root">
                  <tr>
                    {
                      tablecolumn.map((headerObj)=>{
                        return(
                            <th key={nanoid()}>{headerObj}</th>
                        )

                      })
                    }
                  </tr>
                  </thead>
                  <tbody className="TableBody-root">
                    {
                      tabledata.map((dataObj)=>{
                        return(
                          <tr key={nanoid()}>
                            <td>{dataObj.XMBH}</td>
                            <td>{dataObj.XMMC}</td>
                            <td>{dataObj.XMLX}</td>
                            <td>{dataObj.SSTX}</td>
                            <td>{dataObj.SSQY}</td>
                            <td>{dataObj.XMFGS}</td>
                            <td>{dataObj.SSHY}</td>
                            <td>{dataObj.TZJD}</td>
                            <td>{dataObj.ZXJD}</td>
                            <td>{dataObj.XMJL}</td>
                            <td>{dataObj.THFZR}</td>
                            <td>{dataObj.XYJE}</td>
                            <td>{dataObj.YTJE}</td>
                            <td>{dataObj.SYJE}</td>
                            <td>{dataObj.FYJE}</td>
                            <td>{dataObj.DJSJ}</td>
                            <td>{dataObj.DJR}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default ProlistCb;