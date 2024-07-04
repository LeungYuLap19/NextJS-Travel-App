'use server'
import axios from 'axios';
require('dotenv').config();

async function getPhoto(resourceName: string){
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

export {
  getPhoto
}