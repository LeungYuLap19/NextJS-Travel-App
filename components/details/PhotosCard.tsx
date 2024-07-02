import React from 'react'
import Photo from '../discover/Photo'
import Image from 'next/image'
import { Rating } from '@mui/material'

export default function PhotosCard() {
  return (
    <div className='photo-card'>
      <div className='w-full bg-customBlack-100 relative flex-grow'>
        <Photo placeName={'test'} />
      </div>

      <div className='results-item-label h-[90px] !px-5 !pt-1 pb-2'>
        <div className='results-item-info'>
          <p className='truncate text-lg'>Place Name</p>
          <p className='text-sm text-customBlack-100 truncate'>Types</p>
          <Rating
            className='mt-2' 
            name="half-rating-read" 
            defaultValue={0} 
            precision={0.5} 
            size="small" readOnly 
          />
        </div>

        <Image
          className='cursor-pointer'
          src={'/root/icons/add.svg'}
          alt='add-icon'
          width={25} height={25}
        />
      </div>
    </div>
  )
}
