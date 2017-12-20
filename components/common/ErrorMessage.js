import React, {Component} from 'react';
import {Alert} from "antd";
const  ErrorMessage = (WrappedComponent)=>(props) => {
    const {errorMessage} = props;
    if (errorMessage) {
        return (
            <Alert
                message="Error Message"
                description={errorMessage}
                type="error"
                closable
            />
        );
    }
    return <WrappedComponent {...props}/>
}


export default ErrorMessage;
