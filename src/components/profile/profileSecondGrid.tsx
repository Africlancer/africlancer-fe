import React from 'react'

const ProfileSecondGrid = () => 
{
    return (
        <div className='-translate-y-24 px-6 mb-8'>
            <div className="cs2:block grid cs3:gap-3 cs3:grid-cols-3 grid-cols-1 mb-8">
                <div className='col-span-1 block cs2:hidden bg-white shadow-xl w-full rounded-xl'>
                        <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-xl mr-3'>Verfications</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300">
                                <path fill-rule="evenodd" d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                            </svg>
                        </div>
                        <div className='p-6 flex justify-center flex-col'>
                            <div className='flex justify-between mb-7'>
                                <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300">
                                    <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                </svg>
                                <p className='ml-3'>Identity Verfication</p>
                                </div>
                                <a className='text-green-500'>Verify</a>
                            </div>

                            <div className='flex justify-between mb-7'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300">
                                        <path d="M4.5 3.75a3 3 0 00-3 3v.75h21v-.75a3 3 0 00-3-3h-15z" />
                                        <path fill-rule="evenodd" d="M22.5 9.75h-21v7.5a3 3 0 003 3h15a3 3 0 003-3v-7.5zm-18 3.75a.75.75 0 01.75-.75h6a.75.75 0 010 1.5h-6a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" clip-rule="evenodd" />
                                    </svg>
                                    <p className='ml-3'>Payment Verfication</p>
                                </div>
                                <a className='text-green-500'>Verify</a>
                            </div>

                            <div className='flex justify-between mb-7'>
                                <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                </svg>
                                    <p className='ml-3'>Phone Verfication</p>
                                </div>
                                <a className='text-green-500'>Verify</a>
                            </div>

                            <div className='flex justify-between mb-7'>
                                <div className='flex'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-gray-300">
                                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                                <p className='ml-3'>Email Verfication</p>
                                </div>
                                <a className='text-green-500'>Verify</a>
                            </div>

                            <div className='flex justify-between'>
                                <div className='flex'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className='text-blue-800'>
                                        <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/>
                                    </svg>                                    
                                <p className='ml-3'>Facebook Connection</p>
                                </div>
                                <a className='text-green-500'>Verify</a>
                            </div>
                        </div>
                </div>

                <div className="col-span-2 gap-3 grid cs2:grid-cols-4 grid-cols-2 cs3:mt-0 mt-8">
                    <div className="bg-white inline-block rounded-xl w-full shadow-xl">
                        <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-xl mr-3'>Certifications</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-gray-300' viewBox="0 0 24 24">
                                <path d="M23.873 9.81c.087-.251.127-.509.127-.764 0-.77-.38-1.514-1.055-1.981-2.153-1.492-1.868-1.117-2.679-3.543-.34-1.013-1.319-1.697-2.424-1.697h-.007c-2.653.009-2.193.151-4.334-1.354-.446-.314-.974-.471-1.501-.471s-1.055.157-1.502.471c-2.156 1.515-1.686 1.362-4.334 1.353h-.007c-1.104 0-2.084.685-2.422 1.697-.812 2.432-.534 2.056-2.678 3.544-.677.469-1.057 1.212-1.057 1.983 0 .254.042.511.127.762.831 2.428.829 1.962 0 4.38-.085.251-.127.507-.127.762 0 .77.38 1.514 1.057 1.983 2.146 1.49 1.868 1.113 2.679 3.543.338 1.013 1.317 1.697 2.422 1.697h.007c2.653-.009 2.193-.152 4.334 1.353.446.314.974.472 1.501.472s1.055-.158 1.502-.471c2.141-1.504 1.679-1.362 4.334-1.353h.007c1.104 0 2.084-.685 2.424-1.697.811-2.427.525-2.052 2.679-3.543.674-.469 1.054-1.213 1.054-1.983 0-.254-.04-.512-.127-.763-.831-2.428-.827-1.963 0-4.38zm-13.373 6.94l-4.5-4.364 1.858-1.857 2.642 2.505 5.642-5.783 1.858 1.857-7.5 7.642z"/>
                            </svg>                        
                        </div>

                        <div className='flex items-center justify-center cs2:p-5 cs3:p-10 p-5 flex-col'>
                            <svg xmlns="http://www.w3.org/2000/svg" className='w-20 h-20 text-green-500' fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M18.926 8.277c.051.147.074.297.074.445 0 .449-.222.883-.615 1.156-1.256.87-1.09.651-1.562 2.067-.198.591-.77.99-1.414.99h-.004c-1.549-.005-1.279-.088-2.528.789-.262.184-.569.276-.877.276s-.615-.092-.876-.275c-1.249-.878-.98-.794-2.528-.789h-.004c-.645 0-1.216-.399-1.413-.99-.473-1.417-.311-1.198-1.562-2.067-.395-.274-.617-.708-.617-1.157 0-.148.024-.298.074-.444.483-1.411.484-1.139 0-2.555-.05-.147-.074-.297-.074-.445 0-.45.222-.883.616-1.157 1.251-.868 1.089-.648 1.562-2.067.197-.591.769-.99 1.413-.99h.004c1.545.005 1.271.095 2.528-.79.262-.183.569-.274.877-.274s.615.091.876.274c1.249.878.98.795 2.528.79h.004c.645 0 1.216.399 1.414.99.473 1.416.307 1.197 1.562 2.067.394.273.616.707.616 1.156 0 .148-.023.299-.074.445-.483 1.41-.485 1.139 0 2.555zm-3.426-2.798l-1.084-1.083-3.291 3.374-1.541-1.462-1.084 1.084 2.625 2.545 4.375-4.458zm-6.135 9.452c-.766 0-1.371-.074-1.873-.213-.308 3.068-1.359 5.37-3.492 7.592.854.107 1.95-.094 2.833-.56.317.636.65 1.43.767 2.25 2.009-2.299 3.266-5.054 3.734-8.071-.943-.181-1.234-.496-1.969-.998zm5.27 0c-.737.507-1.043.82-1.968.998.47 3.017 1.726 5.772 3.733 8.071.116-.82.449-1.614.767-2.25.883.465 1.979.667 2.833.56-2.13-2.219-3.168-4.531-3.479-7.595-.503.141-1.112.216-1.886.216z"/>
                            </svg>
                            <p className='mt-3 text-sm cs2:pt-0 cs3:pt-6'>You don't have any certifications yet.</p>
                            <button className='flex text-green-500 p-2 w-full justify-center rounded border-green-500 border-2 mt-3'>
                                <span className='mr-2'>Get Certified</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-green-500' viewBox="0 0 24 24">
                                <path d="M23.873 9.81c.087-.251.127-.509.127-.764 0-.77-.38-1.514-1.055-1.981-2.153-1.492-1.868-1.117-2.679-3.543-.34-1.013-1.319-1.697-2.424-1.697h-.007c-2.653.009-2.193.151-4.334-1.354-.446-.314-.974-.471-1.501-.471s-1.055.157-1.502.471c-2.156 1.515-1.686 1.362-4.334 1.353h-.007c-1.104 0-2.084.685-2.422 1.697-.812 2.432-.534 2.056-2.678 3.544-.677.469-1.057 1.212-1.057 1.983 0 .254.042.511.127.762.831 2.428.829 1.962 0 4.38-.085.251-.127.507-.127.762 0 .77.38 1.514 1.057 1.983 2.146 1.49 1.868 1.113 2.679 3.543.338 1.013 1.317 1.697 2.422 1.697h.007c2.653-.009 2.193-.152 4.334 1.353.446.314.974.472 1.501.472s1.055-.158 1.502-.471c2.141-1.504 1.679-1.362 4.334-1.353h.007c1.104 0 2.084-.685 2.424-1.697.811-2.427.525-2.052 2.679-3.543.674-.469 1.054-1.213 1.054-1.983 0-.254-.04-.512-.127-.763-.831-2.428-.827-1.963 0-4.38zm-13.373 6.94l-4.5-4.364 1.858-1.857 2.642 2.505 5.642-5.783 1.858 1.857-7.5 7.642z"/>
                            </svg>                        
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded w-full shadow-xl">
                        <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-xl mr-3'>Top Skills</h1>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-gray-300' viewBox="0 0 24 24">
                                <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z"/>
                            </svg>                        
                        </div>
                        <div className=''>
                            <div className='cs2:pt-5 px-2 cs3:pt-10 pt-4 flex flex-wrap justify-center gap-5'>
                                <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Web Development</p>
                                <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>React JS</p>
                                <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Java</p>
                                <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Software Development</p>
                            </div>
                            <div className='px-5 mt-2 flex justify-center flex-col items-center text-green-500'>
                                <a className='cs2:pt-0 cs3:pt-5'>View More</a>
                                <button className='flex text-green-500 p-2 w-full justify-center rounded border-green-500 border-2 mt-3'>
                                    <span className='mr-2'>Edit Skills</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
                                            <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                            <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                                        </svg>                       
                                </button>
                            </div>  
                        </div>                
                    </div>

                   <div className="bg-white rounded cs2:block hidden w-full shadow-xl">
                    <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-lg mr-3'>Browse Similar Freelancers</h1>
                    </div>
                    </div>
                
                    <div className="bg-white rounded cs2:block hidden w-full shadow-xl">
                        <div className='border-b px-6 py-2 flex items-center'>
                                <h1 className='font-bold text-lg mr-3'>Browse Similar Showcases</h1>
                        </div>                    
                    </div>
                </div>
            </div>

            <div className='grid gap-3 grid-cols-2 cs2:hidden'>
                <div className="bg-white rounded w-full shadow-xl">
                    <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-lg mr-3'>Browse Similar Freelancers</h1>
                    </div>
                </div>
                
                <div className="bg-white rounded w-full shadow-xl">
                    <div className='border-b px-6 py-2 flex items-center'>
                            <h1 className='font-bold text-lg mr-3'>Browse Similar Showcases</h1>
                    </div>                    
                </div>
            </div>
        </div>
    );
}
 
export default ProfileSecondGrid;