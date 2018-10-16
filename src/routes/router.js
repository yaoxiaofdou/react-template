import React,{ Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

// home 视图页
import HomeView from '../views/home.js';
import NewsPage from '../views/news.js';

// antd
import { Row, Layout } from 'antd';

const { Content,Footer } = Layout;

class MyRoutes extends Component {
  
    render() {
        return (
            // <Router>
              
            //         <Row>
            //             <Switch>
            //                 <Route exact path="/" component={HomeView}/>
            //                 <Route path="/home" component={HomeView}/>
            //                 <Route path="/news" component={NewsPage}/>
            //                 <Route component={HomeView}/>
            //             </Switch>
            //         </Row>

            // </Router>
            
          <Switch>
            <Route exact path="/" component={HomeView}/>
            <Route path="/home" component={HomeView}/>
            <Route path="/news" component={NewsPage}/>
            <Route component={HomeView}/>
          </Switch>
            
        );
    }
}

export default MyRoutes