import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/grid'
import 'echarts/lib/chart/bar'
import  '../../../../utils/china.js'
class ChartRegional extends Component {

    componentDidMount() {
      window.addEventListener('resize', () => {
        myChart5.resize()
      })
      const myChart5 = echarts.init(document.getElementById('ChartRegional'));


      const data={"map3":{"上海":"22.25%","福建":"13.26%","广东":"2.91%","浙江":"6.01%","北京":"4.39%","四川":"4.39%"},"max":6,
        "map2":{"上海":"18500.00","福建":"11027.70","广东":"2417.85","浙江":"5000.00","北京":"3653.01","四川":"3653.01"},
        "map4":{"上海":"A","福建":"A","广东":"A","浙江":"A","北京":"A","四川":"A"},
        "seriesdata":[{"name":"上海","value":"2"},{"name":"北京","value":"4"},{"name":"广东","value":"1"},{"name":"浙江","value":"1"},{"name":"福建","value":"6"},{"name":"四川","value":"6"}]
      };
      const seriesdata= data.seriesdata;
      const max=data.max;
      const map2=data.map2;
      const map3=data.map3;
      const map4=data.map4;

      const option = {
        tooltip: {
          trigger: 'item',
          formatter: function (params, ticket, callback) {
            var name=params.name;
            for(var key in map2){
              if(key==name){
                return name+'('+map4[key]+')'+'</br>项目数量：'+params.value+'</br>投资金额：'+(map2[key])+'(万元)</br>投资占比：'+map3[key];
              }
            }
            return '-';
          }
        },
        dataRange: {
          orient: 'horizontal',
          min: 0,
          max: 55000,
          text: ['高', '低'], // 文本，默认为数值文本
          splitNumber: 0,
          color: ['#F3A43B','#f5c577','#73d6a2', '#eeeeee', '#eeeeee',],
        },
        series: [
          {
            name: '项目数量',
            type: 'map',
            map: 'china', // 自定义扩展图表类型
            roam: true,//是否开启鼠标缩放和平移漫游
            zoom: 1.2,   //这里是关键，一定要放在 series中
            mapLocation: {
              x: 'center',
            },
            // selectedMode: 'multiple',

            itemStyle: {
              normal: { label: { show: true, color: '#638ca6' }, borderWidth: 1,borderColor:'#777777' },
              // emphasis: { label: { show: true } },
              // borderWidth: 0,
              // borderColor: '#eee',
            },
            emphasis:{//是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
              label:{show:true}
            },

            data: [
              { name: '西藏', value: 12 },
              { name: '青海', value: 25 },
              { name: '宁夏', value: 45 },
              { name: '海南', value: 22 },
              { name: '甘肃', value: 45 },
              { name: '贵州', value: 48 },
              { name: '新疆', value: 12 },
              { name: '云南', value: 45 },
              { name: '重庆', value: 0 },
              { name: '吉林', value: 1 },
              { name: '山西', value: 6 },
              { name: '天津', value: 2 },
              { name: '江西', value: 4 },
              { name: '广西', value: 5 },
              { name: '陕西', value: 0 },
              { name: '黑龙江', value: 0 },
              { name: '内蒙古', value: 0 },
              { name: '安徽', value: 0 },
              { name: '北京', value: 52, selected: true },
              { name: '福建', value: 12 },
              { name: '上海', value: 45, selected: true },
              { name: '湖北', value: 19632 },
              { name: '湖南', value: 19669 },
              { name: '四川', value: 21026 },
              { name: '辽宁', value: 22226 },
              { name: '河北', value: 24515 },
              { name: '河南', value: 26931 },
              { name: '浙江', value: 32318 },
              { name: '山东', value: 45361 },
              { name: '江苏', value: 49110 },
              { name: '广东', value: 53218, selected: true },
            ],
          },
        ],
        animation: false,
      };
      myChart5.setOption(option, true);
  }



  render() {
    const {id}=this.props
    console.log(id)
    return (
        <div id="ChartRegional"  style={{width:'600px', height: '400px' ,margin:'0 auto'}}></div>
    );
  }
}

export default ChartRegional;