// ייבוא של ספריות של ריאקט ודום

import React from "react";
import "./Style.css";
import Spinner from "./component/Spinner";

class App extends React.Component {
  state = { spinner: undefined };

  componentDidMount() {
    setTimeout(() => {
      this.setState({ spinner: "off" });
    }, 4000);
  }
  componentDidUpdate() {}

  render() {
    return (
      <div className={this.state.spinner}>
        <Spinner />
      </div>
    );
  }
}

export default App;


