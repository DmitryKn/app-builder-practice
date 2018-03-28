import React from 'react';
import Aux from '../../../hoc/ReactAux.js';
import Button from '../../UI/Button/Button.js';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <li key={igKey} style={{listStyle: 'none', textAlign: 'left'}}>
          <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
       </li>);
    });

  return (
    <Aux>
      <h3>Your Order </h3>
      <p> A delicious burger with the following ingredients: </p>
      <ul>
        {ingredientSummary}
      </ul>
      <p>Continue to Checkout?</p>
      <Button btnType={"Danger"} clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType={"Success"} clicked={props.purchaseContinued}>CONTINUE</Button>

    </Aux>
  )
};

export default orderSummary;
