'use server'
import { placesFieldMask, placesItemFieldMask } from '@/constants';
import axios from 'axios';
require('dotenv').config();

async function getPhoto(resourceName: string) {
  try {
    const res = await axios.get(`https://content-places.googleapis.com/v1/${resourceName}/media?maxHeightPx=1600&skipHttpRedirect=true&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);

    if (res) {
      return res.data.photoUri;
    }
    else {
      return null;
    }
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function textSearch(textQuery: string, nextPageToken?: string) {
  try {
    console.log('text searching')
    const res = await axios.post('https://places.googleapis.com/v1/places:searchText', {
      textQuery: textQuery,
      pageSize: 12,
      pageToken: nextPageToken
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        'X-Goog-FieldMask': placesItemFieldMask,
      }
    });
    return res.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function placeDetails(placeId: string) {
  try {
    const res = await axios.get(`https://places.googleapis.com/v1/places/${placeId}`, {
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
        'X-Goog-FieldMask': placesFieldMask,
      }
    });

    return res.data || null;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export {
  getPhoto,
  textSearch,
  placeDetails
}