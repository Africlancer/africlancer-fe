import { ApBadgeWithMarkIcon, ApClockIcon, ApLikeIcon } from '@/src/components'
import React from 'react'

interface IProps 
{
  professionalHeadline: string,
  recommendations: string,
  summary: string
}

export const SectionTwo: React.FC<IProps> = ({professionalHeadline, recommendations, summary}) => {
  return (
        <div className="ml-3 flex flex-col justify-between">
        <div>
          <div className="flex items-end">
            <h1 className="text-2xl text-skin-inverted font-bold">Paul A.</h1>
            <div className="flex items-center">
              <p className="ml-2 text-lg text-gray-400">
                paulandy32@gmail.com
              </p>
              <div className="bg-green-500 rounded-full h-2 w-2 ml-3"></div>
            </div>
          </div>
          
          <p className="text-base mt-1 text-skin-inverted">
            { professionalHeadline }
          </p>
          <div className="mt-3 text-base">
            <div className="flex">
              <p className="mr-4 text-skin-inverted">
                <span className="text-green-500 font-bold">N/A</span> Open
                Projects
              </p>
              <p className="text-skin-inverted">
                <span className="text-green-500 font-bold">N/A</span> Active
                Projects
              </p>
            </div>

            <div className="flex mt-3">
              <p className="mr-4 text-skin-inverted">
                <span className="text-green-500 font-bold">N/A</span> Past
                Projects
              </p>
              <p className="text-skin-inverted">
                <span className="text-green-500 font-bold">N/A</span> Total
                Projects
              </p>
            </div>
          </div>
        </div>

        <div className="text-base">
          <p className="mb-2 text-skin-inverted">{ summary }</p>
          <p className="mb-1 text-skin-inverted">
            <ApClockIcon/>
            It's currently 3:12 PM here
          </p>

          <p className="mb-1 text-skin-inverted">
            <ApBadgeWithMarkIcon/>
            Joined January 27, 2022
          </p>
          
          <p className="text-skin-inverted">
              <ApLikeIcon/>
            { recommendations } Recommendations
          </p>
        </div>
        </div>
  )
}
