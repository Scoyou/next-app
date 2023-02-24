import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ lat, lng, text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

const Map = ({ location, zoomLevel }) => (
  <GoogleMapReact
    bootstrapURLKeys={{ key: process.env.GOOGLE_MAPS_API }}
    defaultCenter={location}
    defaultZoom={zoomLevel}
  >
    <LocationPin
      lat={location.lat}
      lng={location.lng}
      text={location.address}
    />
  </GoogleMapReact>
)

export default Map
