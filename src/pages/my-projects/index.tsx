import { getSession } from 'next-auth/react'
import React from 'react'
import { MainLayout } from '../../modules'
import MyProjectsPage from '../../modules/project/user/page'
import { DashboardSubMenu } from '../../components/submenu/dashboard'

const MyProjects = () => {
  return (
    <MainLayout pageTitle='Africlancer | My Projects' subMenu={<DashboardSubMenu current='my-projects'/>}>
        <MyProjectsPage />
    </MainLayout>
  )
}

export default MyProjects

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