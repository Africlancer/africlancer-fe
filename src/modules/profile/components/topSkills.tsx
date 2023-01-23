import React from 'react'

export const TopSkills = () => 
{
    return (
            <div className="bg-white rounded-xl w-full shadow-xl">
            <div className='border-b px-6 py-2 flex items-center'>
                <h1 className='font-bold text-xl mr-3'>Top Skills</h1>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className='text-gray-300' viewBox="0 0 24 24">
                    <path d="M23.27 19.743l-11.946-11.945c-.557-.557-.842-1.331-.783-2.115.115-1.485-.395-3.009-1.529-4.146-1.03-1.028-2.375-1.537-3.723-1.537-.507 0-1.015.072-1.506.216l3.17 3.17c.344 1.589-1.959 3.918-3.566 3.567l-3.17-3.17c-.145.492-.217 1-.217 1.509 0 1.347.51 2.691 1.537 3.721 1.135 1.136 2.66 1.646 4.146 1.53.783-.06 1.557.226 2.113.783l11.947 11.944c.468.468 1.103.73 1.763.73 1.368 0 2.494-1.108 2.494-2.494 0-.638-.244-1.276-.73-1.763zm-1.77 2.757c-.553 0-1-.448-1-1s.447-1 1-1 1 .448 1 1-.447 1-1 1zm-8.375-15.753l6.723-6.747 4.152 4.128-6.722 6.771-1.012-1.012 5.488-5.533c.165-.165.165-.435-.001-.602-.166-.165-.436-.165-.601 0l-5.489 5.533-.935-.936 5.495-5.539c.166-.166.166-.437 0-.603-.168-.166-.436-.166-.603.001l-5.494 5.539-1.001-1zm-3.187 9.521l-5.308 5.35c-.166.166-.437.166-.603 0-.165-.166-.166-.436 0-.602l5.308-5.351-.936-.935-5.301 5.343c-.165.168-.435.167-.601.001-.166-.167-.166-.436 0-.602l5.3-5.343-1.004-1.004-5.745 5.787-1.048 5.088 5.203-.937 5.743-5.786-1.008-1.009z"/>
                </svg>                        
            </div>
            <div className='h-64 flex items-center w-full justify-between py-8 flex-col'>
                    <div className='px-2 flex flex-wrap justify-center gap-5'>
                        <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Web Development</p>
                        <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>React JS</p>
                        <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Java</p>
                        <p className='bg-gray-100 inline-block py-1 px-3 rounded-lg'>Software Development</p>
                    </div>

                    <div className='flex items-center justify-center'>
                    <button className='flex text-green-500 px-16 py-2 justify-center rounded border-green-500 border-2 mt-3'>
                        <span className='mr-2'>Edit Skills</span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block">
                                <path d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z" />
                                <path d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z" />
                            </svg>                       
                    </button>
                    </div>
            </div>                
        </div>
    );
}
