
import React from 'react'
import Photo from './Photo'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery } from '@/lib/utils'

export default function ResultsItem() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleOnClick = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            query: {
                id: 'testingID',
                type: 'details',
            },
            extraRoute: '/details'
        });
        router.push(newUrl, { scroll: false });
    }

    return (
        <div 
            className='results-item cursor-pointer'
            onClick={handleOnClick}
        >
            <div className='results-item-photo'>
                <Photo 
                    placeName='test'
                />
            </div>

            <div className='results-item-label'>
                <div className='results-item-info'>
                    <p className='truncate'>Place Name</p>
                    <p className='text-xs text-customBlack-100 truncate'>Types</p>
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
                    width={20} height={20}
                />
            </div>
        </div>
    )
}
