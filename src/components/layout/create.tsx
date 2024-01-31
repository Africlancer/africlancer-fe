import { ReactNode, FC } from 'react'
import { ConfigProvider, Carousel } from 'antd'
import Head from 'next/head'

interface IProps {
  children: ReactNode
  pageTitle?: string
}

export const CreateLayout: FC<IProps> = ({ children, pageTitle }) => {
  return (
    <>
      <Head>
          <title>{pageTitle}</title>
          <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative flex h-screen">
        <div className="w-[30%] h-full bg-black">
            <div className="relative">
              <div className="h-[100vh]">
                <div
                  className="parallax h-full bg-cover"
                  style={{ backgroundImage: `url(abs1.jpg)` }}
                />
              </div>

              <div className="p-10 top-0 absolute w-full h-full bg-dark-jungle-green/20 flex items-start">
                {/* <Image src={Logo} alt="logo" width={200} height={100} /> */}
              </div>
            </div>
        </div>

        <div className="w-[70%] h-full overflow-auto">{children}</div>
      </div>
    </>
  )
}
