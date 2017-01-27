import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {
    return (<Routes/>);
  }

}

console.log("wena");

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}


/*ReactDOM.render(
  <App />,
  document.getElementById('app')
);*/

export default App;

