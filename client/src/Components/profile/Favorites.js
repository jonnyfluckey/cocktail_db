import React, { Component } from "react";
import axios from "axios";
import { Table, Image, Button } from "semantic-ui-react";

class Favorites extends Component {
  state = {
    profile: null,
    error: "",
    favorites: [],
    favoritesLoading: false,
    favoriteArray: []
  };

  componentDidMount() {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.props.auth.getProfile((profile, error) =>
      this.setState({ profile, error }, () =>
        this.loadUserFavorites(this.state.profile.email)
      )
    );
  }

  async loadUserFavorites(email) {
    this.setState({ favoritesLoading: true });
    const res = await axios.get(`/api/recipes/${email}`);
    const favorites = res.data;
    this.setState({ favorites }, () =>
      this.loadFavoritesFromApi(this.state.favorites)
    );
  }

  async loadFavoritesFromApi(favorites) {
    const favoriteArray = [];
    favorites.map(drink => {
      axios.get(`/api/cocktails/showbyid/${drink.drinkid}`).then(res => {
        const favoriteData = res.data.drinks[0];
        favoriteArray.push(favoriteData);
      });
    });
    this.setState({ favoriteArray, favoritesLoading: false });
  }
  render() {
    const { favorites, favoritesLoading, favoriteArray } = this.state;

    if (favoritesLoading) return "Loading...";
    return (
      <div>
        <h1>Favorites page</h1>
        {favoriteArray === [] ? (
          <h2>You have no favorites, go find some cocktails!</h2>
        ) : (
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell />
                <Table.HeaderCell>Cocktail Name</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body></Table.Body>
            <Table.Footer>
              <Table.Row>
                <Table.Cell>
                  <Button>Test Button</Button>
                </Table.Cell>
              </Table.Row>
            </Table.Footer>
          </Table>
        )}
      </div>
    );
  }
}

export default Favorites;
