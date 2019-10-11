import React, { Component } from 'react';
import './Header.css';
import Sun from '../assets/sunny.png';
import axios from 'axios';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      weather: ''
    }
  }

  componentDidMount() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?id=5317058', {
      params: {
        units: 'imperial',
        APPID: 'dd7be2bbca968cd1f68c6e5500bdda0d'
      }
    })
    .then(response => {
      this.setState({ weather: response.data.main.temp, name: response.data.name});
      
    })
    .catch(error => {
      console.log(error)
    });
  }

render() {
    return (
      <nav className="header-bar">
        <div className="weather">
          <p className="header-bar-list-item">{this.state.name}, {Math.floor(this.state.weather)}&deg; </p>
          <img src={Sun} alt="Icon of a sun" className="header-bar-list-item image"/>
        </div>
      </nav>
    );
  };
}
 

export default Header;