import React from "react";
import { Grid, Modal, Button, Image, Icon } from "semantic-ui-react";
import CocktailSearchDetail from "../CocktailSearchDetail";

const FavoriteDetail = props => {
  const convertedDrinkId = parseInt(props.idDrink);
  return (
    <Grid.Row>
      <Grid.Column>
        <Image src={props.strDrinkThumb} size="small" centered />
      </Grid.Column>
      <Grid.Column verticalAlign="middle">
        <h3>{props.strDrink}</h3>
      </Grid.Column>
      <Grid.Column verticalAlign="middle">
        <Modal trigger={<Button>See Details</Button>}>
          <CocktailSearchDetail
            key={props.idDrink}
            {...props}
            auth={props.auth}
          />
        </Modal>
        <br></br>
        <br></br>
        <br></br>
        <Button.Group>
          <Button animated color="grey">
            <Button.Content visible>
              <Icon name="share" />
            </Button.Content>
            <Button.Content hidden>Share</Button.Content>
          </Button>
          <br></br>
          <Button animated color="yellow">
            <Button.Content visible>
              <Icon name="print" />
            </Button.Content>
            <Button.Content hidden>Print</Button.Content>
          </Button>
          <br></br>
          <Button
            animated
            color="red"
            onClick={() => {
              props.deleteFavorite(convertedDrinkId);
            }}
          >
            <Button.Content visible>
              <Icon name="delete" />
            </Button.Content>
            <Button.Content hidden>Delete</Button.Content>
          </Button>
          {/* <Confirm
            open={props.show}
            onConfirm={() => {
              props.deleteFavorite(convertedDrinkId);
              props.handleShowChange();
            }}
            onCancel={() => {
              props.handleShowChange();
            }}
          /> */}
        </Button.Group>
      </Grid.Column>
    </Grid.Row>
  );
};

export default FavoriteDetail;
