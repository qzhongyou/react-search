import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Routes from "../route/index";
import DevTools from './DevTools';
import {Row,Col} from "antd";
class Root extends Component {
  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <div>
          <Row type="flex" justify="center">
            <Col span="18">
              <Routes />
              <DevTools />
            </Col>
          </Row>
        </div>
      </Provider>
    );
  }
}

export default Root;
