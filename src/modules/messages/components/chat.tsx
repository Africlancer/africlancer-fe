import React from 'react'

interface IProps
{
    color: string
}

export const Chat: React.FC<IProps> = ({ color }) => {
    
  return (
    <div>
        <div className="chat-message">
        <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
            <div><span className={`px-4 py-2 rounded-lg inline-block rounded-br-none ${ color === 'green' ? 'bg-green-500' : 'bg-gray-500' }  text-white`}>Any updates on this issue? I'm getting the same error when trying to install devtools. Thanks</span></div>
            </div>
            <img src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-6 h-6 rounded-full order-2"/>
        </div>
        </div>
    </div>
  )
}