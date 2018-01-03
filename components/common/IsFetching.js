import React, {Component} from 'react';
import {Row, Spin} from "antd";

const IsFetching = (props) => {
    if (props.isFetching) {
        return (
            <Row className="loading" type="flex" justify="center" align="middle">
                <Spin tip="Loading..."/>
            </Row>
        )
    } else {
        return false;
    }
}

export default IsFetching;
