import { cn } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

export default function Logo({ height, width, style }: LogoProps) {
  return (
    <div className='flex w-full items-center'>
       <Image
            src={'/icons/logo.png'}
            alt='logo'
            width={width} height={height}
        />  
        <p className={cn('logo-text ', style)}>
            AdventureHub.
        </p>
    </div>
  )
}
