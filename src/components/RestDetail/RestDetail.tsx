import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { RootState } from '../RestList/RestList'
import { useParams } from 'react-router-dom'
import RestMap from '../RestMap'
import { StyledH2, StyledCategory } from '../RestListItem'

const DetailInfo = styled.div``

const InfoContent = styled.ul`
  list-style: none;
  margin: 0;
  padding: 12px;
  padding-top: 16px;
`

const InfoContentItem = styled.li`
  margin-bottom: 26px;
`

const InfoHeader = styled.header`
  color: #FFFFFF;
  background-color: #34B379;
  padding: 12px;
`

const StyledLink = styled.a`
  color: #34B379;
`

const RestDetail = () => {
  const { restName } = useParams()
  const restaurant = useSelector((state: RootState) => {
    return state.RestaurantListReducer.restaurants.find(restaurant => restaurant.name === restName )
  })

  if (!restaurant) return null

  const { 
    name,
    category,
    contact,
    location
  } = restaurant

  const fullAddress = location && location.formattedAddress.join(', ')

  return (
    <div>
      <RestMap lat={location.lat} lng={location.lng} address={fullAddress} />
       <DetailInfo>
        <InfoHeader>
          <StyledH2>
            {name}
          </StyledH2>
          <StyledCategory>
            {category}
          </StyledCategory>
        </InfoHeader>
        <InfoContent>
          {location && (
            <InfoContentItem>
              {fullAddress} 
            </InfoContentItem>
          )}
          {contact && (
            <>
              <InfoContentItem>
                {contact.formattedPhone}
              </InfoContentItem>
              <InfoContentItem>
                <StyledLink href={`https://twitter.com/${contact.twitter}`} target='_blank'>
                  @{contact.twitter}
                </StyledLink>
              </InfoContentItem>
            </>
          )}
        </InfoContent>
       </DetailInfo>
    </div>
  )
}

export default RestDetail
