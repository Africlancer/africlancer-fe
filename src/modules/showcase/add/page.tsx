import React from 'react'
import { AddShowcaseForm, AddShowcaseHero } from './components'

export const AddShowcasePage = () => {
  return (
    <div className='bg-skin-alt'>
      <div className='bg-skin-accent text-white p-10 pb-16'>
        <h1 className='text-4xl font-black mb-2'>Submit a Showcase</h1>
        <p className='text-base leading-loose'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim tempora earum alias! Suscipit officiis odio, saepe ipsam natus illum fugiat totam quidem pariatur aperiam consequuntur possimus quia animi debitis dicta, quisquam laboriosam ducimus. Facere voluptate sint modi, minima accusamus quia suscipit excepturi qui animi molestiae iste autem ipsa, voluptates voluptatibus.
        </p>
      </div>

      <div className='px-10'>
        <div className='bg-skin-base w-full h-full shadow-lg rounded-md -translate-y-10 px-14 py-10'>
          <AddShowcaseForm/>
        </div>
      </div>
    </div>
  )
}

