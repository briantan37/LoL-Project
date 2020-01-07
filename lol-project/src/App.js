import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Layout} from './components/layout'

import NavigationBar from "./components/navbar.component";
import SearchPlayer from "./components/search-player.component";
import ChampionsList from "./components/champions-list.component";
import LoginPage from "./components/login/LoginPage.component";
import AatroxPage from "./components/champion-pages/aatrox-page"
import NoMatch from "./components/no-match.component";




function App() {
  
    return (
      <React.Fragment>
        <NavigationBar/>
            <Router>
              <Switch>
              <Route exact path="/"  component={SearchPlayer} />
              <Route path="/builds" component={ChampionsList} />
              <Route path="/login" component={LoginPage} />
              <Route path="/Aatrox" component = {AatroxPage} />
              <Route component={NoMatch}/>
              </Switch>   
            </Router>
      </React.Fragment>
    
    );
  }
  


export default App;
