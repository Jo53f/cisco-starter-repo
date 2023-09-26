import React, {Component} from 'react';
import './App.css';
import Banner from './Banner';
import Card from './Card';
import IP from './ReturnIP';
import Latency from './GetLatency';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner name="Sextant"></Banner>
        <div className='Body'>
          <Card name='IPv4 Address'>
            <IP url='https://api.ipify.org?format=json'/>
          </Card>
          <Card name='IPv6 Address'>
            <IP url ='https://api64.ipify.org?format=json'/>
          </Card>
          <Card name='Latency'>
            <Latency/>
          </Card>
        </div>
      </div>
    )
  }
}

export default App;
