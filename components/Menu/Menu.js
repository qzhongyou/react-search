import {Menu} from "antd";
import {Link, Route} from "react-router-dom";
import React from "react";
export default  ({selectedkeys}) => {
    return (
        <Menu mode="horizontal" style={{marginBottom: 10}} selectedKeys={[selectedkeys]}>
            <Menu.Item key="/">
                <Link to="/">我的足迹</Link>
            </Menu.Item>
            <Menu.Item key="/exclusive">
                <Link to="/exclusive">专属服务商</Link>
            </Menu.Item>
            {/*防止key值重复*/}
            { ["/", "/exclusive"].indexOf(selectedkeys) < 0 &&
            <Menu.Item key={selectedkeys}>
                <Route path="/similar/:id" render={()=>(
                    <Link to={selectedkeys}>找相似</Link>
                )}/>
                <Route path="/service/:id" render={()=>(
                    <Link to={selectedkeys}>服务详情</Link>
                )}/>
            </Menu.Item>
            }
        </Menu>
    )

}
