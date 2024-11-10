import React, { ReactNode } from 'react'


interface ProjectItemProps {
  name: string;
  description: string;
  tech: string[];
  gif_preview: string;
  link_demo: {
    UI?: string;
    Control?: string;
  }[];
  link_git: string;
}


export default function ProjectItem({name, description, tech, gif_preview, link_demo, link_git}: ProjectItemProps) {
  return (
   <div className='flex flex-row'>
    <img src={gif_preview} alt=""  className='w-48'/>
    <div className='ml-4'>
        <p className='font-semibold text-xl'>Name: {name}</p>
        <p>Tech: {tech.toString()}</p>
        <p>Description: {description}</p>
        {/* <p>{link_demo}</p> */}
        <p>Demo: <a target='_blank' href={link_demo?.UI}>{link_demo?.UI}</a></p>
        <p>Demo: <a target='_blank' href={link_demo?.Control}>{link_demo?.Control}</a></p>
        <p>
        Git: <a target='_blank' href={link_git}>{link_git}</a>
        </p>
    </div>
   </div>
  )
}
