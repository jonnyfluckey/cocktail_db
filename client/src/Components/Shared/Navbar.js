import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu inverted style={{margin: '0'}}>
        
        <Menu.Item
        name='randomCocktails'
        active={activeItem === 'aboutUs'}
        onClick={this.handleItemClick}
        href='/'
        />
        <Menu.Item
          name='searchCocktails'
          active={activeItem === 'aboutUs'}
          onClick={this.handleItemClick}
          href='/search'
        />
        <Menu.Item name='aboutUs' active={activeItem === 'jobs'} onClick={this.handleItemClick} />
        <Menu.Item
          name='contactUs'
          active={activeItem === 'locations'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}