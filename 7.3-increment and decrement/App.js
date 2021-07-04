
import React from "react";

import Box from "./component/Box";

// הגדרת המשתנה בתוך האפליקציה שלנו
class App extends React.Component{

state = {bit: 0 , color:"blue" }


Plus = ()=>{
this.setState((prevState)=>{
  return {bit:prevState.bit +1}
})
}

Minus = ()=>{
  if (this.state.bit > -10) {
    this.setState((preState)=>{
     return {bit: preState.bit - 1}
    })
  }
}



render(){
 

  return (
    <div className="container">
      <button onClick={this.Plus}>lets increment number</button>
      <button onClick={this.Minus}>lets decrement number</button>
     <label style={{ color: color() }}>{this.state.bit}</label>

    </div>
  )

}



}


// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
export default App;
