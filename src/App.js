import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/me.png";
import "./App.css";
import WithdrawralButtonGroup from "./WithdrawralButtonGroup";
import DepositButtonGroup from "./DepositButtonGroup";
import { store } from "./store";

class App extends Component {
  render() {
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().amount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
        <WithdrawralButtonGroup key={1} amounts={[1000, 500, 200, 100, 50, 20, 10]} />
        <DepositButtonGroup key={2} amounts={[1000, 500, 200, 100, 50, 20, 10]} />
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
