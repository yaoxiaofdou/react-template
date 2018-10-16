import React, { Component } from 'react';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import { Layout } from 'antd';
import QueueAnim from 'rc-queue-anim';

import MyRoutes from '../routes/router.js';
import MenuComponent from '../components/nav.js';


const { Content,Footer } = Layout;

class ContainerPage extends Component {
  render() {
    return (
      <Router history="hashHistory">
        <QueueAnim>
          <Layout className="layout" style={{ backgroundColor:'#fff' }}>

            <MenuComponent />

            <Content style={{ padding: '0  50px',marginTop: 64 }}>
              
              <MyRoutes />

            </Content>

            <Footer style={{ width:'100%',position:'fixed',bottom:'0',textAlign: 'center' }}>
              create by xiaofeng.yao ~ 2017.06.14
            </Footer>

          </Layout>
        </QueueAnim>
      </Router>
    );
  }
}

export default ContainerPage;