const listReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_RANDO':
      return [...state, action.rando];
    default:
      return state;
  }
}

export default listReducer;