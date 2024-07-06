import React, { useEffect, useRef } from 'react'
import { Input } from "@/components/ui/input"
import { formUrlQuery, handleKeyDown } from '@/lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'
import { textSearch } from '@/lib/actions/apis.actions';
import { filterPlacesData, storePlacesToLocal } from '@/lib/actions/places.actions';

export default function Search({ activeTab }: { activeTab: string }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const textQuery = searchParams.get('textQuery') || '';
  const router = useRouter();

  const updateUrl = (textQuery: string, type: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      query: {
        textQuery: textQuery,
        type: type,
      },
    });
    router.push(newUrl, { scroll: false });
  }

  const getPlaces = async () => {
    const query = `${activeTab === 'All' ? 'popluar places, ' : activeTab.toLowerCase() + ' in'} ${inputRef.current?.value}`
    const data = inputRef.current?.value && await textSearch(query);
    storePlacesToLocal({ key: 'places', data: data.places });
  }

  const handleEvent = async () => {
    if (inputRef.current?.value) {
      await getPlaces();
      updateUrl(inputRef.current?.value, activeTab);
      const element = document.getElementById('results');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  return (
    <Input 
      defaultValue={textQuery}
      className='search-input'
      placeholder={'Search for places...'}
      ref={inputRef}
      onKeyDown={(event) => handleKeyDown({event, func: handleEvent})}
    />
  )
}
