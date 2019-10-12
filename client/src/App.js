import React, { useState, useEffect } from "react";
import Navbar from "./Components/Shared/Navbar";
import Splash from "./Components/Splash";
import Callback from "./auth/Callback";
import RandomCocktail from "./Components/RandomCocktail";
import CocktailSearch from "./Components/CocktailSearch";
import Profile from "./Components/profile/Profile";
import Favorites from "./Components/profile/Favorites";
import NoMatch from "./Components/Shared/NoMatch";
import { Route, Switch } from "react-router-dom";
import Auth from "./auth/Auth";
import AuthContext from "./auth/AuthContext";

function App(props) {
  const [auth] = useState(new Auth(props.history));
  const [tokenRenewalComplete, setToken] = useState(false);

  useEffect(() => {
    auth.renewToken(() => {
      setToken(true);
    });
  }, [auth]);

  if (!tokenRenewalComplete) return "Loading...";

  return (
    <AuthContext.Provider value={auth}>
      <Navbar auth={auth} {...props} />
      <Switch>
        <Route exact path="/" component={Splash} />
        <Route
          path="/callback"
          render={props => <Callback auth={auth} {...props} />}
        />
        <Route exact path="/random" component={RandomCocktail} />
        <Route
          exact
          path="/search"
          render={props => <CocktailSearch auth={auth} {...props} />}
        />
        <Route
          exact
          path="/profile"
          render={props => <Profile auth={auth} {...props} />}
        />
        <Route
          exact
          path="/favorites"
          render={props => <Favorites auth={auth} {...props} />}
        />
        <Route component={NoMatch} />
      </Switch>
    </AuthContext.Provider>
  );
}

export default App;
