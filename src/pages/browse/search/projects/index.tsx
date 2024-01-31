import { MainLayout } from '@/src/modules'
import ProjectsPage from '@/src/modules/project/page'
import { getSession } from 'next-auth/react'
import React from 'react'

const Projects = () => {
  return (
    <MainLayout pageTitle='Africlancer | Browse Projects'>
        <ProjectsPage/>
    </MainLayout>
  )
}

export default Projects

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