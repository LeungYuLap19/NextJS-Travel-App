import { cn } from '@/lib/utils'
import React from 'react'

export default function Subtitle({ title, style }: HeaderProps) {
  return (
    <p className={cn('subtitle', style)}>
        {title}
    </p>
  )
}
