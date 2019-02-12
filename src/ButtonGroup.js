import React from "react";
import { store } from './store';
import { withdrawFunds } from './actions';

function dispatchBtnAction(e) {
    const amount = e.target.dataset.amount;
    console.log(amount)
    store.dispatch(withdrawFunds(amount));
  }

const ButtonGroup = ({ amounts }) => (
    <div>
        {amounts.map((amount, i) => (
              <button
              data-amount={amount}
              key={`btn-${i}`}
              onClick={dispatchBtnAction}>
              WITHDRAW ${amount}
              </button>
          ))}
    </div> );
    
export default ButtonGroup;

