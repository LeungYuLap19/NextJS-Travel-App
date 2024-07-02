'use client'
import PhotosCard from '@/components/details/PhotosCard'
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Details from '@/components/details/Details';
import Reviews from '@/components/details/Reviews';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  const handleTabClick = (newType: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('type', newType);
    router.push(currentUrl.toString());
  };

  return (
    <div className='details-page'>
      <PhotosCard />
      <div className='flex-grow'>
        <Tabs defaultValue="Details" className='w-full flex flex-col items-start max-md:items-center relative'>
          <TabsList className='p-0 mb-7 absolute top-0 left-0 w-full md:justify-start bg-customWhite-100'>
            <TabsTrigger 
              value="Details" 
              className={cn('details-tab', {
                'details-tab-active': type === 'details'
              })}
              onClick={() => handleTabClick('details')}
            >
              Details
            </TabsTrigger>
            <TabsTrigger 
              value="Reviews" 
              className={cn('details-tab', {
                'details-tab-active': type === 'reviews'
              })}
              onClick={() => handleTabClick('reviews')}
            >
              Reviews
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Details" className='details-content'>
            <Details />
          </TabsContent>
          <TabsContent value="Reviews" className='details-content'>
            <Reviews />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
