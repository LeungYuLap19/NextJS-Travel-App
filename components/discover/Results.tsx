'use client';
import React, { useEffect, useState } from 'react';
import Subtitle from './Subtitle';
import ResultsItem from './ResultsItem';
import { useSearchParams } from 'next/navigation';
import { filterItemData, getPlacesFromLocal } from '@/lib/actions/places.actions';

export default function Results() {
  const searchParams = useSearchParams();
  const textQuery = searchParams.get('textQuery');
  const type = searchParams.get('type');
  const subtitle = textQuery && type
    ? type === 'All'
      ? `Popular places in ${textQuery}`
      : `${type} in ${textQuery}`
    : 'Popular places near you';
  const [placeItems, setPlaceItems] = useState<PlaceItem[]>([]);

  useEffect(() => {
    if (!textQuery || !type) {
      const defaultPlaces = getPlacesFromLocal('defaultPlaces');
      setPlaceItems(defaultPlaces);
    }
    else {
      const data = getPlacesFromLocal('places');
      setPlaceItems(data);
    }
  }, [textQuery, type]);

  return (
    <div className='discover-results' id='results'>
      {placeItems && (
        <>
          <Subtitle title={subtitle} />
          <div className='results-grid'>
            {placeItems.map((item: PlaceItem) => (
              <ResultsItem key={item.id} item={item} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}