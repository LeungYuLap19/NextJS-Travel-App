'use client'
import PhotosCard from '@/components/details/PhotosCard'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Details from '@/components/details/Details';
import Reviews from '@/components/details/Reviews';
import { getPlaceById } from '@/lib/actions/places.actions';
import { placeDetails } from '@/lib/actions/apis.actions';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  const [place, setPlace] = useState(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [item, setItem] = useState<PlaceItem | null>(null);
  
  const loadPlaceData = async () => {
    const placeItem = getPlaceById(id!, 'places') || getPlaceById(id!, 'defaultPlaces');
    setItem(placeItem);
    const details = await placeDetails(id!);
    setPlace(details);
    setReviews(details.reviews);
  }

  useEffect(() => {
    loadPlaceData();
  }, [id]);

  const handleTabClick = (newType: string) => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set('type', newType);
    router.push(currentUrl.toString());
  };

  return (
    <div className='details-page'>
      {
        place && reviews && item &&
        <>
          <PhotosCard item={item} />
          <div className='w-full'>
            <Tabs defaultValue={type!} className='w-full flex flex-col items-start max-md:items-center relative'>
              <TabsList className='p-0 mb-7 absolute top-0 left-0 w-full md:justify-start bg-customWhite-100 z-40 rounded-none'>
                <TabsTrigger 
                  value="reviews" 
                  className={cn('details-tab', {
                    'details-tab-active': type === 'reviews'
                  })}
                  onClick={() => handleTabClick('reviews')}
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger 
                  value="details" 
                  className={cn('details-tab', {
                    'details-tab-active': type === 'details'
                  })}
                  onClick={() => handleTabClick('details')}
                >
                  Details
                </TabsTrigger>
              </TabsList>
              <TabsContent value="details" className='details-content'>
                <Details details={place} />
              </TabsContent>
              <TabsContent value="reviews" className='details-content'>
                <Reviews reviews={reviews} />
              </TabsContent>
            </Tabs>
          </div>
        </>
      }
    </div>
  )
}