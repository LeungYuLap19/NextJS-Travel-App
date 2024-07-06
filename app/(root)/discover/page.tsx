'use client'
import Header from '@/components/discover/Header'
import Results from '@/components/discover/Results'
import Search from '@/components/discover/Search'
import SearchTab from '@/components/discover/SearchTab'
import Subtitle from '@/components/discover/Subtitle'
import { searchTabs } from '@/constants'
import { textSearch } from '@/lib/actions/apis.actions'
import { getPlacesFromLocal, storePlacesToLocal } from '@/lib/actions/places.actions'
import { useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function page() {
  const searchParams = useSearchParams();
  const type = searchParams.get('type') || searchTabs[0].label;
  const [activeTab, setActiveTab] = useState<string>(type);
  const userLoc = 'Ma On Shan, Hong Kong'; // testing

  const getDefaultPlaces = async () => {
    const query = 'popluar places, ' + userLoc;
    const data = await textSearch(query);
    storePlacesToLocal({ key: 'defaultPlaces', data: data.places });
  }

  useEffect(() => {
    const defaultPlaces = getPlacesFromLocal('defaultPlaces');
    if (defaultPlaces.length == 0) {
      getDefaultPlaces();
    }
  }, []);

  return (
    <div className='discover'>
      <Header 
        title={<>Where do<br />you want to go?</>}
      />

      <div className='search-box'>
        {/* search box */}
        <Search activeTab={activeTab} />
        <Subtitle 
          title={<>Categories</>}
          style={'md:hidden'}
        />
        <div className='search-tabs'>
          {
            searchTabs.map(tab => {
              return (
                // search types
                <SearchTab 
                  key={tab.label}
                  label={tab.label}
                  imgUrl={tab.imgUrl}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              )
            })
          }
        </div>
      </div>
      
      {/* results display */}
      <Results />
    </div>
  )
}
