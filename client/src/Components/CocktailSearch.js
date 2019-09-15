import React, { Component } from 'react';
import axios from 'axios';

class CocktailSearch extends Component {
  state = {
    cocktails: '',
    loading: false,
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios.get(
      'https://www.thecocktaildb.com/api/json/v1/1/search.php', {
        params: {
          s: val
        }
      }
    )
    const cocktails = await res.data.drinks;
    this.setState({ cocktails, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  renderCocktails = () => {
    let noCocktails = <h1>There's no cocktails</h1>;
    if (this.state.cocktails) {
      const drinks =
      this.state.cocktails.map( (drink) => {
        return (
        <h3>Drink Name: {drink.strDrink}</h3>
        )
        }) ;
        return drinks
    } else {
      return noCocktails;

    }

  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderCocktails()}
      </div>
    );
  }
}

export default CocktailSearch;