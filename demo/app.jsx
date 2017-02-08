import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import '../src/styles/index.less';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<Routes/>);
  }

}

export default App;