import React from 'react'
import SectionWrapper from './SectionWrapper'
import Heading from './Heading'
import data from '@/data/projects'
import Image from 'next/image'
import { FaArrowTrendUp } from "react-icons/fa6";


const Projects = () => {
    return (
        
        <SectionWrapper>
            <Heading>Projects</Heading>
            {data.map(projects => (
                <div key={projects.id} className='flex flex-wrap gap-5 w-full lg:w-8/12 mb-10'>
                    <div className='relative w-full md:w-[120px] pt-[56.25%] md:pt-0 md:h-20 rounded-lg overflow-hidden'>
                        <Image src={projects.image} fill className='w-full h-full absolute top-0 left-0 bottom-0 right-0' alt='project image' />
                    </div>
                    <div className='flex-1'>
                    <div className='flex space-x-3'>
                    <h2 className='text-lg md:text-xl font-bold text-zinc-700 dark:text-zinc-400 leading-[25px]'>{projects.title}</h2>
                    <FaArrowTrendUp className='text-[20px] text-zinc-900 dark:text-white cursor-pointer'/>
                    </div>
                        
                        <p className='text-base font-semibold text-zinc-500 dark:text-zinc-400 mt-2'>{projects.description.length > 100 ? <span>{projects.description.slice(0, 100)}...</span> : projects.description}</p>
                    </div>
                </div>
            ))}
        </SectionWrapper>
    
    
        
    )
}

export default Projects
