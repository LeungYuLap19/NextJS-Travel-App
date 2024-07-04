// Nearby search, Place details, Text search
declare type PlaceItem = {
    id: string;
    rating: number;
    types: string[];
    displayName: LocalizedText;
    photos: Photo[];
}

declare type Place = {
    id: string;
    types: string[];
    internationalPhoneNumber: string;
    formattedAddress: string;
    location: PinLocation;
    viewport: Viewport;
    rating: number;
    googleMapsUri: string;
    websiteUri: string;
    priceLevel?: number; 
    userRatingCount: number;
    displayName: LocalizedText;
    takeout?: boolean; 
    delivery?: boolean; 
    dineIn?: boolean; 
    reservable?: boolean; 
    servesBreakfast?: boolean; 
    servesLunch?: boolean; 
    servesBrunch?: boolean; 
    servesDinner?: boolean;
    servesBeer?: boolean;
    servesWine?: boolean
    currentOpeningHours: CurrentOpeningHours;
    currentSecondaryOpeningHours?: CurrentSecondaryOpeningHours[]; 
    editorialSummary: LocalizedText;
    reviews: Review[];
    photos: Photo[];
    paymentOptions?: PaymentOptions; 
}

declare type LocalizedText = {
    text: string;
    languageCode: string;
}

declare type PinLocation = {
    latitude: number;
    longitude: number;
}

declare type Viewport = {
    low: PinLocation;
    high: PinLocation;
}

declare interface CurrentOpeningHours {
    openNow: boolean;
    periods: Period[];
    weekdayDescriptions: string[];
}

declare type OpenClose = {
    day: number;
    hour: number;
    minute: number;
    date: {
        year: number;
        month: number;
        day: number;
    };
}

declare type Period = {
    open: OpenClose;
    close: OpenClose;
}

declare interface CurrentSecondaryOpeningHours extends CurrentOpeningHours {
    secondaryHoursType: string;
}

declare type Review = {
    name: string;
    relativePublishTimeDescription: string;
    rating: number;
    text: LocalizedText;
    originalText: LocalizedText;
    authorAttribution: AuthorAttribution;
    publishTime: string;
}

declare type AuthorAttribution = {
    displayName: string;
    uri: string;
    photoUri: string;
}

declare type Photo = {
    name: string;
    widthPx: number;
    heightPx: number;
    authorAttributions: AuthorAttribution[];
}

declare type PaymentOptions = {
    acceptsCreditCards: boolean;
    acceptsDebitCards: boolean;
    acceptsCashOnly: boolean;
    acceptsNfc: boolean;
}

// Place photo
declare type PhotoApiResponse = {
    name: string;
    photoUri: string;
};

// User
declare interface SignInParams {
    email: string;
    password: string;
}

declare interface SignUpParams extends SignInParams {
    username: string;
    city: string;
}

declare type User = {
    userid: string;
    username: string;
    email: string;
    city: string;
    bio?: string;
    icon?: string;
} 

// functions types
declare type HandleKeyDownParams = {
    event: React.KeyboardEvent<HTMLInputElement>;
    func: () => void;
}

declare type UrlQueryParams = {
    params: string;
    query: Record<string, string>;
    extraRoute?: string;
};

declare type StorePlacesToLocalParams = {
    key: string;
    data: Place[]; // can be other types
}
  