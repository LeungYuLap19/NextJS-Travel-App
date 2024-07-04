import React from 'react'
import Photo from './Photo'
import { Rating } from '@mui/material'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'
import { formUrlQuery } from '@/lib/utils'

export default function ResultsItem({ item }: { item: PlaceItem }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleOnClick = () => {
        const newUrl = formUrlQuery({
            params: searchParams.toString(),
            query: {
                id: item.id,
                type: 'reviews',
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
                {
                    item.photos ?
                    <Photo placeName={item.photos[0].name} /> :
                    <Photo />
                }
            </div>

            <div className='results-item-label'>
                <div className='results-item-info'>
                    <p className='truncate'>{item.displayName.text}</p>
                    <p className='text-xs text-customBlack-100 truncate'>
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
                    width={20} height={20}
                />
            </div>
        </div>
    )
}
