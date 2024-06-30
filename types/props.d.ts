
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
    type: 'top' | 'bot';
}