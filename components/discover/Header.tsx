import React from 'react'

export default function Header({ title }: HeaderProps) {
  return (
    <p className='header'>
        {title}
    </p>
  )
}
