import React, {useState, useEffect} from 'react';
import axios from 'axios'



function App() {
  const [drinkInfo, setDrinkInfo] = useState( '' )
  useEffect(() => {
    async function fetchData() {
    const result = await axios.get('/api/cocktails');
    setDrinkInfo(result.data.drinks[0])}
    fetchData();
  }, [])

  const center = {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  }

  return (
    <>
    <h1 style={{textAlign: 'center'}}>Cocktail of the Day</h1>
    <br></br>
    <img src={drinkInfo.strDrinkThumb} alt="drink" style={center} height='200px' width='200px' />
    </>
  );
}

export default App;
