import React from 'react';
import { Icon, Menu } from "antd";
import moment from 'moment'
import { Link } from 'react-router-dom';
//import {paths} from './Sections';

const {SubMenu} = Menu;

const LeftSide = ({ onOpenChange, user, openKeys }) => {

    return (

        <Menu theme="dark"
            mode="inline"
            openKeys={openKeys}
            defaultSelectedKeys={[]}
            defaultOpenKeys={[]}
            onOpenChange={onOpenChange}
        >
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Administration</span></span>}>
                <Menu.Item key="1"> <Link to="/home/activities"/> Activities</Menu.Item>
                <Menu.Item key="2">Outcomes</Menu.Item>
                <Menu.Item key="3">Supplier</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Constructions</span></span>}>
                <Menu.Item key="4">Contractors</Menu.Item>
                <Menu.Item key="5"><Link to="/home/constructions"/> Construction</Menu.Item>
            </SubMenu>
            
            
            
        </Menu>
    )
};

export default LeftSide;