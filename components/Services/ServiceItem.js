import React, {Component} from 'react';
import {Row, Col} from "antd";
import {Link} from "react-router-dom";
import "./ServiceItem.less";

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

export  default ServiceItem;
