import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Card from './Card';
import IP from './ReturnIP';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner name="Sextant"></Banner>
        <div className='Body'>
          <Card name='Throughput'></Card>
          <Card name='IPv4 Address'>
              <IP url ='https://api.ipify.org?format=json'/>
          </Card>
        </div>
      </div>
    )
  }
}

export default App;
