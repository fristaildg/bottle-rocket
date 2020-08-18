const initialState = {
  restaurants: []
}

export default (state = initialState, action: any) => {
  switch (action.type) {
    case `FETCH_RESTAURANTS_SUCCESS`:
      const { restaurants } = action.payload

      return {
        ...state,
        restaurants
      }
    default: 
      return state
  }
}