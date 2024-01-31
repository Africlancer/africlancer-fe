import React from 'react'
import { DashboardPage } from '../modules/dashboard/page'
import { getSession } from 'next-auth/react'
import { MainLayout } from '../modules'
import { DashboardSubMenu } from '../components/submenu/dashboard'

const Dashboard = () => {
  return (
    <MainLayout pageTitle='Africlancer | My Dashboard' subMenu={<DashboardSubMenu current='dashboard'/>}>
      <DashboardPage />
    </MainLayout>
  )
}

export default Dashboard

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