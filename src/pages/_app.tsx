import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'
import useApNotification from '../hooks/notification'
import AppProvider from '../Provider'

const MyApp = ({ Component, pageProps }: any) => {
  const { notificationContext, successMsg, errorMsg } = useApNotification()
  // useLayoutEffect(() =>
  // {
    // const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
    // if (darkThemeMq.matches)
    // {
    //   document.querySelector('.page').classList.add('theme-dark')
    // }
    // else
    // {
    //   document.querySelector('.page').classList.remove('theme-dark')
    // }
  // }, [])

  return (
    <>
      {notificationContext}
      <SessionProvider session={pageProps.session}>
        <AppProvider>
          <div className="page">
            <Component {...pageProps} />
          </div>
        </AppProvider>
        {/* <ApolloProvider client={apolloClient}>
          <AuthContextProvider notificationMsg={{ successMsg, errorMsg }}>
            <ProjectContextProvider notificationMsg={{ successMsg, errorMsg }}>
              <BookMarkContextProvider notificationMsg={{ successMsg, errorMsg }}>
                <BiddingContextProvider notificationMsg={{ successMsg, errorMsg }}>
                  <ProfileContextProvider notificationMsg={{ successMsg, errorMsg }}>
                    <FreelancersContextProvider>
                      <div className="page">
                        <Component {...pageProps} />
                        {/* <ApUtilityBtn/> 
                      </div>
                    </FreelancersContextProvider>
                  </ProfileContextProvider>
                </BiddingContextProvider>
              </BookMarkContextProvider>
            </ProjectContextProvider>
          </AuthContextProvider>
        </ApolloProvider> */}
      </SessionProvider>
    </>
  )
}

export default MyApp