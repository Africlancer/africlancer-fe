import { gql, useMutation } from "@apollo/client";


const CREATE_BOOKMARK = gql`
    mutation CreateBookmark($portfolio: CreateBookmarkInput!){
        createBookmark(portfolio: $portfolio){
            _id
        }
    }
`

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