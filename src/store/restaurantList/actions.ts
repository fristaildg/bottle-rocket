export const fetchRestaurants = () => {
  return async (dispatch: any) => {
    const response = await fetch('http://sandbox.bottlerocketapps.com/BR_iOS_CodingExam_2015_Server/restaurants.json')
    const data = response.json()
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
