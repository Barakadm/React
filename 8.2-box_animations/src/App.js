// ייבוא של ספריות של ריאקט ודום

import React from "react";
import "./Style.css";
import Box from "./component/Box";

class App extends React.Component {
  state = { box: undefined };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        box: (
          <div>
            <Box width="70px" height="70px" />
            <Box width="100px" height="100px" />
            <Box width="170px" height="170px" />
          </div>
        ),
      });
    }, 1000);
  }
  componentDidUpdate() {
    setTimeout(() => {
      this.setState({ box: undefined });
    }, 4000);
  }

  render(props) {
    return <div className="container">{this.state.box}</div>;
  }
}

export default App;

{
  /* <Box width="100px" height="100px" />
<Box width="70px" height="70px" />
<Box width="170px" height="170px" /> */
}
