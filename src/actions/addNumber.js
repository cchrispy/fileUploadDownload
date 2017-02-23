const addNumber = x => ({
  type: 'ADD_RANDO',
  number: x
})

const addNumberAsync = () => {
  return dispatch => {
    return fetch('/randomNumber', {
      method: 'GET'
    }).then(response => {
      return response.json();
    }).then(res => {
      return res.rando;
    }).then(rando => {
      dispatch(addNumber(rando));
    })
  }
}

export default addNumberAsync;