import { getSession } from 'next-auth/react'
import { ProfilePage } from '../../modules/profile/page'
import { MainLayout } from '@/src/modules'
import { ProfileSubMenu } from '@/src/modules/profile/components'

const Profile = () => {
  return (
    <MainLayout pageTitle='Africlancer | My Profile' subMenu={ProfileSubMenu()}>
      <ProfilePage />
    </MainLayout>
  )
}

export default Profile

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
