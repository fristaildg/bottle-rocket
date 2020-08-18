import React from 'react'

const API_KEY = process.env.REACT_APP_MAPS_API_KEY

const containerStyle = {
  width: '100%',
  height: '180px'
};

const RestMap = ({lat, lng, address}: RestMapProps) => {
  const centerCoords = `${lat}, ${lng}`

  return (
    <iframe
      title='google map'
      style={containerStyle}
      src={`https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${address}&center=${centerCoords}&zoom=15`}
    >
    </iframe>
  )
}

type RestMapProps = {
  lat: number,
  lng: number,
  address: string[]
}

export default RestMap
