import React from 'react';
import { Modal, Image } from 'semantic-ui-react';

function CocktailSearchDetail(props) {

  
  return (
  <>
  <Modal.Header>{props.strDrink}</Modal.Header>
    <Modal.Content image>
      <Image src={props.strDrinkThumb} wrapped size='medium' />
    </Modal.Content>
  </>
  )
}

export default CocktailSearchDetail