const initialState = {
  restaurants: []
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case `FETCH_RESTAURANTS_SUCCESS`:
      return {
        ...state,
        restaurants: action.payload.data
      }
    default: 
      return state
  }
}