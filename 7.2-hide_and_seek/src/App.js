

// ייבוא של ספריות של ריאקט ודום

import React from "react";
import Style from "./Style.css";
// import Box from "./component/box";


// הגדרת המשתנה בתוך האפליקציה שלנו
class App extends React.Component{

state = {bit: false}


Bingo = ()=>{
this.setState((state)=>({bit: !this.state.bit}),)
}

render(){
  return (
    <div className="container">
      <button onClick={this.Bingo}>color</button>
     {this.state.bit? <div className="box"></div>:"try again"}

    </div>
  )

}



}


// קישור של המשתנה שהגדרנו לקובץ
// שיציג אותו בתוך הדיב של
// רוט
export default App;
