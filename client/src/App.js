import React, {useState, useEffect} from 'react';
import Navbar from './Components/Shared/Navbar';
import RandomCocktail from './Components/RandomCocktail';
import CocktailSearch from './Components/CocktailSearch';
import NoMatch from './Components/Shared/NoMatch';
import { BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';


function App() {
  
  return (
    <>
    <Router>
      <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={RandomCocktail} />
      <Route exact path="/search" component={CocktailSearch} />
      <Route component={NoMatch} />
      </Switch>
      </>
    </Router>
    </>
  );
}

export default App;
