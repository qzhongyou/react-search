import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {Row ,Spin ,Col} from "antd";
class ServceDetail extends Component {
    componentWillMount() {
        const {action, match} =this.props;
        action.loadServiceDetail(match.params.id);
    }

    render() {
        const {serviceDetail, errorMessage} = this.props;
        const {isFetching,service } = serviceDetail;
        if (serviceDetail.isFetching) {
            return (
                <Row className="loading" type="flex" justify="center" align="middle">
                    <Spin tip="Loading..."/>
                </Row>
            )
        }
        return (
            <Row>
                <Col span={6}>
                    <img src={`http://rms.zhubajie.com/resource/redirect?key=${service.image}`} alt={`${service.title}`}/>
                </Col>
                <Col span={18}></Col>
            </Row>
        )
    }
}

export default withRouter(ServceDetail);
