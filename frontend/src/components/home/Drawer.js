import React from 'react';
import {Icon, Menu} from "antd";
import moment from 'moment'
import {Link} from 'react-router-dom';
//import {paths} from './Sections';

const SubMenu = Menu.SubMenu;

const LeftSide = ({onOpenChange, user, openKeys,companys,getBalance,activos}) => {

    return (

        <Menu theme="dark"
    mode="inline"
    openKeys={openKeys}
    defaultSelectedKeys={[]}
    defaultOpenKeys={[]}
    onOpenChange={onOpenChange}
    >
        <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Construcciones</span></span>}>
            
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="mail" /><span>Rubros</span></span>}>
            
        </SubMenu>
        <SubMenu key="sub3" title={<span><Icon type="mail" /><span>Actividades</span></span>}>
            
        </SubMenu>
        <SubMenu key="sub4" title={<span><Icon type="mail" /><span>Proveedores</span></span>}>
            
            </SubMenu>
        </Menu>
  )
};

export default LeftSide;