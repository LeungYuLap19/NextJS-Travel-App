'use client'
import PhotosCard from '@/components/details/PhotosCard'
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useSearchParams, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import Details from '@/components/details/Details';
import Reviews from '@/components/details/Reviews';
import { filterItemData, getPlaceById } from '@/lib/actions/places.actions';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const id = searchParams.get('id');
  const type = searchParams.get('type');

  const [place, setPlace] = useState<Place | null>(null);
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [item, setItem] = useState<PlaceItem | null>(null);

  useEffect(() => {
    const fetchedPlace = getPlaceById(id!, 'places');
    if (fetchedPlace) {
      const placeItem = filterItemData([fetchedPlace]);
      setItem(placeItem[0]);
      setPlace(fetchedPlace);
      setReviews(fetchedPlace.reviews);
    }
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
          <div className='w-fit'>
            <Tabs defaultValue={type!} className='w-full flex flex-col items-start max-md:items-center relative'>
              <TabsList className='p-0 mb-7 absolute top-0 left-0 w-full md:justify-start bg-customWhite-100 z-5'>
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