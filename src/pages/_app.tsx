import '../styles/global.css'
import { SessionProvider } from 'next-auth/react'
import AppProvider from '../Provider'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
import ru from 'javascript-time-ago/locale/ru.json'

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const MyApp = ({ Component, pageProps }: any) => {
  return (
    <SessionProvider session={pageProps.session}>
      <AppProvider>
        <div className="page">
          <Component {...pageProps} />
        </div>
      </AppProvider>
    </SessionProvider>
  )
}

export default MyApp