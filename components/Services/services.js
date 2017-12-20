import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row , Col  ,Spin ,Alert,DatePicker} from "antd";
import { Link ,Route} from "react-router-dom";
import "./services.less"
import moment from "moment";
const ServiceItem = ({service}) => (
        <div  className="item">
            <div className="img-box">
                <Link to={`/service/${service.id}`}>
                    <img alt={`${service.title}`} src={`http://rms.zhubajie.com/resource/redirect?key=${service.image}`} />
                </Link>
                <Link className ="similar" to= {`/similar/${service.id}`}>找相似</Link>
            </div>
            <p className="title">
                <Link to={`/service/${service.id}`}>
                    {service.title}
                </Link>
            </p>
            <Row className="buy-info">
                <Col span={12}>&yen;{service.price}/{service.unit}</Col>
                <Col className = "amount"  span={12}>成交量:{service.amount}</Col>
            </Row>
        </div>
)




class Services extends Component {
    static propTypes = {
        services: PropTypes.object.isRequired,
        errorMessage: PropTypes.string.isRequired
    }

    componentWillMount() {
        this.props.action(this.props.date);
    }

    componentWillReceiveProps(nextProps){
        //找相似页面(暂时)
        if(nextProps.id !== this.props.id){
            this.props.action();
        }
        //我的足迹页(暂时)
        if(nextProps.date !== this.props.date && nextProps.date !==""){
            this.props.action(nextProps.date);
        }
    }


    render() {
    const {services, errorMessage ,date ,selectDate} = this.props;
    const dateFormat ='YYYYMMDD';
    if (services.isFetching) {
            return (
                <Row className="loading" type="flex"  justify="center"  align="middle">
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
            <div>
                <Route path="/" exact render={()=>{ //首页显示
                    return  <DatePicker defaultValue={moment(date, dateFormat)} format={dateFormat} onChange ={selectDate} />
                }} />
                < Row  gutter={16} className="services">
                {services.services.map((service,index)=> {
                    return (
                        <Col span={6} key = {service.id}>
                            < ServiceItem service = {service} / >
                        </Col>
                            )
                    })}
                </Row >
            </div>)
    }
}

export default Services;
