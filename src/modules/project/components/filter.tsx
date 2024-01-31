import React from 'react'

export const ProjectsFilter = () => {
  return (
    <div className=''>
      <div className="px-5 py-3 border-b">
        <h1 className="font-bold mb-2">Payment Type</h1>
        <div className="flex justify-between">
          <form>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                name="type"
                value="FIXED_PRICE"
              />
              <p>Fixed Price</p>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="radio"
                value="HOURLY_RATE"
                name="type"
                id=""
              />
              <p>Hourly Rate</p>
            </div>
          </form>
          <p
            className="text-skin-accent cursor-pointer"
          >
            Clear
          </p>
        </div>
      </div>

      <div className="px-5 py-3 border-b">
        <div className="flex justify-between">
          <h1 className="font-bold mb-2">Budget</h1>
          <p
            className="text-skin-accent cursor-pointer"
          >
            Clear
          </p>
        </div>

        {/* {filterQuery.type ? (
          <></>
        ) : (
          <div className="flex items-center gap-2 mb-3">
            <InfoCircleFilled className="text-blue-500 text-lg" />
            <p className="mt-0.5 text-sm">Select payment type first.</p>
          </div>
        )} */}
        <form>
          <div className="flex flex-col gap-2 mb-2">
            <p>Min Budget</p>
            <input
              className="focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed"
              type="number"
            />
          </div>

          <div className="flex flex-col gap-2">
            <p>Max Budget</p>
            <input
              className="focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed"
              type="number"
            />
          </div>
        </form>
      </div>

      <div className="px-5 py-3 border-b">
        <div className="flex justify-between">
          <h1 className="font-bold mb-2">Skills</h1>
          <p
            className="text-skin-accent cursor-pointer"
          >
            Clear
          </p>
        </div>

        <div className="mt-">
          <div className="relative w-full">
            <input
              placeholder="Search Skills"
              className="focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute text-gray-500  top-[14px] left-4 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>

          <div className="flex flex-col gap-3 mt-5">
            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-sm">Website Design</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-sm">Logo Design</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-sm">Mobile App Development</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-sm">Data Entry</p>
            </div>

            <div className="flex gap-2 items-center">
              <input type="checkbox" />
              <p className="text-sm">Article Writing</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-b px-5 py-5">
        <div className="flex items-center justify-between w-full">
          <p className="font-bold">Countries</p>
          <p className="text-skin-accent cursor-pointer">Clear</p>
        </div>

        <div className="flex justify-between gap-4 mt-3">
          <div className="relative w-full">
            <input
              placeholder="Search Countries"
              className="focus:border-green-500 border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-10 py-3 flex items-center rounded mb-2 disabled:cursor-not-allowed"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="absolute text-gray-500  top-[14px] left-4 w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}