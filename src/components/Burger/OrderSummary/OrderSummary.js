import React, {Component} from 'react';
import Aux from '../../../hoc/ReactAux.js';
import Button from '../../UI/Button/Button.js';

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[Order Summary] Will update');
  }
  render() {
    const ingredientSummary = Object.keys(this.props.ingredients)
      .map(igKey => {
        return (
          <li key={igKey} style={{listStyle: 'none', textAlign: 'left'}}>
            <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
          </li>);
      });

    return (
      <Aux>
        <h3>Your Order </h3>
        <p> A delicious burger with the following ingredients: </p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong> Total price: {this.props.price.toFixed(2)} $</strong></p>
        <p>Continue to Checkout?</p>
        <Button btnType={"Danger"} clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType={"Success"} clicked={this.props.purchaseContinued}>CONTINUE</Button>

      </Aux>
    )
  }//end
};

export default OrderSummary;
