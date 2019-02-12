export default (state, action) => {
    switch (action.type) {
      case "WITHDRAW_FUNDS":
        return {
          ...state,
          amount: state.amount - parseInt(action.amount, 0)
        };
      case "DEPOSIT_FUNDS":
        return {
          ...state,
          amount: state.amount + parseInt(action.amount, 0)
        };
      default:
        return state;
} };
