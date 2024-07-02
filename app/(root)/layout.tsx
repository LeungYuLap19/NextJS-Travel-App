import BottomNavigation from '@/components/navigation/BottomNavigation'
import Navigation from '@/components/navigation/Navigation'
import React from 'react'

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='root py-7 px-[6%] flex-col !justify-start'>
            <div className='top-nav-container'>
                <Navigation />
            </div>
            
            <div className='w-full mt-[60px]'>
                {children}
            </div>

            <div className='bot-nav-container'>
                <BottomNavigation />
            </div>
        </main>
    )
}
