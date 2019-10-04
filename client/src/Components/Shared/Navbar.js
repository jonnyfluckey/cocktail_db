import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";

export default class Navbar extends Component {
  // state = {
  //   profile: null,
  //   error: ""
  // };

  // componentDidUpdate() {
  //   if (this.props.auth.isAuthenticated()) {
  //     this.loadUserProfile();
  //   }
  // }

  // loadUserProfile() {
  //   this.props.auth.getProfile((profile, error) =>
  //     this.setState({ profile, error })
  //   );
  // }

  render() {
    return (
      <AuthContext.Consumer>
        {auth => (
          <Menu inverted style={{ margin: "0" }}>
            <Menu.Item as={NavLink} to="/random">
              Random Cocktail
            </Menu.Item>
            <Menu.Item as={NavLink} to="/search">
              Search Cocktail
            </Menu.Item>
            {auth.isAuthenticated() && (
              <Menu.Item as={NavLink} to="/profile">
                Profile
              </Menu.Item>
            )}
            <Menu.Item
              onClick={auth.isAuthenticated() ? auth.logout : auth.login}
              position="right"
            >
              {auth.isAuthenticated() ? "Log Out" : "Log In"}
            </Menu.Item>
          </Menu>
        )}
      </AuthContext.Consumer>
    );
  }
}
