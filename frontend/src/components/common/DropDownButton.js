import React from "react"
import { Button, Menu, Dropdown, Icon } from 'antd';

function handleMenuClick(e) {
  console.log('click', e);
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Borrar</Menu.Item>
    <Menu.Item key="2">Actualizar</Menu.Item>
  </Menu>
);



const DropDownButton = () => (
  <div>
    <Dropdown overlay={menu}>
      <Button>
        Click <Icon type="down" />
      </Button>
    </Dropdown>
  </div>
);

export default DropDownButton

