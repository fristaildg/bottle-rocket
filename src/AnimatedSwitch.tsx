import React from 'react'
import RestList from './components/RestList'
import { Switch, Route, useLocation } from 'react-router-dom'
import RestDetail from './components/RestDetail'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

const AnimatedSwitch = () => {
  const location = useLocation()

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={300}
        classNames='slide'
      >
        <Switch>
          <Route path='/restaurant/:restName' component={RestDetail} />
          <Route path='/' component={RestList} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  )
}

export default AnimatedSwitch
