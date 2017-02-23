const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RANDO':
      return [...state, action.number];
    default:
      return state;
  }
}

export default listReducer;