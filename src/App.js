import React from "react";
import Displaytry from "./Components/Displaytry";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "kathmandu",
      unit: "metric",
      temp_unit: "°C",
      button_unit: "°F",
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.city == "") {
      alert("The field is empty!!");
      return false;
    } else {
      return true;
    }
  }
  updateCity = () => {
    const city = document.getElementById("city-name").value;
    this.setState({ city: city });
  };
  changeUnit = () => {
    if (this.state.unit == "metric") {
      this.setState({ unit: "imperial", temp_unit: "°F", button_unit: "°C" });
    } else {
      this.setState({ unit: "metric", temp_unit: "°C", button_unit: "°F" });
    }
  };
  render() {
    return (
      <div>
        <div className="inputfield">
          <div className="inputChild">
            <input
              type="text"
              name="cityname"
              id="city-name"
              placeholder="Enter city name"
            />
            <button onClick={this.updateCity} className="btn botton">
              Search
            </button>
            <button onClick={this.changeUnit} className="btn-unit botton">
              {this.state.button_unit}
            </button>
          </div>
        </div>
        <Displaytry
          cityname={this.state.city}
          unit={this.state.unit}
          tempUnit={this.state.temp_unit}
        />
      </div>
    );
  }
}
export default App;
