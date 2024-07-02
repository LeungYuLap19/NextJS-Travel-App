import React from 'react'
import Badge from './Badge'
import DetailsTable from './DetailsTable'

export default function Details() {
  return (
    <div className='content-details'>
      <div className='content-details-section'>
        <p className='subtitle'>Overview</p>
        <p className='max-2xl:text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='content-details-section'>
        <p className='subtitle'>Services</p>
        <div className='flex gap-2 flex-wrap'>
          <Badge text='test' />
        </div>
      </div>

      <div className='content-details-section'>
        <p className='subtitle'>Payments</p>
        <div className='flex gap-2 flex-wrap'>
          <Badge text='test' />
        </div>
      </div>

      <div className='content-details-section'>
        <p className='subtitle'>Opening Hours</p>
        <div className='flex flex-col gap-5'>
          <p className='max-2xl:text-sm font-semibold'>{'Not Opening Now ∙ '}
            <span className='font-normal'>Open at 10:00 am tomorrow</span>
          </p>
          <div className='flex flex-col'>
            <DetailsTable label="Mon" data="9:00 AM - 6:00 PM" first={true} />
            <DetailsTable label="Tue" data="9:00 AM - 6:00 PM" />
            <DetailsTable label="Wed" data="9:00 AM - 6:00 PM" />
            <DetailsTable label="Thu" data="9:00 AM - 6:00 PM" />
            <DetailsTable label="Fri" data="9:00 AM - 6:00 PM" />
            <DetailsTable label="Sat" data="10:00 AM - 4:00 PM" />
            <DetailsTable label="Sun" data="Closed" />
          </div>
        </div>
      </div>

      <div className='content-details-section'>
        <p className='subtitle'>Basic Information</p>
        <div className='flex flex-col'>
          <DetailsTable label="Address" data="123 Example Street, Example City, EX 12345, Country" /> 
          <DetailsTable label='Phone' data='+1 234-567-890' />
        </div>
      </div>
    </div>
  )
}
