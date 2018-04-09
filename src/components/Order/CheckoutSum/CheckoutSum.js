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
      <Button btnType="Danger" clicked="">CANCEL</Button>
      <Button btnType="Success" clicked="">CONTINUE</Button>
    </div>
  )
}

export default checkoutSummary;
