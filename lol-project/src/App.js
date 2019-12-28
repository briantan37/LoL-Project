import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Layout} from './components/layout'

import {NavigationBar} from "./components/navbar.component";
import {HomePage} from "./components/home-page.component";
import {SearchPlayer} from "./components/search-player.component";
import {ChampionsList} from "./components/champions-list.component";
import {LogIn} from "./components/log-in-screen"
import {NoMatch} from "./components/no-match.component";




class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
          <Router>
            <Switch>
            <Route exact path="/"  component={HomePage} />
            </Switch>   
          </Router>
          <Layout>
            <Router>
              <Switch>
              <Route path="/search"  component={SearchPlayer} />
              <Route path="/builds" component={ChampionsList} />
              <Route path="/login" component={LogIn} />
              </Switch>   
            </Router>
          </Layout>
      </React.Fragment>
    
    );
  }
  
}

export default App;
