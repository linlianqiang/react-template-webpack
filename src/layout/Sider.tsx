/*
 * @Description: 左侧菜单
 * @Date: 2022-03-25 11:38:01
 * @LastEditTime: 2022-03-31 16:56:44
 */
import React from 'react';
import { Menu } from 'antd';
import {
  HomeOutlined
} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import { LeftMenuConfig } from '@routes/pageRoutes';

const { SubMenu } = Menu;

class Sider extends React.Component {
  render() {
    const menu = LeftMenuConfig();
    return(
      <Menu
          mode="inline"
          defaultSelectedKeys={[location.pathname]}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu key="sub1" icon={<HomeOutlined />} title="功能">

            {menu.map((item) =>
                <Menu.Item key={item.path as string}>
                  <Link to={item.path as string}>
                    {item.title}
                  </Link>
                </Menu.Item>
            )}
          </SubMenu>
        </Menu>
    )
  }
}

export default Sider;