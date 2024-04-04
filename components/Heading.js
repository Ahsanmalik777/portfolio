import React from 'react'

const Heading = ({children}) => {
  return (
    <h3 className='capitalize text-base md:text-lg text-violet-700 dark:text-zinc-400 font-bold md-3'>{children}</h3>
  )
}

export default Heading
