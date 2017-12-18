import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Row ,Spin ,Col ,Alert} from "antd";
import "./serviceDetail.less";
class ServceDetail extends Component {
    componentWillMount() {
        const {action, match} =this.props;
        action.loadServiceDetail(match.params.id);
    }

    render() {
        const {serviceDetail, errorMessage} = this.props;
        const {isFetching,service } = serviceDetail;
        if (isFetching) {
            return (
                <Row className="loading" type="flex" justify="center" align="middle">
                    <Spin tip="Loading..."/>
                </Row>
            )
        }
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
        return (
            <Row className="service-detail" type="flex" justify="space-around">
                <Col span={5}>
                    <img className="service-img" src={`http://rms.zhubajie.com/resource/redirect?key=${service.image}`} alt={`${service.title}`}/>
                </Col>
                <Col span={18}>
                    <h3>{service.title}</h3>
                    <p>服务商:&nbsp;{service.userName}</p>
                    <p className="expertname">服务范围:&nbsp;
                        {service.expertName && service.expertName.map(item=>(<span>{item}</span>))}
                        {service.expertNameNoIncome && service.expertNameNoIncome.map(item=>(<span>{item}</span>))}
                    </p>
                    <p>{service.provinceName}&nbsp;&nbsp;{service.cityName}</p>
                    <Row>
                        <Col span={6}>
                            <p>价格:{service.price}{service.unit?'/'+service.unit:''}</p>
                        </Col>
                        <Col span={12}>
                            <p>成交量:{service.amount}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default withRouter(ServceDetail);
