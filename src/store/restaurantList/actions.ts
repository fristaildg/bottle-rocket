export const fetchRestaurants = () => {
  return async (dispatch: any) => {
    const response = await fetch('https://s3.amazonaws.com/br-codingexams/restaurants.json')
    const data = await response.json()
    dispatch(fetchRestaurantsSuccess(data))
  }
}

const fetchRestaurantsSuccess = (data: any) => {
  return (dispatch: any) => {
    dispatch({
      type: 'FETCH_RESTAURANTS_SUCCESS',
      payload: data
    })
  }
}
