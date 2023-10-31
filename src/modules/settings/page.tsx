import { ApTextInput } from '@/src/components'
import { ApButton } from '@/src/components/button'
import { Footer } from '@/src/components/footer'
import { ArrowRightIcon } from '@/src/components/icons'
import { Navbar, SubMenu } from '@/src/components/navbar'
import { MenuProps } from 'antd'
import React from 'react'

export const SettingsPage = () => {
  const items: MenuProps['items'] = [
    {
      label: 'Profile',
      key: 'profile',
    },
    {
      label: 'Email & Notifications',
      key: 'e&n',
    },
    {
      label: 'Membership',
      key: 'membership',
    },
    {
      label: 'Password',
      key: 'password',
    },
    {
      label: 'Payment & Financials',
      key: 'p&f',
    },
    {
      label: 'Account Security',
      key: 'a-s',
    },
    {
      label: 'Trust & Verification',
      key: 't&v',
    },
    {
      label: 'Account',
      key: 'account',
    },
  ]

  return (
    <div className="h-full relative bg-skin-alt">
      <div className="relative">
        <Navbar avatar="" />
        <SubMenu items={items} currentPage="profile" />
      </div>
      <div className="relative pt-36 flex px-10 pb-10">
        <div className="bg-skin-base shadow-lg w-cusw3 rounded-lg">
          <div className="border-b border-skin-border mb-3 py-3 px-5">
            <h1 className="text-3xl font-bold">Profile Details</h1>
          </div>

          <div className="border-b border-skin-border pb-3 mb-8">
            <div className="px-5">
              <h1 className="mb-3 font-bold text-xl">Name</h1>
              <div className="flex w-full justify-between gap-3">
                <div className="w-full">
                  <p>First Name</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
                <div className="w-full">
                  <p>Last Name</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
              </div>
              <div className="w-full mt-2">
                <p>Username</p>
                <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
              </div>
            </div>
          </div>

          <div className="border-b border-skin-border pb-3">
            <div className="px-5">
              <h1 className="mb-3 font-bold text-xl">Address</h1>
              <div className="flex w-full justify-between gap-3">
                <div className="w-full">
                  <p>Address</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
                <div className="w-full">
                  <p>City / Town</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
              </div>
              <div className="flex w-full justify-between gap-3 mt-3">
                <div className="w-full">
                  <p>ZIP / Postal Code</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
                <div className="w-full">
                  <p>State / Region</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
              </div>
              <div className="w-full mt-3">
                <p>Country</p>
                <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
              </div>
              <div className="w-full mt-3">
                <p>Company</p>
                <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
              </div>

              <div className="flex w-full justify-between gap-3 mt-3">
                <div className="w-full">
                  <p>Time Zone</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
                <div className="w-full">
                  <p>Location</p>
                  <input className="border-skin-border border text-black outline-none w-full text-sm bg-skin-input px-5 py-3 flex items-center rounded mb-2" />
                </div>
              </div>
            </div>
          </div>

          <div className="my-4 flex justify-end px-5">
            <ApButton
              onClick={() => {}}
              className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
            >
              Save Settings
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.478 5.559A1.5 1.5 0 016.912 4.5H9A.75.75 0 009 3H6.912a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H15a.75.75 0 000 1.5h2.088a1.5 1.5 0 011.434 1.059l2.213 7.191H17.89a3 3 0 00-2.684 1.658l-.256.513a1.5 1.5 0 01-1.342.829h-3.218a1.5 1.5 0 01-1.342-.83l-.256-.512a3 3 0 00-2.684-1.658H3.265l2.213-7.191z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M12 2.25a.75.75 0 01.75.75v6.44l1.72-1.72a.75.75 0 111.06 1.06l-3 3a.75.75 0 01-1.06 0l-3-3a.75.75 0 011.06-1.06l1.72 1.72V3a.75.75 0 01.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </ApButton>
          </div>
        </div>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  )
}
