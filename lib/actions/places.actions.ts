import { formmatedTime } from "../utils";

function storePlacesToLocal({ key, data }: StorePlacesToLocalParams) {
    try {
        const jsonData = JSON.stringify(data);
        localStorage.setItem(key, jsonData);
    } catch (error) {
        console.error('Error storing data in local storage:', error);
    }
}

function getPlacesFromLocal(key: string): Place[] {
    try {
        const jsonData = localStorage.getItem(key);
        
        if (jsonData) {
            return JSON.parse(jsonData);
        }
        return [];
    } catch (error) {
        console.error('Error getting data in local storage:', error);
        return [];
    }
}

function getPlaceById(id: string, key: string): Place | null {
    try {
        const places = getPlacesFromLocal(key);
        if (places) {
            const place = places.find((place: Place) => place.id === id);
            return place || null;
        }
        return null;
    } catch (error) {
        console.error('Error getting data in local storage:', error);
        return null;
    }
}

function getOpeningNow(data: Place): { isOpening: string, openClose: string } {
    if (!data.currentOpeningHours) {
        return { isOpening: '', openClose: '' };
    }
    const currentOpeningHours = data.currentOpeningHours;
    const next = data.currentOpeningHours.periods[0];
    const isOpening = currentOpeningHours.openNow ? 
    'Opening Now' : 'Not Opening Now';
    const openClose = currentOpeningHours.openNow ?
    `Close at ${formmatedTime(next.close.hour, next.close.minute)}` :
    `Open at ${formmatedTime(next.open.hour, next.open.minute)}`;
    return {isOpening: isOpening, openClose: openClose};
}

function filterPlacesData(data: any): Place[] {
    return data.map((place: any): Place => ({
        id: place.id,
        types: place.types,
        internationalPhoneNumber: place.internationalPhoneNumber,
        formattedAddress: place.formattedAddress,
        location: place.location,
        viewport: place.viewport,
        rating: place.rating,
        googleMapsUri: place.googleMapsUri,
        websiteUri: place.websiteUri,
        priceLevel: place.priceLevel,
        userRatingCount: place.userRatingCount,
        displayName: place.displayName,
        takeout: place.takeout,
        delivery: place.delivery,
        dineIn: place.dineIn,
        reservable: place.reservable,
        servesBreakfast: place.servesBreakfast,
        servesLunch: place.servesLunch,
        servesBrunch: place.servesBrunch,
        servesDinner: place.servesDinner,
        servesBeer: place.servesBeer,
        servesWine: place.servesWine,
        currentOpeningHours: place.currentOpeningHours,
        currentSecondaryOpeningHours: place.currentSecondaryOpeningHours,
        editorialSummary: place.editorialSummary,
        reviews: place.reviews,
        photos: place.photos,
        paymentOptions: place.paymentOptions
    }));
}

function filterItemData(data: Place[]): PlaceItem[] {
    return data.map((place: Place) => ({
        id: place.id,
        displayName: place.displayName,
        types: place.types,
        rating: place.rating,
        photos: place.photos,
    }));
}

function filterServicesData(data: Place): string[] {
    const services = [
        { name: 'Takeout', available: data.takeout },
        { name: 'Delivery', available: data.delivery },
        { name: 'Dine In', available: data.dineIn },
        { name: 'Reservable', available: data.reservable },
        { name: 'Serves Breakfast', available: data.servesBreakfast },
        { name: 'Serves Brunch', available: data.servesBrunch },
        { name: 'Serves Lunch', available: data.servesLunch },
        { name: 'Serves Dinner', available: data.servesDinner },
        { name: 'Serves Beer', available: data.servesBeer },
        { name: 'Serves Wine', available: data.servesWine }
    ];

    return services
        .filter(service => service.available)
        .map(service => service.name);
}

function filterPaymentOptions(data: Place): string[] {
    if (!data.paymentOptions) return [];
    
    const options = [
        { name: 'Credit Cards', available: data.paymentOptions.acceptsCreditCards },
        { name: 'Debit Cards', available: data.paymentOptions.acceptsDebitCards },
        { name: 'Cash Only', available: data.paymentOptions.acceptsCashOnly },
        { name: 'NFC', available: data.paymentOptions.acceptsNfc }
    ];

    return options
        .filter(option => option.available)
        .map(option => option.name);
}

export {
    storePlacesToLocal,
    getPlacesFromLocal,
    getPlaceById,
    getOpeningNow,
    filterPlacesData,
    filterItemData,
    filterServicesData,
    filterPaymentOptions
}