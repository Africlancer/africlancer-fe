import React from 'react'
import { useCreateBookMark, useFindBookMark } from './gql/query'
import { IBookMark } from './model'

interface IBookMarkState {
  // bookMarks: IBookMark[]
  findBookMark: (query: IBookMark) => Promise<void>
  // updateBookMark: (_id: string, Bookmark: IBookMark) => Promise<void>
  createBookMark: (portfolio: IBookMark) => Promise<void>
  // deleteBookMark: (_id: string) => Promise<void>
}

const BookmarkContext = React.createContext<IBookMarkState>({
  // bookMarks: [],
  findBookMark(query) {
    return null as any
  },
  createBookMark(portfolio) {
    return null as any
  },
  // deleteBookMark(_id) {
  //     return null as any
  // },
  // updateBookMark(_id, Bookmark) {
  //     return null as any
  // },
})

const useBookMarkContext = () => {
  const context = React.useContext(BookmarkContext)
  if (context === undefined) throw new Error('contenxt doest not exist')
  return context
}

interface IProps {
  notificationMsg: any
  children: React.ReactNode
}

const BookMarkContextProvider: React.FC<IProps> = ({ notificationMsg, children }) => {
  const createBookMarkQuery = useCreateBookMark((rs) => {})
  const findBookMarkQuery = useFindBookMark()

  const createBookMark = async (portfolio: IBookMark) => {
    return createBookMarkQuery[0]({ variables: { portfolio } })
      .then((rs) => {
        if (rs?.data) {
          notificationMsg.successMsg('Success', 'Bookmark Created')
        }
      })
      .catch((err) => {
        notificationMsg.errorMsg('Error', err.message)
        console.log(err)
      })
  }

  const findBookMark = async (query: IBookMark) => {
    findBookMarkQuery[0]({ variables: { query } })
      .then((rs) => {
        console.log(rs)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <BookmarkContext.Provider
      value={{
        findBookMark,
        createBookMark,
      }}
    >
      {children}
    </BookmarkContext.Provider>
  )
}

export { BookMarkContextProvider, useBookMarkContext }
