import React, {Component} from 'react';
import Pagelink from "./components/views/Pagelink";
import HomeGc from "./components/views/Home/HomeGc";//高层首页
import HomePt from "./components/views/Home/HomePt";//普通首页
import HomeFk from "./components/views/Home/HomeFk";//风控首页
import HomeTz from "./components/views/Home/HomTz";//投资首页
import DetailXm from "./components/views/DetailPage/DetailXm";//项目详细
import { Row, Col } from 'antd';
import './index.less'
import {Route,Switch,Redirect} from "react-router-dom";


class App extends Component {

  render() {
    return (
       <div>
         <Row>
           <Col span={24}>
             <div className="Gutter-box">
               <Switch>
               <Route exact  path="/" component={Pagelink}/>
               <Route path="/home/homeGc" component={HomeGc}/>
               <Route path="/home/homePt" component={HomePt}/>
               <Route path="/home/homeFk" component={HomeFk}/>
               <Route path="/home/homeTz" component={HomeTz}/>
               <Route path="/detail/detailXm" component={DetailXm}/>
               <Redirect to="/home/homeGc"/>
               </Switch>
             </div>
           </Col>

         </Row>
       </div>
    );
  }
}

export default App;