
declare interface AuthFeaturesProps {
    text: React.ReactNode;
    index: number;
}

declare interface LogoProps {
    height: number;
    width: number;
    style: string;
}

declare interface AuthFormProps {
    type: 'sign-in' | 'sign-up';
}

declare interface NavigationTabProps {
    label: 'Discover' | 'Planner' | 'Blog' | 'Bookings';
    route: string;
    type?: 'top' | 'bot';
}

declare interface HeaderProps {
    title: React.ReactNode;
    style?: string;
}

declare interface SearchTabProps {
    imgUrl: string;
    label: string; 
    activeTab?: string;
    setActiveTab?: (tab: string) => void;
}

declare interface PhotoProps {
    placeName?: string;
    morePhoto?: boolean;
}

declare interface DetailsTableProps {
    label: string;
    data: string;
    first?: boolean;
}