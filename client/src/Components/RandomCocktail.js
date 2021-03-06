import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Image } from "semantic-ui-react";

function RandomCocktail() {
  const [drinkInfo, setDrinkInfo] = useState("");
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get("/api/cocktails");
      setDrinkInfo(result.data.drinks[0]);
    }
    fetchData();
  }, []);

  const style = {
    center: {
      display: "block",
      marginRight: "auto",
      marginLeft: "auto"
    },
    background: {
      position: "absolute",
      backgroundColor: "#E4FAFF",
      width: "100%",
      padding: "50px"
    },
    list: {
      listStyleType: "none",
      display: "inline-block",
      paddingLeft: 0
    },
    container: {
      paddingRight: "33%",
      paddingLeft: "33%"
    },
    mobile: {},
    list2: {
      listStyleType: "none",
      display: "inline-block"
    }
  };

  const ingredientList = () => {
    const ingredients = Object.entries(drinkInfo);
    const result = [];
    ingredients.forEach((_, i) => {
      if (
        ingredients[i][0].includes("Ingredient") === true &&
        ingredients[i][1] !== "" &&
        ingredients[i][1] !== null
      ) {
        result.push({ ingredient: ingredients[i][1] });
      }
    });
    return result;
  };

  const measureList = () => {
    const measures = Object.entries(drinkInfo);
    const result = [];
    measures.forEach((_, i) => {
      if (
        measures[i][0].includes("Measure") === true &&
        measures[i][1] !== "" &&
        measures[i][1] !== null
      ) {
        result.push({ measure: measures[i][1] });
      }
    });
    return result;
  };

  const breakpoint = window.matchMedia("(max-width: 700px)");

  return (
    <>
      <div style={style.background}>
        <h1 style={{ textAlign: "center" }}>Cocktail of the Day</h1>
        <br></br>
        <div style={breakpoint.matches ? style.mobile : style.container}>
          <Card style={style.center} fluid>
            <Image src={drinkInfo.strDrinkThumb} centered size={"huge"} />
            <Card.Content>
              <Card.Header>{drinkInfo.strDrink}</Card.Header>
              <Card.Meta>
                <ul style={style.list}>
                  {measureList().map(x => {
                    return <li key={drinkInfo.idDrink}>{x.measure}</li>;
                  })}
                </ul>
                <ul style={style.list2}>
                  {ingredientList().map(x => {
                    return <li key={drinkInfo.idDrink}>{x.ingredient}</li>;
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

export default RandomCocktail;
