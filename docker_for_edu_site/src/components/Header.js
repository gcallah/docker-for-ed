import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import * as data from "../data/menu.json";

export default () => {
  const MenuItems = data.dataItems.map((item, idx) => <Menu.Item key={"menuItem_"+idx}><Link to={item.link}>{item.name}</Link></Menu.Item>)
  return (
    <Menu style={{ marginTop: '0px', }} size={'large'}>
      <Menu.Item><Link to='/'>Docker4Edu</Link></Menu.Item>
      <Menu.Menu position="right">
        {MenuItems}
      </Menu.Menu>
    </Menu>
  );
};