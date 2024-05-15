import React, { ReactNode } from 'react'

interface HomeProps {
    title ?: string,
    id ?: string,
    children: ReactNode
}
export default function HomeItem({title,id,children}:HomeProps) {
  return (
    <div id={id} className="min-h-screen w-full p-[40px] text-black pt-24 dark:text-red-600">
        <h2 className='text-center w-full leading-8 text-[2.5rem]' data-aos="zoom-in">
            {title}
            <div className="w-20 h-1 bg-slate-500 rounded-md mx-auto mt-2 dark:invert"></div>
        </h2>
    <div className="py-4">{children}</div>
  </div>
  )
}
