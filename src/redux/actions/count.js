// 该文件专门为count组件生成action对象
import {INCREMENT,DECREMENT} from '../constant'
//同步的action，就是指action的值 为object类型的一般对象
export const increment=data=>({type:INCREMENT,data})
export const decrement=data=>({type:DECREMENT,data})

//异步的action，就是指action的值 为函数,异步action中一般都会调用同步action，异步action不是必须的
export const incrementAsync=(data,time)=>{
  return (dispatch)=>{
    setTimeout(()=>{
      dispatch(increment(data))
    },time)
  }
}



