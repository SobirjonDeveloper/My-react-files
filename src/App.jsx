import React from "react";
import Hih from "./house";
import "./style.css";

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="wrapper">
        <Hih
          title="New Apartment Nice Wiev"
          title2="Quincy ST, Brooklyn, NY,"
          title3="$2,800/mo"
          title4="$7500/mo"
        />
        <Hih
          title="New Apartment Nice Wiev"
          title2="Quincy ST, Brooklyn, NY,"
          title3="$2,800/mo"
          title4="$7500/mo"
        />
      </div>
    );
  }
}

export default App;
