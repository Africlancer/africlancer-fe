import React from 'react'
import { ShowcaseHero, ShowcaseItem } from './components'

export const ShowcasePage = () => {
  return (
    <div>
        <ShowcaseHero/>
        <div className='bg-skin-alt p-10'>
            <div className='grid grid-cols-3 gap-5'>
                <ShowcaseItem/>
                <ShowcaseItem/>
                <ShowcaseItem/>
                <ShowcaseItem/>
                <ShowcaseItem/>
                <ShowcaseItem/>
            </div>
        </div>
    </div>
  )
}