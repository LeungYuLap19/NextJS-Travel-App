import { cn } from '@/lib/utils'
import React from 'react'

export default function DetailsTable({ label, data, first = false }: DetailsTableProps) {
    return (
        <div className={cn('detailsTable', {
            'font-semibold': first
        })}>
            <p className={`${'w-14 flex-shrink-0'} 
            ${label === 'Address' || label === 'Phone' ? 'w-16' : ''}`}>{label}</p>
            <p>{data}</p>
        </div>
    )
}
