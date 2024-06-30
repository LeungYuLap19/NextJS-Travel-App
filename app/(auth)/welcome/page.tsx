'use client'
import Image from 'next/image'
import React from 'react'
import { Button } from "@/components/ui/button"
import Features from '@/components/auth/Features'
import { useRouter } from 'next/navigation'
import Logo from '@/components/logo/Logo'

export default function page() {
  const router = useRouter();

  return (
    <div className='auth-container'>
      <div className='auth-wrapper'>
        <Logo 
          height={108} width={120}
          style='!text-4xl'
        />

        <div className='auth-col px-4 mb-6'>
          <p className='text-center text-2xl font-bold text-customBlack-300'>Your ultimate travel companion</p>
          <p className='text-center text-customBlack-200'>Get ready to embark on your next adventure with ease and
          discover the world like never before!</p>
        </div>

        <div className='auth-col px-4 mb-6'>
          <Features 
            text={ <>explore exciting cities, find the<br/>
              best attractions, restaurants</> }
            index={1}
          />

          <Features 
            text={ <>Add places to your planner<br/>
              and collaborate with friends</> }
            index={2}
          />

          <Features 
            text={ <>compare prices for flights and<br/>
              hotels to get the best deals</> }
            index={3}
          />
        </div>

        <div className='auth-col px-4'>
          <Button 
            className='auth-button'
            onClick={():void => { router.push('/sign-in'); }}
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}
