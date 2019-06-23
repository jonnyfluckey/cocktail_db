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
    }
  }

    //  ingredientList( ()=> {
    //   Object.keys(drinkInfo).map((key, index) => {
    //     if (drinkInfo[key] != "" && drinkInfo[key].includes("Ingredient") == true) {
    //       return(
    //         <>
    //         <Icon name='chevron right'/>
    //         <li>{drinkInfo.key}</li>
    //         </>
    //       )
    //     }
    //   })
    // })

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
      <ul>
   
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
