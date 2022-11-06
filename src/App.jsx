import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <App
          src="https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187__340.jpg"
          title="New Apartment Nice Wiev"
          title2="Quincy ST, Brooklyn, NY, USA"
          title3="$2,800/mo"
          // title4="$7500/mo"
        />

        <App
          src="https://cdn.pixabay.com/photo/2016/12/30/07/59/kitchen-1940174__340.jpg"
          title="New Apartment Nice Wiev"
          title2="Quincy ST, Brooklyn, NY, USA"
          title3="$2,800/mo"
          title4="$7500/mo"
        />

        <App
          src="https://cdn.pixabay.com/photo/2017/08/27/10/16/interior-2685521__340.jpg"
          title="New Apartment Nice Wiev"
          title2="Quincy ST, Brooklyn, NY, USA"
          title3="$2,800/mo"
          title4="$7500/mo"
        />
      </div>
    );
  }
}

export default App;
