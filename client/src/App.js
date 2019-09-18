import React from 'react';
import Navbar from './Components/Shared/Navbar';
import Splash from './Components/Splash';
import RandomCocktail from './Components/RandomCocktail';
import CocktailSearch from './Components/CocktailSearch';
import NoMatch from './Components/Shared/NoMatch';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  
  const style = {
    container: {
      backgroundColor: '#E4FAFF'
    }
  }

  return (
    <>
    <Router>
      <>
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Splash} />
      <Route exact path="/random" component={RandomCocktail} />
      <Route exact path="/search" component={CocktailSearch} />
      <Route component={NoMatch} />
      </Switch>
      </>
    </Router>
    </>
  );
}

export default App;
