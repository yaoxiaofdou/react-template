import React, { Component } from 'react';
import './App.less';
import { Button } from 'antd';

import ContainerPage from './layouts/container.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContainerPage />
      </div>
    );
  }
}

export default App;