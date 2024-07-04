'use client'
import React, { useEffect, useState } from 'react'
import Subtitle from './Subtitle'
import ResultsItem from './ResultsItem'
import { filterItemData, getPlacesFromLocal } from '@/lib/actions/places.actions'

export default function Results({ tab }: { tab: string }) {
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeItems, setPlaceItems] = useState<PlaceItem[]>([]);

  useEffect(() => {
    const placesFromLocal = getPlacesFromLocal('places');
    setPlaces(placesFromLocal);
    const filteredItems = filterItemData(placesFromLocal);
    setPlaceItems(filteredItems);
  }, []);

  return (
    <div className='discover-results' id='results'>
        <Subtitle title={tab} />

        <div className='results-grid'>
            {
              places &&
              placeItems.map((item: PlaceItem) => {
                return (
                  <ResultsItem key={item.id} item={item} />
                )
              })
            }
        </div>
    </div>
  )
}
