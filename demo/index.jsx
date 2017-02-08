import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import { AppContainer } from 'react-hot-loader';
import App from './app';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer key={Math.random()}>
      <Component/>
    </AppContainer>,
    document.getElementById('app')
  );
};

render(App);


if (module.hot) {
  module.hot.accept('./app', () => {
    render(<App />)
  })
}

