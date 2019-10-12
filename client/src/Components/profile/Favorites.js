import React, { Component } from "react";
import axios from "axios";

class Favorites extends Component {
  state = {
    profile: null,
    error: "",
    favorites: [],
    favoritesLoading: false
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
    this.setState({ favorites, favoritesLoading: false });
  }

  render() {
    const { favorites, favoritesLoading } = this.state;

    if (favoritesLoading) return "Loading...";
    return (
      <div>
        <h1>Favorites page</h1>
        {favorites.map(drink => (
          <p key={drink.id}>{drink.drinkid}</p>
        ))}
      </div>
    );
  }
}

export default Favorites;
