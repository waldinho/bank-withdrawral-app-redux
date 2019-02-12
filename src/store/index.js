import { createStore } from "redux";
import reducer from "../reducers";

// const initialState = { 
//     username: "James",
//     amount: 0,
// };

const persistedState = localStorage.getItem('reduxState') ? JSON.parse(localStorage.getItem('reduxState')) : {username: 'James', amount: 0}

export const store = createStore(reducer, persistedState);