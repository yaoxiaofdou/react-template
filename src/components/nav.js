import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom';
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class MenuComponent extends Component {
  state = {
    current: 'home',
    menuList: [
      { 
        id: 1,
        icon: 'home',
        link: '/',
        name: 'home'
      }, { 
        id: 2,
        icon: 'email',
        link: '/news',
        name: 'news'
      },
    ]
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Menu onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            mode="horizontal"
            className="MenuComponent"
        >
        { 
          this.state.menuList.map((li,index)=>{ 
            return(
              <Menu.Item key={ li.name }>
                <Link to={ li.link }>
                  <Icon type={ li.icon } />{ li.name }
                </Link>
              </Menu.Item>
            )
          })
        }
        {/* <Menu.Item key="app" disabled>
          <Icon type="appstore" />Navigation Two
        </Menu.Item> */}
      </Menu>
    );
  }
}

export default MenuComponent;