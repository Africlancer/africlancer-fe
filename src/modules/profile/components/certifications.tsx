import Link from 'next/link';
import React from 'react'

export const Certifications = () => {
    return (
            <div className="bg-white col-span-1 inline-block rounded-xl w-full shadow-xl">
            <div className='border-b px-6 py-2 flex justify-between'>
                <div className='flex items-center'>
                    <h1 className='font-bold text-xl mr-3'>Certifications</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-gray-300' viewBox="0 0 24 24">
                    <path d="M23.873 9.81c.087-.251.127-.509.127-.764 0-.77-.38-1.514-1.055-1.981-2.153-1.492-1.868-1.117-2.679-3.543-.34-1.013-1.319-1.697-2.424-1.697h-.007c-2.653.009-2.193.151-4.334-1.354-.446-.314-.974-.471-1.501-.471s-1.055.157-1.502.471c-2.156 1.515-1.686 1.362-4.334 1.353h-.007c-1.104 0-2.084.685-2.422 1.697-.812 2.432-.534 2.056-2.678 3.544-.677.469-1.057 1.212-1.057 1.983 0 .254.042.511.127.762.831 2.428.829 1.962 0 4.38-.085.251-.127.507-.127.762 0 .77.38 1.514 1.057 1.983 2.146 1.49 1.868 1.113 2.679 3.543.338 1.013 1.317 1.697 2.422 1.697h.007c2.653-.009 2.193-.152 4.334 1.353.446.314.974.472 1.501.472s1.055-.158 1.502-.471c2.141-1.504 1.679-1.362 4.334-1.353h.007c1.104 0 2.084-.685 2.424-1.697.811-2.427.525-2.052 2.679-3.543.674-.469 1.054-1.213 1.054-1.983 0-.254-.04-.512-.127-.763-.831-2.428-.827-1.963 0-4.38zm-13.373 6.94l-4.5-4.364 1.858-1.857 2.642 2.505 5.642-5.783 1.858 1.857-7.5 7.642z"/>
                </svg>                 </div>

                <Link href='/my-portfolio'>
                <button className='flex bg-green-500 p-2 rounded text-white justify-center'>
                    <span className='mr-2'>Get Certified</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd" />
                    </svg>
                </button>
                </Link>
            </div>

            <div className='h-64 flex items-center justify-center cs2:p-5 cs3:p-10 p-5 flex-col'>
                <svg xmlns="http://www.w3.org/2000/svg" className='w-32 h-32 text-green-500' fill="currentColor" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M18.926 8.277c.051.147.074.297.074.445 0 .449-.222.883-.615 1.156-1.256.87-1.09.651-1.562 2.067-.198.591-.77.99-1.414.99h-.004c-1.549-.005-1.279-.088-2.528.789-.262.184-.569.276-.877.276s-.615-.092-.876-.275c-1.249-.878-.98-.794-2.528-.789h-.004c-.645 0-1.216-.399-1.413-.99-.473-1.417-.311-1.198-1.562-2.067-.395-.274-.617-.708-.617-1.157 0-.148.024-.298.074-.444.483-1.411.484-1.139 0-2.555-.05-.147-.074-.297-.074-.445 0-.45.222-.883.616-1.157 1.251-.868 1.089-.648 1.562-2.067.197-.591.769-.99 1.413-.99h.004c1.545.005 1.271.095 2.528-.79.262-.183.569-.274.877-.274s.615.091.876.274c1.249.878.98.795 2.528.79h.004c.645 0 1.216.399 1.414.99.473 1.416.307 1.197 1.562 2.067.394.273.616.707.616 1.156 0 .148-.023.299-.074.445-.483 1.41-.485 1.139 0 2.555zm-3.426-2.798l-1.084-1.083-3.291 3.374-1.541-1.462-1.084 1.084 2.625 2.545 4.375-4.458zm-6.135 9.452c-.766 0-1.371-.074-1.873-.213-.308 3.068-1.359 5.37-3.492 7.592.854.107 1.95-.094 2.833-.56.317.636.65 1.43.767 2.25 2.009-2.299 3.266-5.054 3.734-8.071-.943-.181-1.234-.496-1.969-.998zm5.27 0c-.737.507-1.043.82-1.968.998.47 3.017 1.726 5.772 3.733 8.071.116-.82.449-1.614.767-2.25.883.465 1.979.667 2.833.56-2.13-2.219-3.168-4.531-3.479-7.595-.503.141-1.112.216-1.886.216z"/>
                </svg>
                <div>
                <p className='mt-3 cs2:pt-0 cs3:pt-6'>You don't have any certifications yet.</p>
                </div>
            </div>
        </div>
    );
}
 