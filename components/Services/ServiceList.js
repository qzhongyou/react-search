import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from "antd";
import ServiceItem from "./ServiceItem";

class ServiceList extends Component {
    static propTypes = {
        services: PropTypes.object.isRequired
    }

    render() {
        const {services} = this.props;
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


export default ServiceList;

