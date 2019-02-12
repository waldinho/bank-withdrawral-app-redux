import React from "react";
import formatNumber from "format-number";
import { store } from './store';
import { withdrawFunds } from './actions';

function dispatchBtnAction(e) {
    const amount = e.target.dataset.amount;
    store.dispatch(withdrawFunds(amount));
  }

const WithdrawralButtonGroup = ({ amounts }) => (
    <div>
        {amounts.map((amount, i) => (
              <button
              data-amount={amount}
              key={`btn-${i}`}
              onClick={dispatchBtnAction}>
              WITHDRAW {formatNumber({ prefix: "$" })(amount)}
              </button>
          ))}
    </div> );
    
export default WithdrawralButtonGroup;

