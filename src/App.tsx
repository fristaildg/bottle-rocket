import React, { useEffect  } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router } from 'react-router-dom'
import { fetchRestaurants } from './store/restaurantList/actions'
import { useDispatch } from 'react-redux'
import AnimatedSwitch from './AnimatedSwitch'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRestaurants())
  }, [])

  return (
    <div className="App">
      <Router>
        <Header />
        <AnimatedSwitch />
      </Router>
    </div>
  );
}

export default App;
