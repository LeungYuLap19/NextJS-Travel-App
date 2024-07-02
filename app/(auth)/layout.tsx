import Image from 'next/image'
import React from 'react'

export default function RootLayout({ children }: Readonly<{children: React.ReactNode}>) {
    return (
        <main className='root'>
            {children}
            <div className='auth-bg'>
                <Image 
                    src={'/auth/bgs/bg2.jpg'}
                    alt='auth-background'
                    fill={true}
                    style={{objectFit: 'cover', objectPosition: 'center'}}
                />
            </div>
        </main>
    )
}
