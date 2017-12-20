import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Spin} from "antd";
import {Link} from "react-router-dom";
import "./services.less"
import  ErrorMessage from "../common/ErrorMessage";

const ServiceItem = ({service}) => (
    <div className="item">
        <div className="img-box">
            <Link to={`/service/${service.id}`}>
                <img alt={`${service.title}`} src={`http://rms.zhubajie.com/resource/redirect?key=${service.image}`}/>
            </Link>
            <Link className="similar" to={`/similar/${service.id}`}>找相似</Link>
        </div>
        <p className="title">
            <Link to={`/service/${service.id}`}>
                {service.title}
            </Link>
        </p>
        <Row className="buy-info">
            <Col span={12}>&yen;{service.price}/{service.unit}</Col>
            <Col className="amount" span={12}>成交量:{service.amount}</Col>
        </Row>
    </div>
)

@ErrorMessage
class Services extends Component {
    static propTypes = {
        services: PropTypes.object.isRequired
    }

    render() {
        const {services} = this.props;
        if (services.isFetching) {
            return (
                <Row className="loading" type="flex" justify="center" align="middle">
                    <Spin tip="Loading..."/>
                </Row>
            )
        }
        return (
            <div>
                < Row gutter={16} className="services">
                    {services.services.map((service, index)=> {
                        return (
                            <Col span={6} key={service.id}>
                                < ServiceItem service={service} / >
                            </Col>
                        )
                        })}
                </Row >
            </div>)
    }
}


export default Services;

