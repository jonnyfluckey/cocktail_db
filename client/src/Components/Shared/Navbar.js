import React, { Component } from "react";
import { Menu, Dropdown } from "semantic-ui-react";
import { NavLink } from "react-router-dom";
import AuthContext from "../../auth/AuthContext";

export default class Navbar extends Component {
  render() {
    return (
      <AuthContext.Consumer>
        {auth => (
          <Menu stackable inverted style={{ margin: "0" }}>
            <Menu.Item as={NavLink} to="/random">
              Random Cocktail
            </Menu.Item>
            <Menu.Item as={NavLink} to="/search">
              Search Cocktail
            </Menu.Item>
            {auth.isAuthenticated() && (
              <Dropdown item text="Profile" pointing>
                <Dropdown.Menu>
                  <Dropdown.Item as={NavLink} to="/profile">
                    About You
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/favorites">
                    Favorites
                  </Dropdown.Item>
                  <Dropdown.Item disabled>Preferences</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
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
