export const navLinks: NavigationTabProps[] = [
    {
        label: 'Discover',
        route: '/discover'
    },
    {
        label: 'Planner',
        route: '/planner'
    },
    {
        label: 'Blog',
        route: '/blog'
    },
    {
        label: 'Bookings',
        route: '/bookings'
    }
];

export const searchTabs: SearchTabProps[] = [
    {
        label: 'All',
        imgUrl: '/root/icons/all.svg'
    },
    {
        label: 'Attractions',
        imgUrl: '/root/icons/attractions.svg'
    },
    {
        label: 'Restaurants',
        imgUrl: '/root/icons/restaurants.svg'
    },
    {
        label: 'Shopping',
        imgUrl: '/root/icons/shopping.svg'
    },
    {
        label: 'Nightlife',
        imgUrl: '/root/icons/nightlife.svg'
    },
];

export const weekdays: string[] = [
    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
]

export const placesFieldMask = [
    'id',
    // 'types',
    'internationalPhoneNumber',
    'formattedAddress',
    'location',
    'viewport',
    // 'rating',
    'googleMapsUri',
    'websiteUri',
    // 'priceLevel',
    // 'userRatingCount',
    'displayName',
    // 'takeout',
    'delivery',
    'dineIn',
    'reservable',
    'servesBreakfast',
    'servesLunch',
    'servesBrunch',
    'servesDinner',
    'servesBeer',
    'servesWine',
    'currentOpeningHours',
    // 'currentSecondaryOpeningHours',
    'editorialSummary',
    'reviews',
    // 'photos',
    'paymentOptions',
    // 'nextPageToken'
].join(',');

export const placesItemFieldMask = [
    'places.id',
    'places.types',
    'places.rating',
    'places.displayName',
    'places.photos',
    'nextPageToken'
].join(',');