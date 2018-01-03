import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {List, Avatar} from "antd";
import "./WitkeyList.less"
import  ErrorMessage from "../common/ErrorMessage";
import IsFetching from "../common/IsFetching";


const avatar = (uid, size) => {
    if (!uid) return 'http://t4.zbjimg.com/r/p/task/48.gif';

    var maxIUserid = "000000000" + uid,
        iUserid = maxIUserid.substr(maxIUserid.length - 9, 9),
        sImgUrl;

    size = size || 'small';

    sImgUrl = 'http://avatar.zbjimg.com/'
        + iUserid.substr(0, 3)
        + '/' + iUserid.substr(3, 2)
        + '/' + iUserid.substr(5, 2)
        + '/200x200_avatar_'
        + iUserid.substr(7, 2) + '.jpg!' + size;

    return sImgUrl;
};

@ErrorMessage
@IsFetching
class WitkeyList extends Component {
    static propTypes = {
        witkeys: PropTypes.object.isRequired
    }

    render() {
        const {witkeys} = this.props;
        return (
            <List className="witkey"
                  itemLayout="vertical"
                  size="large"
                  dataSource={witkeys.witkeys}
                  renderItem={item => (
                      <List.Item
                          key={item.title}
                          extra={<img width={180} alt="logo" src={avatar(item.id, "big")}/>}
                      >
                          <List.Item.Meta
                              avatar={<Avatar src={avatar(item.id, "big")}/>}
                              title={item.brandName}
                              description={item.address}
                          />

                          <p>
                              主营类目:{item.expertName && item.expertName[0]}
                          </p>

                          <p className="service-expertname">
                              服务范围:
                              {item.expertName && item.expertName.map(expertName=> {
                                  return <span key={expertName}>{expertName}</span>
                              }) }
                          </p>

                      </List.Item>
                  )}
            />
        )
    }
}

export default WitkeyList;
