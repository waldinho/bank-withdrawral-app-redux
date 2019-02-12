export default (state, action) => {
    switch (action.type) {
      case "WITHDRAW_FUNDS":
        return {
          ...state,
          amount: state.amount - action.amount
        };
      default:
        return state;
} };