import React from 'react'
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils';
import Image from 'next/image';

export default function SearchTab({ imgUrl, label, activeTab, setActiveTab }: SearchTabProps) {
    const isActive = label === activeTab!;
    return (
        <div 
            className={cn('search-tab', {
                'search-tab-active': isActive
            })}
            onClick={() => setActiveTab!(label)}
        >
            <div className='h-4 relative aspect-square'>
                <Image 
                    className={`${isActive && 'invert'}`}
                    src={imgUrl}
                    alt={label}
                    fill={true}
                    style={{objectFit: 'cover', objectPosition: 'center'}}
                />
            </div>
            {label}
        </div>
    )
}
