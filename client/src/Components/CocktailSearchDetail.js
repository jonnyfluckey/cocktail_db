import React from "react";
import { Modal, Image, Table } from "semantic-ui-react";

function CocktailSearchDetail(props) {
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
        </Modal.Description>
      </Modal.Content>
    </>
  );
}

export default CocktailSearchDetail;
