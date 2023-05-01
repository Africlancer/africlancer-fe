import React from 'react'
import { IBookMark } from './model'

interface IBookMarkState
{
    bookMarks: IBookMark[]
    findBookMark: (query: IBookMark) => Promise<void>
    updateBookMark: (_id: string, Bookmark: IBookMark) => Promise<void>
    createBookMark: (portfolio: IBookMark) => Promise<void>
    deleteBookMark: (_id: string) => Promise<void>
}

const BookmarkContext = React.createContext<IBookMarkState>({
    bookMarks: [],
    findBookMark(query) {
        return null
    },
    createBookMark(portfolio) {
        return null
    },
    deleteBookMark(_id) {
        return null
    },
    updateBookMark(_id, Bookmark) {
        return null
    },
})

const useBookMarkContext = () => {
    const context = React.useContext(BookmarkContext)
    if(context === undefined) throw new Error("contenxt doest not exist")
    return context
}

interface IProps {
    notificationMsg: any
    children: React.ReactNode;
}

const BookMarkContextProvider: React.FC<IProps> = ({children}) => {


    return(
        <BookmarkContext.Provider
            value={{

            }}
        >
            {children}
        </BookmarkContext.Provider>
    )
}

export {BookMarkContextProvider, useBookMarkContext}