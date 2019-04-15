import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

async function setupMenu() {
  const domain = 'http://localhost:8081'
  
  const response = await axios.get(`${domain}/get/menu`)
  const { result: data } = response.data

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

export default setupMenu