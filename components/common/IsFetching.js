import React, {Component} from 'react';
import {Row, Spin} from "antd";

const IsFetching = (WrappedComponent)=>(props) => {
    if (props.isFetching) {
        return (
            <Row className="loading" type="flex" justify="center" align="middle">
                <Spin tip="Loading..."/>
            </Row>
        )
    }
    return <WrappedComponent {...props}/>
}

export default IsFetching;
