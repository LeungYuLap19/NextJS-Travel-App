import Image from 'next/image'
import React from 'react'

export default function Photo({ imgUrl = '/root/icons/picture.svg', placeName }: PhotoProps) {
    const isDefaultImage = imgUrl === '/root/icons/picture.svg';

    return (
        <div className='flex justify-center items-center h-full w-full'>
            <Image 
                className={`${isDefaultImage && 'invert'} xl:w-10`}
                src={imgUrl}
                alt={placeName}
                {...(isDefaultImage ? { height: 30, width: 30 } : { fill: true, style: { objectFit: 'cover', objectPosition: 'center' } })}
            />
        </div>
        
    )
}