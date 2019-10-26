import React, { Component } from "react";
import axios from "axios";
import { Segment, Grid } from "semantic-ui-react";
import FavoriteDetail from "./FavoriteDetail";

const style = {
  background: {
    position: "absolute",
    textAlign: "center",
    backgroundColor: "#E4FAFF",
    height: "100%",
    width: "100%",
    padding: "50px"
  },
  button: {
    display: "block"
  }
};

class Favorites extends Component {
  state = {
    profile: null,
    error: "",
    favorites: [],
    favoritesLoading: false,
    favoriteArray: [],
    show: false
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
    await favorites.map(drink => {
      axios
        .get(`/api/cocktails/showbyid/${drink.drinkid}`)
        .then(res => {
          const favoriteData = res.data.drinks[0];
          favoriteArray.push(favoriteData);
        })
        .then(() => {
          this.setState({
            favoriteArray
          });
        })
        .then(() => {
          this.setState({ favoritesLoading: false });
        });
    });
  }

  deleteFavorite = id => {
    const favorites = this.state.favorites;
    const filterFavorites = favorites.filter(drink => drink.drinkid !== id);
    this.setState(
      {
        favorites: filterFavorites
      },
      () => {
        this.loadFavoritesFromApi(this.state.favorites);
        axios.delete(`/api/recipes/${id}`).then(res => {
          console.log(res);
        });
      }
    );
  };

  handleShowChange = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    const { favoritesLoading, favoriteArray } = this.state;

    if (favoritesLoading) return "Loading...";
    return (
      <div style={style.background}>
        <h1>Favorites page</h1>
        <Segment
          raised
          style={{ marginLeft: "auto", marginRight: "auto", width: "75%" }}
        >
          <Grid columns={3} divided celled>
            {favoriteArray ? (
              favoriteArray.map(drink => (
                <FavoriteDetail
                  key={parseInt(drink.idDrink)}
                  {...drink}
                  auth={this.props.auth}
                  show={this.state.show}
                  handleShowChange={this.handleShowChange}
                  deleteFavorite={this.deleteFavorite}
                />
              ))
            ) : (
              <div>Loading...</div>
            )}
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Favorites;
