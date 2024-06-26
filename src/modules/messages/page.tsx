import { Navbar } from '@/src/components/navbar'
import { Chat, ChatInput, FilterSection, Header, Recents } from './components'

export const MessagePage = () => {
  return (
    <div>
      <Navbar />
      <div className="">
        <div className="flex h-screen items-center">
          <div className="w-96 px-5 py-5 border pt-20 border-gray-400 h-full">
            <FilterSection />
            <Recents />
            {/* <div className="mt-6 decoration-solid">
                        <p>No messages yet</p>
                    </div> */}
          </div>

          <div className="w-full h-screen flex-2 flex-col justify-between pt-10 relative">
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-32 h-32">
                    <path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" />
                    <path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" />
                    </svg>

                    <p className="mt-4 text-2xl text-center font-bold">Welcome to your messages</p>
                    <h4 className="mt-4">Start connecting with others by <a className="text-green-500 " href="">browsing</a> or <a className="text-green-500" href="">posting a project.</a> </h4> */}

            <div className="flex flex-col justify-between h-full py-5">
              <div>
                <Header />
                <div
                  id="messages"
                  className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
                >
                  <Chat color="green" />
                  <Chat color="gray" />
                </div>
              </div>
              <ChatInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
