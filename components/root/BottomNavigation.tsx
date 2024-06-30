import { navLinks } from '@/constants'
import React from 'react'
import BottomNavigationTab from './NavigationTab'

export default function BottomNavigation() {
    return (
        <div className='bot-nav'>
            {
                navLinks.map(link => {
                    return (
                        <BottomNavigationTab
                            key={link.label}
                            label={link.label}
                            route={link.route}
                            type='bot'
                        />
                    )
                })
            }
        </div>
    )
}
