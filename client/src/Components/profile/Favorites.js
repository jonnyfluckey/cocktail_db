import React, { Component } from "react";
import axios from "axios";
import { Segment, Image, Button, Modal, Grid, Icon } from "semantic-ui-react";
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

  showFavorites() {
    return (
      <>
        {this.state.favoriteArray ? (
          this.state.favoriteArray.map((drink, i) => (
            <div
              style={{
                // display: "inline-block",
                padding: "10px 10px 10px 10px",
                textAlign: "center"
              }}
              key={i}
            >
              <Grid columns={3} divided celled>
                <Grid.Row>
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
                      <Button animated color="red">
                        <Button.Content visible>
                          <Icon name="delete" />
                        </Button.Content>
                        <Button.Content hidden>Delete</Button.Content>
                      </Button>
                    </Button.Group>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </div>
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
          {this.showFavorites()}
        </Segment>
      </div>
    );
  }
}

export default Favorites;
