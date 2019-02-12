import React, { Component } from "react";
import formatNumber from "format-number";
import photographer from "./images/me.png";
import "./App.css";
import ButtonGroup from "./ButtonGroup";
import { store } from "./store";

class App extends Component {
  render() {
    console.log(store.getState().amount)
    return (
      <div className="App">
        <img className="App__userpic" src={photographer} alt="user" />
        <p className="App__username">Hello, {store.getState().username}! </p>
        <div className="App__amount">
          {formatNumber({ prefix: "$" })(store.getState().amount)}
          <p className="App__amount--info">Total Amount</p>
        </div>

        <section className="App__buttons">
        <ButtonGroup key={2} amounts={[1000000, 500000, 100000, 50000, 10000, 5000]} />
        </section>

        <p className="App__giveaway">Give away all your cash to charity</p>
      </div>
    );
  }
}

export default App;
