/*该文件专门用于暴露一个store对象，整个应用只有一个store对象*/
//引入createStore，专门用于创建redux中最为核心的store对象
import {createStore,applyMiddleware} from 'redux'
//引入汇总之后的reducer
import reducer from './reducers'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'


//引入redux-thunk用于支持异步action
import thunk from "redux-thunk";

//暴露
export default createStore(reducer,composeWithDevTools(applyMiddleware(thunk)))