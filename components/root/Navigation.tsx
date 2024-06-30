import React from 'react'
import Logo from '../logo/Logo'
import Link from 'next/link'
import { navLinks } from '@/constants'
import NavigationTab from './NavigationTab'

export default function Navigation() {
  return (
    <div className='top-nav'>
      <Logo height={60} width={60} style={'text-3xl'} />

      <div className='top-nav-tabs'>
        {
          navLinks.map((link) => {
            return (
              <NavigationTab
                key={link.label}
                label={link.label}
                route={link.route}
                type='top'
              />
            )
          })
        }

        <Link
          href={'/profile'}
          className='top-nav-profile'
        >
          {/* username first char */}
        </Link>
      </div>
    </div>
  )
}
