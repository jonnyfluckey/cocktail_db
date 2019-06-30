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
    },
    hidden: {
      display: 'none'
    },
  }

  // const ingredientList =  () => {
  //   debugger
  //   const ingredients = Object.entries(drinkInfo)
  //   // for (let x in ingredients) {
  //   //   if (ingredients[x][0].includes('Ingredient') === true) {
  //   //     return(
  //   //       <li>{ingredients[x][1]}</li>
  //   //     )
        
const ingredientList = () => {
  const ingredients = Object.entries(drinkInfo)
  const result = []
  ingredients.map((x, i) => {
    if ((ingredients[i][0].includes('Ingredient') === true) && (ingredients[i][1] != "")) {
      result.push(ingredients[i][1])
    }
    })
  result.map((x, i) => {
    return  (
      <li>{result[i]}</li>
    )
  })
}

    

  return (
    <>
    <Navbar/>
    <div style={style.background}>
    <h1 style={{textAlign: 'center', color: 'white'}}>Cocktail of the Day</h1>
    <br></br>
    <Card style={style.center}>
    <Image src={drinkInfo.strDrinkThumb} centered size={"huge"} />
    <Card.Content>
      <Card.Header>{drinkInfo.strDrink}</Card.Header>
      <Card.Meta>
      <ul style={style.list}>
        {/* <li>{drinkInfo.strMeasure1} &nbsp; {drinkInfo.strIngredient1}</li>
        <li>{drinkInfo.strMeasure2} &nbsp; {drinkInfo.strIngredient2}</li>
        <li>{drinkInfo.strMeasure3} &nbsp; {drinkInfo.strIngredient3}</li>
        <li>{drinkInfo.strMeasure4} &nbsp; {drinkInfo.strIngredient4}</li>
        <li>{drinkInfo.strMeasure5} &nbsp; {drinkInfo.strIngredient5}</li>
        <li>{drinkInfo.strMeasure6} &nbsp; {drinkInfo.strIngredient6}</li>
        <li>{drinkInfo.strMeasure7} &nbsp; {drinkInfo.strIngredient7}</li>
        <li>{drinkInfo.strMeasure8} &nbsp; {drinkInfo.strIngredient8}</li>
        <li>{drinkInfo.strMeasure9} &nbsp; {drinkInfo.strIngredient9}</li>
        <li>{drinkInfo.strMeasure10} &nbsp; {drinkInfo.strIngredient10}</li>
        <li>{drinkInfo.strMeasure11} &nbsp; {drinkInfo.strIngredient11}</li>
        <li>{drinkInfo.strMeasure12} &nbsp; {drinkInfo.strIngredient12}</li>
        <li>{drinkInfo.strMeasure13} &nbsp; {drinkInfo.strIngredient13}</li>
        <li>{drinkInfo.strMeasure14} &nbsp; {drinkInfo.strIngredient14}</li>
        <li>{drinkInfo.strMeasure15} &nbsp; {drinkInfo.strIngredient15}</li> */}
        {ingredientList()}
      </ul>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Card.Header>Instructions</Card.Header>
      <Card.Description>{drinkInfo.strInstructions}</Card.Description>
    </Card.Content>
    </Card>
    </div>
    </>
  );
}

export default App;
