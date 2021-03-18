// ייבוא של ספריות של ריאקט ודום

import React from "react";
import Style from "./Style.css";

class App extends React.Component {
  state = { favoriteColor: "purple" };

  componentDidMount(){
    setTimeout(()=>{
    this.setState({favoriteColor: "blue"})
    } , 1000)
  }
  componentDidUpdate(){
    const cat = document.querySelector("#frodo")
    cat.innerText= `The updated favorite color is ${this.state.favoriteColor}`
  }

  render() {
    return (
      <div>
        <h1>my favorite color is {this.state.favoriteColor}</h1>
        <div id="frodo"></div>
      </div>
    );
  }
}

export default App;
