import React, { ReactNode } from 'react'


export interface SkillProps {
    name: string,
    status: "Active" | "Lock",
    icon: ReactNode
}
export default function SkillItem({name,status,icon}:SkillProps) {
  return (
    <div className="inline-flex flex-col items-center p-6 text-center text-[#513c06] text-[1rem] font-bold">
        <div className='w-[40px] mx-auto dark:invert'>{icon}</div>
        <h4>{name}</h4>
    </div>
  )
}
