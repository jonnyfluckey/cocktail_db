import React, { Component } from "react";
import axios from "axios";
import {
  Segment,
  Image,
  Button,
  Modal,
  Grid,
  Icon,
  Confirm
} from "semantic-ui-react";
import CocktailSearchDetail from "../CocktailSearchDetail";

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
    favorites.map(drink => {
      axios
        .get(`/api/cocktails/showbyid/${drink.drinkid}`)
        .then(res => {
          const favoriteData = res.data.drinks[0];
          favoriteArray.push(favoriteData);
        })
        .then(() => {
          this.setState({ favoriteArray, favoritesLoading: false });
        });
    });
  }

  deleteFavorite(id) {
    debugger;
    axios.delete(`/api/recipes/${id}`).then(res => {
      this.loadUserFavorites(this.state.profile.email);
    });
  }

  async findFavorite(drinkId) {
    debugger;
    const res = await this.state.favorites.find(drink => {
      if (drink.drinkid === drinkId) {
        return drink.id;
      }
    });
    return res;
  }

  showFavorites() {
    return (
      <>
        {this.state.favoriteArray ? (
          this.state.favoriteArray.map((drink, i) => (
            <Grid.Row key={i}>
              <Grid.Column>
                <Image src={drink.strDrinkThumb} size="small" centered />
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <h3>{drink.strDrink}</h3>
              </Grid.Column>
              <Grid.Column verticalAlign="middle">
                <Modal trigger={<Button>See Details</Button>}>
                  <CocktailSearchDetail
                    key={drink.idDrink}
                    {...drink}
                    auth={this.props.auth}
                  />
                </Modal>
                <br></br>
                <br></br>
                <br></br>
                <Button.Group>
                  <Button animated color="grey">
                    <Button.Content visible>
                      <Icon name="share" />
                    </Button.Content>
                    <Button.Content hidden>Share</Button.Content>
                  </Button>
                  <br></br>
                  <Button animated color="yellow">
                    <Button.Content visible>
                      <Icon name="print" />
                    </Button.Content>
                    <Button.Content hidden>Print</Button.Content>
                  </Button>
                  <br></br>
                  <Button
                    animated
                    color="red"
                    onClick={() => {
                      this.setState({ show: true });
                    }}
                  >
                    <Button.Content visible>
                      <Icon name="delete" />
                    </Button.Content>
                    <Button.Content hidden>Delete</Button.Content>
                  </Button>
                  <Confirm
                    open={this.state.show}
                    onConfirm={() => {
                      this.deleteFavorite(this.findFavorite(drink.idDrink));
                      this.setState({ show: false });
                    }}
                    onCancel={() => {
                      this.setState({ show: false });
                    }}
                  />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          ))
        ) : (
          <div>Loading...</div>
        )}
      </>
    );
  }
  render() {
    const { favoritesLoading } = this.state;

    if (favoritesLoading) return "Loading...";
    return (
      <div style={style.background}>
        <h1>Favorites page</h1>
        <Segment
          raised
          style={{ marginLeft: "auto", marginRight: "auto", width: "75%" }}
        >
          <Grid columns={3} divided celled>
            {this.showFavorites()}
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default Favorites;
