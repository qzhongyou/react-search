import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from "../route/index";
import DevTools from './DevTools';
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Route />
          <DevTools />
        </div>
      </Provider>
    );
  }
}
