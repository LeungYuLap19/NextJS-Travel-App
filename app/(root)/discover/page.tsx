'use client'
import Header from '@/components/discover/Header'
import Results from '@/components/discover/Results'
import Search from '@/components/discover/Search'
import SearchTab from '@/components/discover/SearchTab'
import Subtitle from '@/components/discover/Subtitle'
import { searchTabs } from '@/constants'
import React, { useState } from 'react'

export default function page() {
  // temp active tab
  const [activeTab, setActiveTab] = useState<string>(searchTabs[0].label);

  return (
    <div className='discover'>
      <Header 
        title={<>Where do<br />you want to go?</>}
      />

      <div className='search-box'>
        <Search />
        <Subtitle 
          title={<>Categories</>}
          style={'md:hidden'}
        />
        <div className='search-tabs'>
          {
            searchTabs.map(tab => {
              return (
                <SearchTab 
                  label={tab.label}
                  imgUrl={tab.imgUrl}
                  // temp active tab
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                />
              )
            })
          }
        </div>
      </div>
      
      <Results 
        tab={'Popular Places Around You'}
      />
    </div>
  )
}
