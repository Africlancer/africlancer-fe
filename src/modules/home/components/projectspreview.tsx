import { ApButton } from '@/src/components/button'
import { ArrowRightIcon } from '@/src/components/icons'
import { Image } from 'antd'
import React from 'react'

export const ProjectsPreview = () => {
  return (
    <div className="px-10 pb-10">
      <div className="border-b text-skin-inverted border-skin-border w-full pb-5">
        <h1 className="text-cusf font-bold">Turn Your Ideas Into Reality</h1>
        <p className="text-lg">Be Inspired From Projects Crafted By Top Freelancers</p>
      </div>

      <div className="flex flex-wrap gap-y-16 justify-between mt-10">
        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              preview={false}
              src="https://img.freepik.com/free-psd/glossy-paper-coffee-bag-packaging-mockup_47987-9655.jpg?w=740&t=st=1674831180~exp=1674831780~hmac=6a0c473b80cdefbb90930ef989e2f3ff3af3681885be3102d25c37aeaa9ae08e"
              alt=""
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Package Design</h1>
            <p>$390 in 7 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-psd/editable-black-business-logo-psd-embossed-style_53876-123268.jpg?w=740&t=st=1674842325~exp=1674842925~hmac=577cad57bc99e4bdfcfe567ce4c61791d5fb866211b92c2580ff0cb8adb5af2e"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Logo Design</h1>
            <p>$40 in 2 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-vector/furniture-shopping-app-screens_23-2148663017.jpg?w=740&t=st=1674842590~exp=1674843190~hmac=35ce2eff07d3c5fce86c9cd49b0bcdb19ff8c24e57a14bb766c97078f68bd18d"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Mobile Design</h1>
            <p>$110 in 8 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/premium-psd/unicolor-desktop-screen-mockup_157104-636.jpg?w=740"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Website</h1>
            <p>$200 in 14 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-vector/beautiful-purple-woman-surrounded-by-nature-illustration_53876-119239.jpg?w=740&t=st=1674843592~exp=1674844192~hmac=9cd4dd2b40a752e42870d199d314dc711a46f141c1c1c83423137c581061514d"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Illustration</h1>
            <p>$220 in 16 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-vector/hiking-landing-page_23-2148820869.jpg?w=740&t=st=1674843676~exp=1674844276~hmac=1bc986162b2e91471006a675f58607a99c82abbef2a2f12e2da30ad9e8a745cc"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Wordpress</h1>
            <p>$90 in 4 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-vector/city-architecture-apartment-building-block-with-tower-skyscraper-linear-sketch-vector-illustration_98292-1035.jpg?w=826&t=st=1674843824~exp=1674844424~hmac=ddfac46f50b82ea550b3893be21f3d0806e3268f4f28ddf4987f3eb5714d365e"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Architecture</h1>
            <p>$175 in 13 Days</p>
          </div>
        </div>

        <div>
          <div className="background-img shadow-lg" role="button">
            <Image
              alt=""
              preview={false}
              src="https://img.freepik.com/free-vector/sweet-milk-vertical-realistic-banners-set_1284-11529.jpg?w=740&t=st=1674843956~exp=1674844556~hmac=ede9ff50f203ffdf337b931b7e4ed3091be04040004c9d60f63ae5c4028bcdcd"
            />
            <div className="bag-overlay">
              <div className="overlay-content text-white">
                <ApButton
                  onClick={() => {}}
                  className="border border-white rounded py-3 px-5 font-medium"
                >
                  Discover More
                </ApButton>
              </div>
            </div>
          </div>
          <div className="text-skin-inverted">
            <h1 className="font-bold text-2xl mt-3">Package Design</h1>
            <p>$80 in 5 Days</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-16 mb-8">
        <ApButton
          onClick={() => {}}
          className="px-8 flex items-center gap-3 py-4 text-xl bg-green-500 text-white font-medium rounded"
        >
          View More Projects
          <ArrowRightIcon />
        </ApButton>
      </div>
    </div>
  )
}
