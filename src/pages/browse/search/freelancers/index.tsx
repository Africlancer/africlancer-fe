import { MainLayout } from '@/src/modules'
import FreelancersPage from '@/src/modules/freelancers/page'
import ProjectsPage from '@/src/modules/project/page'
import { getSession } from 'next-auth/react'
import React from 'react'

const Freelancers = () => {
  return (
    <MainLayout pageTitle='Africlancer | Browse Freelancers'>
      <FreelancersPage/>
    </MainLayout>
  )
}

export default Freelancers

export const getServerSideProps = async (context) => {
    const session = await getSession(context)
  
    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      }
    }
    return {
      props: {},
    }
}