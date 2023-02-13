import React from 'react'
import { Footer } from "@/src/components/footer";
import { Navbar, SubMenu } from "@/src/components/modal";
import  { MenuProps } from 'antd';
import  { MoreOutlined, PlusCircleOutlined, RiseOutlined } from '@ant-design/icons'
import { Progress } from 'antd';
import { ApButton } from '@/src/components/button';
import { ArrowRightIcon } from '@/src/components/icons';

export const DashboardPage = () => {
  const items: MenuProps['items'] = [
    {
      label: 'Dashboard',
      key: 'dashboard',
    },
    {
      label: 'Lists',
      key: 'lists',
    },
    {
      label: 'Tasklists',
      key: 'tasklists',
    },
    {
      label: 'My Projects',
      key: 'my-projects',
    },
    {
      label: 'Inbox',
      key: 'inbox',
    },
    {
      label: 'Feedback',
      key: 'feedback',
    },
    {
      label: 'Free Credit',
      key: 'free-credit',
    }
  ];
  
  return (
    <div className="h-full relative bg-skin-alt">
    <div className="profile-page relative">
      <Navbar/>
      <SubMenu items={items} currentPage='dashboard'/>

      <div className="text-skin-inverted relative pt-32 pb-10 mb-20 px-10">
        <div className='flex gap-5 items-start'>
          <div className="flex flex-col gap-5">
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
            <div className='bg-skin-base rounded-lg shadow-lg p-7'>
            <div className='flex justify-between items-start'>
            <div className='flex gap-3 mb-5'>
              <img className='h-10 w-10 object-center object-cover' src='https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=740&t=st=1675069509~exp=1675070109~hmac=825fe5c3c97bb5473c64d1fc5022a56cfe17ef7db359dd378ea08d3ed640e2f0'/>
              <div>
                <div className='flex gap-3'>
                  <h1>Matt</h1>
                  <p>@Ddsdd</p>
                </div>

                <p>fgd</p>
              </div>
            </div>
            <MoreOutlined className='text-2xl'/>
            </div>

            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est autem animi fugit explicabo, error id accusantium labore sint fuga, dicta, consequuntur doloremque odit. Est, cum. Non atque repudiandae commodi, aspernatur exercitationem doloribus a delectus, vitae saepe dignissimos aut impedit quae ea enim necessitatibus quos beatae iure. Fugiat animi harum obcaecati.</p>

            <div className='flex gap-2 mt-5'>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="cs5:w-6 cs5:h-6 w-5 h-5 inline-block mr-2 text-skin-muted"
              >
                <path d="M7.493 18.75c-.425 0-.82-.236-.975-.632A7.48 7.48 0 016 15.375c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75 2.25 2.25 0 012.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23h-.777zM2.331 10.977a11.969 11.969 0 00-.831 4.398 12 12 0 00.52 3.507c.26.85 1.084 1.368 1.973 1.368H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 01-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227z" />
            </svg>
            <p>1280</p>
            </div>
            </div>
          </div>

          <div className='flex flex-col gap-5 sticky top-0'>
            <div className='p-5 bg-skin-base rounded-lg shadow-lg w-96'>
              <div>
                <div className='flex justify-between'>
                  <p>Set up your account</p>
                  <p>60% done</p>
                </div>
                <Progress strokeColor='#22c55e' trailColor='#fff' percent={50} showInfo={false} />
                <p>Having a complete verified account will increase the chances of getting jobs.</p>
              </div>
            </div>

            <div className='p-5 bg-skin-base rounded-lg shadow-lg w-96'>
              <div>
                <div className='flex justify-between'>
                  <p>Balance</p>
                  <p className='text-skin-accent flex gap-2'><PlusCircleOutlined />Add Funds</p>
                </div>

                <div className='flex justify-between mt-5'>
                  <div>
                    <p>US Dollar</p>
                  </div>

                  <p>$0.00USD</p>
                </div>
              </div>
            </div>

            <div className='p-5 bg-skin-base rounded-lg shadow-lg w-96'>
              <div>
                <div className='flex justify-between'>
                  <p>Free Member</p>
                  <p className='text-skin-accent flex gap-2'><RiseOutlined />Insights</p>
                </div>

                <div className='mt-5'>
                  <p>6 Bids Left Out of 6</p>
                </div>
              </div>
            </div>

            <div className='p-5 bg-skin-base rounded-lg shadow-lg w-96'>
              <div>
                <p>Polls</p>

                <div className='mt-5'>
                  <p>What is Your Gender ?</p>
                  <div className='flex justify-between mt-3'>
                    <div className='flex gap-2'>
                        <input type="radio"/>
                        <p>Male</p>
                    </div>
                    <div className='flex gap-2'>
                        <input type="radio"/>
                        <p>Male</p>
                    </div>
                  </div>
                </div>

                <div className='flex mt-3 justify-between'>
                  <ApButton
                        onClick={() => {}}
                        className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                        >
                        Submit Answer
                        <ArrowRightIcon/>
                  </ApButton>
                  <ApButton
                        onClick={() => {}}
                        className='py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2'
                        >
                        Skip Question
                        <ArrowRightIcon/>
                  </ApButton>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="-mt-20">
      <Footer/>
    </div>
    </div>
  )
}
