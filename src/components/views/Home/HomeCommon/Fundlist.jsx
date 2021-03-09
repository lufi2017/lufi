import React, {Component} from 'react';
import axios from "axios";
import {nanoid} from "nanoid";

class Fundlist extends Component {

  state={
    tablecolumn:[],
    tabledata:[]
  }

  componentDidMount() {
      axios.get('/json/datasourseJJ.json').then(
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
                            <td>{dataObj.JJZT}</td>
                            <td>{dataObj.JJBH}</td>
                            <td>{dataObj.JJLX}</td>
                            <td>{dataObj.JJJC}</td>
                            <td>{dataObj.JJQC}</td>
                            <td>{dataObj.JJGM}</td>
                            <td>{dataObj.CXQX}</td>
                            <td>{dataObj.BAWCSJ}</td>
                            <td>{dataObj.JJGLR}</td>
                            <td>{dataObj.GLXYQSSJ}</td>
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

export default Fundlist;