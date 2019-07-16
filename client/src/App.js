import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card, Image, Icon} from 'semantic-ui-react';
import Navbar from './Components/Shared/Navbar';



function App() {
  const [drinkInfo, setDrinkInfo] = useState( '' )
  useEffect(() => {
    async function fetchData() {
    const result = await axios.get('/api/cocktails');
    setDrinkInfo(result.data.drinks[0])}
    fetchData();
  }, [])

  const style = {
    center: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
    },
    background: {
      backgroundImage: "url('https://images.unsplash.com/photo-1540224769541-7e6e20a42330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80')",
      height: '100%',
      width: '100%',
      position: 'absolute',
    },
    list: {
      listStyleType: 'none',
      display: 'inline-block',
    },
    hidden: {
      display: 'none'
    },
    container: {
      paddingRight: '33%',
      paddingLeft: '33%',
    },
  }
        
const ingredientList = () => {
  const ingredients = Object.entries(drinkInfo)
  const result = []
  ingredients.map((x, i) => {
    if ((ingredients[i][0].includes('Ingredient') === true) && (ingredients[i][1] !== "") && (ingredients[i][1] !== null)) {
      result.push({ ingredient: ingredients[i][1] })
    }
    
    })
  return result
}

const measureList = () => {
  const measures = Object.entries(drinkInfo)
  const result = []
  measures.map((x, i) => {
    if ((measures[i][0].includes('Measure') === true) && (measures[i][1] !== "") && (measures[i][1] !== null)) {
      result.push({ measure: measures[i][1] })
    }
    
    })
  return result
}

    

  return (
    <>
    <Navbar/>
    <div style={style.background}>
    <h1 style={{textAlign: 'center', color: 'white'}}>Cocktail of the Day</h1>
    <br></br>
    <div style={style.container}>
    <Card style={style.center} fluid>
    <Image src={drinkInfo.strDrinkThumb} centered size={"huge"} />
    <Card.Content>
      <Card.Header>{drinkInfo.strDrink}</Card.Header>
      <Card.Meta>
      <ul style={style.list}>
      {measureList().map((x) => {
          return <li key={x+1}>{x.measure}</li>
        })}
      </ul>
      <ul style={style.list}>
        {ingredientList().map((x) => {
          return <li key={x+1}>{x.ingredient}</li>
        })}
      </ul>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Header>Instructions</Card.Header>
      <Card.Description>{drinkInfo.strInstructions}</Card.Description>
    </Card.Content>
    </Card>
    </div>
    <br></br>
    <br></br>
    </div>
    </>
  );
}

export default App;
