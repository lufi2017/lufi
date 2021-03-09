import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
class ChartFof extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      myChart2.resize()
    })
    // 基于准备好的dom，初始化echarts实例
    const myChart2 = echarts.init(document.getElementById('ChartFof'));
    const colorList = ['#8fb6da', '#f5c577', '#96d788', '#f08a7c',
      '#8fcad8', '#626061', '#73d6a2', '#b88fcd', '#E87C25',
      '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
      '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'];
    // const colorList1 = ['#c2e1fa','#abd6f8','#94caf7', '#7dbff5', '#66b4f3'];
    // 绘制图表
    myChart2.setOption({
      title: { text: '' },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['立项', '尽调', '投资', '投决', '投资', '投后', '退出']
      },
      yAxis: {
        type: 'value'
      },
      color: colorList,
      series: [{
        data: [12, 6, 15, 9, 3, 1, 17],
        type: 'bar',
        barWidth : 30
      }]
    });
  }
  render() {
    return (
        <div>
          <div id="ChartFof" style={{ width: '100%', height: 400 ,padding:'0 0 0 0',margin:'0 auto'}}></div>
        </div>
    );
  }
}

export default ChartFof;