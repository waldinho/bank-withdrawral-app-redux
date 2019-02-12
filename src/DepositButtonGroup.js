import React from "react";
import formatNumber from "format-number";
import { store } from './store';
import { depositFunds } from './actions';

function dispatchBtnAction(e) {
    const amount = e.target.dataset.amount;
    store.dispatch(depositFunds(amount));
  }

const DepositButtonGroup = ({ amounts }) => (
    <div>
        {amounts.map((amount, i) => (
              <button
              data-amount={amount}
              key={`btn-${i}`}
              onClick={dispatchBtnAction}>
              DEPOSIT {formatNumber({ prefix: "$" })(amount)}
              </button>
          ))}
    </div> );
    
export default DepositButtonGroup;

