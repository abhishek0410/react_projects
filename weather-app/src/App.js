import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";
import axios from "axios";

const API_KEY = "65a87af5629f3d34c5566cbdb955e876";
var city = "Manchester";
var country = "London";

class App extends Component {
  state = {
    temp: "",
    pressure: "",
    humidity: ""
  };

  getWeather = async e => {
    console.log("Submit button clicked");
    e.preventDefault();
    const api_call = axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
      )
      .then(response => {
        console.log(" Hello" + response.data.main.temp);
        console.log(Object.keys(response.data.main));
        const { temp, pressure, humidity } = response.data.main;
        this.setState({ temp, pressure, humidity });
      });
    //;
  };
  handleonChange = (e, name) => {
    if (e.currentTarget.name === "city") {
      city = e.currentTarget.value;
    } else {
      country = e.currentTarget.value;
    }
  };

  render() {
    const { temp, pressure, humidity } = this.state;
    return (
      <div>
        <Titles />
        <Form
          getWeather={this.getWeather}
          handleonChange={this.handleonChange}
        />
        <Weather temp={temp} pressure={pressure} humidity={humidity} />
      </div>
    );
  }
}

export default App;
