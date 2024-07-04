import React from 'react'
import Photo from '../discover/Photo'
import Image from 'next/image'
import { Rating } from '@mui/material'

export default function PhotosCard({ item }: { item: PlaceItem }) {
  const morePhotos = item.photos.length - 1;

  return (
    <div className='photo-card'>
      <div className='w-full bg-customBlack-100 relative flex-grow'>
        {
          item.photos ?
          <Photo placeName={item.photos[0].name} /> :
          <Photo />
        }
        {
          morePhotos > 0 &&
          <div className='absolute md:left-7 left-5 md:bottom-7 bottom-5 md:w-16 w-12 aspect-square rounded-lg border-2 border-customWhite-200 overflow-hidden cursor-pointer'>
            <div className='relative w-full h-full'>
              <Photo placeName={item.photos[1].name} morePhoto={true} />
              <p className='absolute top-0 left-0 w-full h-full flex justify-center items-center text-customWhite-200 text-xl'>{morePhotos + '+'}</p>
            </div>
          </div>
        }
      </div>

      <div className='results-item-label h-[90px] !px-5 !pt-1 pb-2'>
        <div className='results-item-info'>
          <p className='truncate text-lg'>{item.displayName.text}</p>
          <p className='text-sm text-customBlack-100 truncate'>
            {
              item.types.map((type: string) => {
                return (
                  <React.Fragment key={type}>
                    {type.replaceAll('_', ' ') + ', '}
                  </React.Fragment>
                )
              })
            }
          </p>
          <Rating
            className='mt-2' 
            name="half-rating-read" 
            defaultValue={item.rating} 
            precision={0.1} 
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
