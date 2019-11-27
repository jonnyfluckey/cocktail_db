import React, { Component } from "react";
import axios from "axios";
import { Search, Button, Modal, Segment, Image } from "semantic-ui-react";
import CocktailSearchDetail from "./CocktailSearchDetail";

const style = {
  background: {
    position: "absolute",
    textAlign: "center",
    backgroundColor: "#E4FAFF",
    height: "100%",
    width: "100%",
    padding: "50px"
  }
};

class CocktailSearch extends Component {
  state = {
    cocktails: "",
    loading: false,
    value: "",
    profile: null,
    error: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(`/api/cocktails/${val}`);
    const cocktails = await res.data.drinks;
    this.setState({ cocktails, loading: false });
    if (this.state.value === "") {
      this.setState({ cocktails: "" });
    }
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  renderCocktails = () => {
    let noCocktails = <h3>Could not find a cocktail, try again</h3>;
    if (this.state.cocktails) {
      const drinks = this.state.cocktails.map(drink => {
        return (
          <div
            style={{ display: "inline-block", padding: "10px 10px 10px 10px" }}
          >
            <Image src={drink.strDrinkThumb} size="small" />
            <h3>{drink.strDrink}</h3>
            <Modal trigger={<Button>See Details</Button>}>
              <CocktailSearchDetail
                key={drink.idDrink}
                {...drink}
                auth={this.props.auth}
              />
            </Modal>
          </div>
        );
      });
      return drinks;
    }
    if (this.state.cocktails === null) {
      return noCocktails;
    } else {
      return <h3>Fun Awaits! Just Enter a Search</h3>;
    }
  };

  render() {
    return (
      <>
        <div style={style.background}>
          <h1>Search for a Cocktail</h1>
          <br></br>
          <Search
            value={this.state.value}
            onSearchChange={e => this.onChangeHandler(e)}
            loading={this.state.loading}
            showNoResults={false}
            data-cy="input"
          />
          <br></br>
          <h3>Search Results:</h3>
          <Segment
            raised
            style={{ marginLeft: "auto", marginRight: "auto", width: "75%" }}
          >
            {this.renderCocktails()}
          </Segment>
        </div>
      </>
    );
  }
}

export default CocktailSearch;
