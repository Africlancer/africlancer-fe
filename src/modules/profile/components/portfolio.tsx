import { ApButton } from '@/src/components/button'
import { ArrowRightIcon } from '@/src/components/icons/customIcons'
import Link from 'next/link'
import React from 'react'

export const Portfolioitems = () =>
{
  return (
            <div className='bg-skin-base shadow-xl w-full rounded-xl col-span-2'>
            <div className='border-skin-border border-b px-6 py-2 flex justify-between'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-3 text-skin-inverted'>Portfolio Items</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-skin-muted">
                        <path fillRule="evenodd" d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                    </svg>
                </div>

                <Link href='/my-portfolio'>
                <ApButton
                    onClick={() => {}}
                    className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                >
                    Manage
                    <ArrowRightIcon/>
                </ApButton>
                </Link>
            </div>

            <div className='h-80 flex items-center justify-center p-16 flex-col'>
            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 text-green-500' fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                <path d="M2 9l-1-7h5.694c1.265 1.583 1.327 2 3.306 2h13l-1 5h-4.193l-3.9-3-1.464 1.903 1.428 1.097h-1.971l-3.9-3-2.307 3h-3.693zm-2 2l2 11h20l2-11h-24z"/>
            </svg>
            <p className='mt-3 text-skin-inverted'>No portfolio items have been added yet.</p>
            </div>  
        </div>
  )
}