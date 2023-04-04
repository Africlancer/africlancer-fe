import React, { useState } from 'react'
import { useFetchAllFreelancers } from './gql/query'

interface IFreelancersState
{
    fetchAllFreelancers: (query) => void
    freelancers: any
}

const FreelancersContext = React.createContext<IFreelancersState>({
    fetchAllFreelancers(query) {},
    freelancers: null
})

const useFreelancersContext = () => 
{
    const context = React.useContext(FreelancersContext)
    if(context === undefined) throw new Error("Context does not exist")
    return context
}

interface IProps 
{
    children: React.ReactNode
}

const FreelancersContextProvider: React.FC<IProps> = ({children}) => {

    const fetchAllFreelancersQuery = useFetchAllFreelancers()

    const [freelancers, setFreelancers] = useState<any>(null)

    const fetchAllFreelancers = (query) =>
    {
        console.log('kkk5');
        
        fetchAllFreelancersQuery[0]({
            variables : {
                query
            }
        }).then(res => {
            console.log('ggg');
            
            setFreelancers(res.data?.findUsers)
        }).catch((err) => console.log(err))
    }

    return (
        <FreelancersContext.Provider value={{
            fetchAllFreelancers,
            freelancers
        }}>
            {children}
        </FreelancersContext.Provider>
    )
}

export {FreelancersContextProvider, useFreelancersContext}