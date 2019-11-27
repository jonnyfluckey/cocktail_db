import React, { useEffect, useState } from "react";
import { Modal, Image, Table, Button, Icon, Message } from "semantic-ui-react";
import axios from "axios";

function CocktailSearchDetail(props) {
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState("");
  const [wasSuccessful, setWasSuccessful] = useState(false);

  useEffect(() => {
    if (profile) {
      axios
        .post("/api/recipes", {
          email: profile.email,
          drinkid: props.idDrink
        })
        .then(response => {
          setWasSuccessful(true);
        });
    }
  }, [profile, props]);

  function loadUserProfile() {
    props.auth.getProfile(
      (profile, error) => setProfile(profile),
      setError(error)
    );
  }
  function storeDrink() {
    loadUserProfile();
  }
  return (
    <>
      <Modal.Header>{props.strDrink}</Modal.Header>
      <Modal.Content image scrolling>
        <Image src={props.strDrinkThumb} wrapped size="medium" />
        <Modal.Description>
          <Table color="blue">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Amount</Table.HeaderCell>
                <Table.HeaderCell>Ingredient</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row
                style={props.strIngredient1 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure1}</Table.Cell>
                <Table.Cell>{props.strIngredient1}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient2 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure2}</Table.Cell>
                <Table.Cell>{props.strIngredient2}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient3 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure3}</Table.Cell>
                <Table.Cell>{props.strIngredient3}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient4 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure4}</Table.Cell>
                <Table.Cell>{props.strIngredient4}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient5 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure5}</Table.Cell>
                <Table.Cell>{props.strIngredient5}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient6 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure6}</Table.Cell>
                <Table.Cell>{props.strIngredient6}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient7 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure7}</Table.Cell>
                <Table.Cell>{props.strIngredient7}</Table.Cell>
              </Table.Row>
              <Table.Row
                style={props.strIngredient8 === null ? { display: "none" } : {}}
              >
                <Table.Cell>{props.strMeasure8}</Table.Cell>
                <Table.Cell>{props.strIngredient8}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <p>Instructions:</p>
          <p>{props.strInstructions}</p>
          <br></br>
          {props.auth.isAuthenticated() ? (
            <Button color="blue" onClick={() => storeDrink()}>
              <Icon name="glass martini" />
              Save to Favorites
            </Button>
          ) : (
            <Button color="blue" onClick={props.auth.login}>
              <Icon name="glass martini" />
              Save to Favorites
            </Button>
          )}
          <br></br>
          {wasSuccessful ? (
            <Message positive>Your cocktail was saved successfully!</Message>
          ) : null}
          <br></br>
        </Modal.Description>
      </Modal.Content>
    </>
  );
}

export default CocktailSearchDetail;
