import React, {Component} from 'react';
import Pagelink from "./components/views/Pagelink";
import HomeGc from "./components/views/Home/HomeGc";
import HomePt from "./components/views/Home/HomePt";
import HomeFk from "./components/views/Home/HomeFk";
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