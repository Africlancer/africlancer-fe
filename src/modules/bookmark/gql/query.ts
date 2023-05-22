import { gql, useLazyQuery, useMutation } from "@apollo/client";


const CREATE_BOOKMARK = gql`
    mutation CreateBookmark($portfolio: CreateBookmarkInput!){
        createBookmark(portfolio: $portfolio){
            _id
        }
    }
`

export const FIND_BOOKMARK = gql`
    query FindBookmark($query: QueryBookMarkInput!){
        findBookmark(query: $query){
            _id
        }
    }
`

export const useFindBookMark = () => {
    return useLazyQuery(FIND_BOOKMARK)
}

export const useCreateBookMark = (callback: (rs: any) => void) =>
{
    return useMutation(CREATE_BOOKMARK, {
        onCompleted: (rs) => {
            if(rs?.createBookmark) {
                callback(rs?.createBookmark)
            }
        },
        onError: (error: any) => {
            return error
        }
    })
}

