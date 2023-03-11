import React from "react";
class Displaytry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: "4d866ccd787b74e8553c342ca38f1e8d",
      data: null,
      isLoading: true,
      isUnit: true,
      
    };
  }

  componentDidMount() {
    this.fetchData();
  }
//   fetchData() {
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityname}&units=${this.props.unit}&appid=${this.state.key}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         this.setState({ data: data, isLoading: false }, () => {
//           console.log(this.state.data);
//         });
//       }).catch((error)=>alert(error))
//   }
  //try
  fetchData = async () => {
    try {
      const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${this.props.cityname}&units=${this.props.unit}&appid=${this.state.key}`);
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Data not found');
        } else {
          throw new Error('Network response was not ok');
        }
      }
      const json = await response.json();
      this.setState({ data: json,isLoading: false });
    } catch (error) {
        alert("Data not found");
        console.error(error.message);
    }
  };


  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cityname !== this.props.cityname) {
      this.fetchData();
    }
    if (prevProps.unit !== this.props.unit) {
      this.fetchData();
    }
  }

  render() {
    if (!this.state.isLoading) {
      const { main, weather, name } = this.state.data;
      return (
        <div className="displayfield">
          <div className="displayChild">
            <h1>Weather in {name}</h1>
            <div className="temp">
              Temperature:{main.temp}
              {this.props.tempUnit}
            </div>
            <div className="desc">Description:{weather[0].description}</div>
          </div>
        </div>
      );
    }
    return <h1 className="loading">Loading...</h1>;
  }
}

export default Displaytry;
