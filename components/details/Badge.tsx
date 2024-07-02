import React from 'react'

export default function Badge({ text }: { text: string }) {
  return (
    <div className='px-2 py-1 bg-customWhite-200 rounded-lg h-fit w-fit max-2xl:text-sm'>
        {text}
    </div>
  )
}
