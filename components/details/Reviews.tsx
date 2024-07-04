import React from 'react'
import Review from './Review'

export default function Reviews({ reviews }: { reviews: Review[] }) {
  return (
    <div className='flex flex-col gap-7'>
      {
        reviews &&
        reviews.map((review: Review, index) => {
          return (
            <Review key={index} review={review} />
          )
        })
      }
    </div>
  )
}
