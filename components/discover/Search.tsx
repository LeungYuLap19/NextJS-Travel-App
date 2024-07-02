import React from 'react'
import { Input } from "@/components/ui/input"
import { handleKeyDown } from '@/lib/utils'

export default function Search() {
  const handleEvent = (): void => {
    const element = document.getElementById('results');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <Input 
      className='search-input'
      placeholder={'Search for places...'}
      onKeyDown={(event) => handleKeyDown({event, func: handleEvent})}
    />
  )
}
