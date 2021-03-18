

// ייבוא של ספריות של ריאקט ודום

import React from "react";



// import Cards from "./component/cards"


       class App extends React.Component {
        state = { counter: 0}
        BtnClick = () => {
          console.log("hello");
          this.setState({counter: this.state.counter + 1} ,()=>{
            console.log(this.state.counter);
          });
        } ;
        render(){
          return(
            <div>
              <button onClick={this.BtnClick}>click now</button>
               <div>{this.state.counter}</div>
            </div>
          );
          
        }

       };

export default App;
