import { MainLayout } from '@/src/modules'
import FreelancersPage from '@/src/modules/freelancers/page'
import { ProfilePage } from '@/src/modules/profile/page'
import ProjectsPage from '@/src/modules/project/page'
import { getSession } from 'next-auth/react'
import React from 'react'

const FreelancerDetail = ({ id }: { id: string }) => {
  return (
    <MainLayout pageTitle='Africlancer | Freelancer Detail'>
      <ProfilePage freelancerId={id}/>
    </MainLayout>
  )
}

export default FreelancerDetail

export async function getServerSideProps({
    req,
    query,
  }: {
    req: any;
    query: any;
  }) {
    const session: any = await getSession({ req });
  
    if (!session) {
      return {
        redirect: {
          destination: '/signin',
          permanent: false,
        },
      }
    }
  
    return {
      props: {
        id: query?.id
      },
    };
  }