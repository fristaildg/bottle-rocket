import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import RestaurantListReducer from './restaurantList/reducers'

const rootReducer = combineReducers({
  RestaurantListReducer
})

export default function configureStore() {
  const middlewares = [thunkMiddleware]
  const middlewareEnhancer = applyMiddleware(...middlewares)

  const store = createStore(
    rootReducer,
    composeWithDevTools(middlewareEnhancer)
  )
  
  return store
}
