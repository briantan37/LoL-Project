import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"


import Navbar from "./components/navbar.component";
import SearchPlayer from "./components/search-player.component";
import ChampionsList from "./components/champions-list.component.js";

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={SearchPlayer} />
      <Route path="/builds" component={ChampionsList} />

    </Router>
  );
}

export default App;
