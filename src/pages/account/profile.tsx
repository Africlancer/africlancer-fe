import { getSession } from 'next-auth/react'
import { ProfilePage } from '../../modules/profile/page'

const Profile = () => {
  return <ProfilePage />
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
