import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import ReactEcharts from 'echarts-for-react'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'


class ChartFunnel extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      myChart3.resize()
    })
    // 基于准备好的dom，初始化echarts实例
    const myChart3 = echarts.init(document.getElementById('ChartFunnel'));
    // const colorList = ['#8fb6da', '#f5c577', '#96d788', '#f08a7c',
    //   '#8fcad8', '#626061', '#73d6a2', '#b88fcd', '#E87C25',
    //   '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD',
    //   '#D7504B', '#C6E579', '#F4E001', '#F0805A', '#26C0C0'];
    const colorList1 = ['#c2e1fa','#abd6f8','#94caf7', '#7dbff5', '#66b4f3'];
    // 绘制图表
    myChart3.setOption({
      title: {
        text: '',
        subtext: ''
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {d}%"
      },
      toolbox: {
        feature: {
          dataView: {readOnly: false},
          restore: {},
          saveAsImage: {}
        }
      },
      color: colorList1,
      legend: {
        data: ['储备项目','立项项目','尽调项目','投决项目','投资项目']
      },


      series: [
        {
          name:'投资机会',
          type:'funnel',
          left: '10%',
          top: 60,
          //x2: 80,
          bottom: 60,
          width: '80%',
          // height: {totalHeight} - y - y2,
          min: 0,
          max: 100,
          minSize: '0%',
          maxSize: '100%',
          sort: 'descending',
          gap: 2,
          label: {
            show: true,
            position: 'inside',
            fontSize:14
          },
          labelLine: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          },
          itemStyle: {
            borderColor: '#fff',
            borderWidth: 1
          },
          emphasis: {
            label: {
              fontSize: 16
            }
          },
          data: [
            {value: 20, name: '投资项目'},
            {value: 40, name: '投决项目'},
            {value: 60, name: '尽调项目'},
            {value: 80, name: '立项项目'},
            {value: 100, name: '储备项目'}
          ]
        }
      ]
    });
  }
  render() {
    return (
        <div id="ChartFunnel" style={{ width: '100%', height: 400 ,padding:'10px 0 0 0',margin:'0 auto'}}></div>
    );
  }
}

export default ChartFunnel;