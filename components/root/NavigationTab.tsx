'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

export default function NavigationTab({ label, route, type }: NavigationTabProps) {
    const pathname = usePathname();
    const isActive = pathname === route;

    return (
        <Link
            href={route}
            className={cn('nav-tab', {
                'nav-tab-active': isActive,
                'max-lg:hidden max-2xl:text-sm': type === 'top'
            })}
        >
            <p>{label}</p>
        </Link>
    )
}
