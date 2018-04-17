import React from 'react';
import Burger from '../../Burger/Burger.js';
import Button from '../../UI/Button/Button.js';
import './CheckourSum.css';

const checkoutSummary = (props) => {
  return (
    <div className="CheckoutSum">
      <h1>Great choice!</h1>
      <div style={{width: 'auto', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
      <Button btnType="Success" clicked={props.checkoutContinued}>CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;
