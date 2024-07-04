import React from 'react'
import Badge from './Badge'
import DetailsTable from './DetailsTable'
import Map from './Map'
import { Button } from '../ui/button'
import { filterPaymentOptions, filterServicesData, getOpeningNow } from '@/lib/actions/places.actions'
import { parseOpeningHours } from '@/lib/utils'
import Link from 'next/link'

export default function Details({ details }: { details: Place }) {
  const services: string[] = filterServicesData(details);
  const payments: string[] = filterPaymentOptions(details);
  const { isOpening, openClose } = getOpeningNow(details);
  const periodsArr = parseOpeningHours(details.currentOpeningHours ? details.currentOpeningHours.periods : null);

  return (
    <div className='content-details'>
      {
        details.editorialSummary &&
        <div className='content-details-section'>
          <p className='subtitle'>Overview</p>
          <p className='max-2xl:text-sm'>{details.editorialSummary.text}</p>
        </div>
      }

      {
        services.length > 0 &&
        <div className='content-details-section'>
          <p className='subtitle'>Services</p>
          <div className='flex gap-2 flex-wrap'>
            {
              services.map((service: string) => (
                <Badge key={service} text={service} />
              ))
            }
          </div>
        </div>
      }

      {
        payments.length > 0 && 
        <div className='content-details-section'>
          <p className='subtitle'>Payments</p>
          <div className='flex gap-2 flex-wrap'>
            {
              payments.map((payment: string) => (
                <Badge key={payment} text={payment} />
              ))
            }
          </div>
        </div>
      }

      {
        isOpening && openClose && periodsArr &&
        <div className='content-details-section'>
          <p className='subtitle'>Opening Hours</p>
          <div className='flex flex-col gap-5'>
            <p className='max-2xl:text-sm font-semibold'>{isOpening + ' ∙ '}
              <span className='font-normal'>{openClose}</span>
            </p>
            <div className='flex flex-col'>
              {
                periodsArr.map((period, index) => (
                  <DetailsTable key={index} label={period.weekday} data={period.openingHours} first={index === 0 ? true : false}/>
                ))
              }
            </div>
          </div>
        </div>
      }

      <div className='content-details-section'>
        <p className='subtitle'>Basic Information</p>
        <div className='flex flex-col'>
          <DetailsTable label='Website' data={details.websiteUri} />
          <DetailsTable label="Address" data={details.formattedAddress} /> 
          <DetailsTable label='Phone' data={details.internationalPhoneNumber} />
        </div>
        <Map latitude={details.location.latitude} longitude={details.location.longitude} />
        <Link href={details.googleMapsUri} target='_blank'>
          <Button className='w-fit bg-customWhite-200'>Open In Google Map</Button>
        </Link>
      </div>
    </div>
  )
}
