import React, {Component} from 'react';
class BasicInfoXm extends Component {
  render() {
    return (
        <>
          <div className="GridRoot-root GridNormalRoot-root" >
            <div className="Table-content">
              <div className="StickyItem-root">
                <table className="Table-root">
                  <tbody className="TableBody-root">
                  <tr>
                    <td className="TextBold TextRight">项目编号：</td>
                    <td>SW20201254</td>
                    <td className="TextBold TextRight">项目全称：</td>
                    <td>XXX项目</td>
                  </tr>
                  <tr>
                    <td className="TextBold TextRight">基金简称：</td>
                    <td>XXXX项目</td>
                    <td className="TextBold TextRight">项目分类：</td>
                    <td>公司项目</td>
                  </tr>
                  <tr>
                    <td className="TextBold TextRight">项目来源：</td>
                    <td>公司</td>
                    <td className="TextBold TextRight">所属板块：</td>
                    <td>医疗健康</td>
                  </tr>
                  <tr>
                    <td className="TextBold TextRight">产业环节：</td>
                    <td>XXX</td>
                    <td className="TextBold TextRight">考察时间：</td>
                    <td>2021-01-02</td>
                  </tr>
                  <tr>
                    <td className="TextBold TextRight">考察形式：</td>
                    <td>现场拜访</td>
                    <td className="TextBold TextRight">考察人员：</td>
                    <td>李一</td>
                  </tr>
                  <tr>
                    <td className="TextBold TextRight">项目所在地：</td>
                    <td>武汉</td>
                    <td className="TextBold TextRight"></td>
                    <td></td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </>
    )
  }
}

export default BasicInfoXm;