const INITIAL_STATE = {
  user: {
    email: '',
  },
  wallet: {
    currencies: [],
    expenses: [],
  },
};

function userReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case 'NEW_ACTION':
    return { state: action.state };
  default:
    return state;
  }
}

export default userReducer;
