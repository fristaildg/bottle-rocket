import React from 'react'
import RestListItem from '../RestListItem'
import styled from 'styled-components'
import LazyLoad from 'react-lazyload'
import { useSelector } from 'react-redux'

const StyledList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`

const RestList = () => {
  const restaurants = useSelector((state: RootState) => state.RestaurantListReducer.restaurants)

  if (!restaurants || restaurants.length === 0) {
    return (
      <p>No restaurants! :(</p>
    )
  }

  return (
    <StyledList>
      {restaurants.map(restaurant => (
        <li key={restaurant.name}>
          <LazyLoad height={250}>
            <RestListItem info={restaurant} />
          </LazyLoad>
        </li>
      ))}
    </StyledList>
  )
}

export type RootState = {
  RestaurantListReducer: {
    restaurants: any[]
  }
}

export default RestList
