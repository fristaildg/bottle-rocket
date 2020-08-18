import React from 'react'
import styled from 'styled-components'
import bgGradient from './cellGradientBackground@2x.png'
import { useHistory } from 'react-router-dom'

const StyledItem = styled.div`
  background-image: url(${bgGradient}), url(${(props: any) => props.backgroundImageURL});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 20px;
  box-sizing: border-box;
  
  @media (min-width: 1024px) {
    background-size: 100%;
    transition: background-size 0.2s ease-in-out;
    
    &:hover {
      cursor: pointer;
      background-size: 102%;
    }
  }
`

export const StyledH2 = styled.h2`
  margin: 0;
  font-size: 16px;
`

export const StyledCategory = styled.span`
  font-size: 12px;
`

const RestListItem = ({info}: RestListItemProps) => {
  const history = useHistory()

  const handleClick = (name: string) => {
    history.push(`/restaurant/${name}`)
  }

  const {
    name,
    category
  } = info

  return (
    <StyledItem
      {...info}
      onClick={() => {
        handleClick(name)
      }}
    >
      <StyledH2>
        {name}
      </StyledH2>
      <StyledCategory>
        {category}
      </StyledCategory>
    </StyledItem>
  )
}

type RestListItemProps = {
  info: {
    name: string,
    category: string
  }
}

export default RestListItem
