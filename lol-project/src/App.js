import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Layout} from './components/layout'

import {NavigationBar} from "./components/navbar.component";
import {SearchPlayer} from "./components/search-player.component";
import {ChampionsList} from "./components/champions-list.component";
import {LogIn} from "./components/log-in-screen"
import {AatroxPage} from "./components/champion-pages/aatrox-page"
import {NoMatch} from "./components/no-match.component";




class App extends Component {
  render(){
    return (
      <React.Fragment>
        <NavigationBar/>
            <Router>
              <Switch>
              <Route exact path="/"  component={SearchPlayer} />
              <Route path="/builds" component={ChampionsList} />
              <Route path="/login" component={LogIn} />
              <Route path="/Aatrox" component = {AatroxPage} />
              </Switch>   
            </Router>
      </React.Fragment>
    
    );
  }
  
}

export default App;
