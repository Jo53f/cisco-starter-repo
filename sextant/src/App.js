import React, {Component} from 'react';
import './App.css';

function Banner(props){
  return (
    <div className='App-banner'>
      <p>Welcome to, {props.name}</p>
    </div>
    )
}

function Card(props){
  return(
    <div className='Card'>
      <header>{props.name}</header>
      <p>network information</p>
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner name="Sextant"></Banner>
        <div className='Body'>
          <Card name="Throughput"></Card>
          <Card name="Ping"></Card>
          <Card name="Devices"></Card>
          <Card name="Devices"></Card>
          <Card name="Devices"></Card>
          <Card name="Devices"></Card>
          <Card name="Devices"></Card>
          <Card name="Devices"></Card>
        </div>
      </div>
    )
  }
}

export default App;
