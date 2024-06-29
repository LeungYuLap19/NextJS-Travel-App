import { cn } from '@/lib/utils';
import React from 'react'

export default function Features({ text, index }: AuthFeaturesProps) {
    const isRight = index === 2 ? true : false;
    return (
        <div className={cn('auth-welcome-features', {
            ' self-end': isRight,
            ' bg-customGreen-200': index === 1,
            ' bg-customGreen-300': index === 2,
            ' bg-customGreen-400': index === 3,
        })}>
            <p className={cn('text-customWhite-200', {
                ' text-end': isRight,
            })}>
                {text}
            </p>
        </div>
    )
}
