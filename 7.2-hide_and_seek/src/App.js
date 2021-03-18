

// ייבוא של ספריות של ריאקט ודום

import React from "react";
import Style from "./Style.css";
// import Box from "./component/box";





       class App extends React.Component {
        state = { Counter: "true"}
        BtnClick = () => {
          this.setState((state)=> 
          ({Counter: !this.state.Counter})
        ,)}
       
        

          
      
        render() {
          return(
            <div className="container">
              <button onClick={this.BtnClick}>change</button>
                {this.state.Counter? <div className="box" ></div> : "try again"} 
            </div>
          );
          
        }}

       

export default App;
