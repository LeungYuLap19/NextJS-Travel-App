import React from 'react'
import {
  APIProvider,
  Map as GoogleMap,
  AdvancedMarker,
} from '@vis.gl/react-google-maps';

export default function Map({ latitude, longitude }: PinLocation) {
  const position = { lat: latitude, lng: longitude };
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY!}>
      <div className='map'>
        <GoogleMap
          zoom={15}
          center={position}
          mapId={process.env.NEXT_PUBLIC_GOOGLE_MAP_ID}
        >
          <AdvancedMarker position={position} />
        </GoogleMap>
      </div>
    </APIProvider>
    
  )
}
