import { getPhoto } from '@/lib/actions/apis.actions';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Photo({ placeName, morePhoto=false }: PhotoProps) {
    
    const [imgUrl, setImgUrl] = useState<string>('/root/icons/picture.svg');

    useEffect(() => {
        const getImage = async () => {
            const url = await getPhoto(placeName!);
            url && setImgUrl(url);
        }
        placeName && getImage();
    }, []);

    return (
        <div className='flex justify-center items-center h-full w-full relative'>
            <Image 
                className={`${imgUrl === '/root/icons/picture.svg' && 'invert'} ${morePhoto && 'brightness-50'} xl:w-10`}
                src={imgUrl}
                alt={placeName || 'default image'}
                {...(imgUrl === '/root/icons/picture.svg' ? { height: 30, width: 30 } : { fill: true, style: { objectFit: 'cover', objectPosition: 'center' } })}
            />
        </div>
        
    )
}