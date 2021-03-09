import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
class ChartAnalysis extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      myChart4.resize()
    })
    // 基于准备好的dom，初始化echarts实例
    const myChart4 = echarts.init(document.getElementById('ChartAnalysis'));
    const colorList = ['#8fb6da', '#f5c577', '#96d788', '#f08a7c',
      '#8fcad8', '#626061', '#73d6a2', '#b88fcd', '#E87C25',
      '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
      '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'];
    // const colorList1 = ['#c2e1fa','#abd6f8','#94caf7', '#7dbff5', '#66b4f3'];
    // 绘制图表
    myChart4.setOption({
      tooltip: {
        trigger: 'item'
      },
      legend: {
        data:[],
        top: '5%',
        left: 'center',
        type: 'scroll'
      },
      color: colorList,
      series: [
        {
          name: '所有项目',
          type: 'pie',
          radius: ["45%", "60%"],//控制圆环宽度
          avoidLabelOverlap: false,
          label: {
            show: true,
            position: 'outside',
            formatter: '{b}: {d}',
            fontSize:14
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '14',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            normal: {
              show: true,
              length: 20,
              length2: 20,
              lineStyle: {
                color: '#dbdce4'
              }
            }
          },
          data: [
            {value: 25, name: '能源开采与设备服务'},
            {value: 12, name: '航空运货与物流'},
            {value: 54, name: '综合消费者服务'},
            {value: 14, name: '纺织服装'},
            {value: 3, name: '电网'},
            {value: 5, name: '煤炭'},
            {value: 18, name: '能源'},
            {value: 2, name: '旅游体育与户外运动'}
          ]
        }
      ]
    });
  }
  render() {
    return (
        <div>
          <div id="ChartAnalysis" style={{ width: '100%', height: 400 ,padding:'0 0 0 0',margin:'0 auto'}}></div>
        </div>
    );
  }
}

export default ChartAnalysis;