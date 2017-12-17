import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Route from "../route/index";
export default class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <Route />
      </Provider>
    );
  }
}
