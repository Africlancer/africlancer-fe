import Notification from "@/src/modules/notification";
import { FIND_USER_AVATAR } from "@/src/modules/profile/gql/query";
import { useQuery } from "@apollo/client";
import { Dropdown, MenuProps, Image, Skeleton } from "antd";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import Link from "next/link";
import { ApButton } from "../button";
import { ApNotificationIcon, ArrowRightIcon } from "../icons";
import { ApPopConfirm } from "../popconfirm";

interface IProps 
{
  avatar?: any
}

export const Navbar: React.FC<IProps> = ({avatar}) => {

  const sess = useSession()
  const user: any = sess.data?.user

  const {data, loading, error} = useQuery(FIND_USER_AVATAR)
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: "Account",
      children: [
        {
          label: <Link href="/account/profile">View Profile</Link>,
          key: "1",
        },
        {
          label: <Link href="">Membership</Link>,
          key: "2",
        },
        {
          label: <Link href="">Account Analytics</Link>,
          key: "3",
        },
        {
          label: <Link href="">Bid Insights</Link>,
          key: "4",
        },
        {
          label: <Link href="/account/settings">Settings</Link>,
          key: "5",
        },
      ],
    },
    {
      key: "2",
      label: "Finances",
      children: [
        {
          label: "ddd",
          key: 2,
        },
      ],
    },
  ];

  const browseItems: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/browse/projects">Projects</Link>,
    },
    {
      key: "2",
      label: <Link href="/browse/freelancers">Freelancers</Link>,
    },
  ];

  return (
    <header>
      <nav className="shadow-md flex flex-wrap items-center justify-between w-full  py-2 z-50 md:py-0 px-10 text-lg text-skin-inverted bg-skin-nav fixed">
        <div>
          <NextImage alt="logo" src="/africlancer.png" width={140} height={30} />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          id="menu-button"
          className="h-6 w-6 cursor-pointer md:hidden block"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>

        <div
          className="hidden w-full md:flex md:items-center md:w-auto"
          id="menu"
        >
          <ul className="pt-4 md:flex md:justify-between md:pt-0">
            <li>
                <Dropdown
                  trigger={["hover"]}
                  menu={{ items: browseItems }}
                  placement="bottomLeft"
                  arrow
                >
                    <p className="md:p-4 py-2 block cursor-pointer">Browse</p>
                </Dropdown>
            </li>

            <li>
              <Link className="md:p-4 py-2 block" href="">
                Manage
              </Link>
            </li>

            <li>
              <Link className="md:p-4 py-2 block" href="">
                Groups
              </Link>
            </li>

            <li className="flex items-center ml-5">
              <ApPopConfirm
                    
                    icon={<div></div>}
                    placement='bottom'
                    popButton={ApNotificationIcon}
                    //title=''
                >
                  <Notification/>
                </ApPopConfirm>
            </li>

            <li className="flex items-center ml-4">
            <Link href="/messages">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                />
              </svg>
            </Link>
            </li>

            <li>
              <div className="ml-5 flex items-center justify-center text-base h-full">
                <Link href="/post-project">
                <ApButton
                  onClick={() => {}}
                  className="py-2 flex bg-skin-accent text-white rounded items-center p-3 justify-center gap-2"
                >
                  Post a Project
                  <ArrowRightIcon />
                </ApButton>
                </Link>
              </div>
            </li>

            <li className="flex items-center">
             
              {
                data ? (
                  <div className="flex items-center text-lg">
                     <div className="border-l h-10 w-2 mx-5"></div>
                  <p className="font-bold text-lg">{user?.username}</p>
                  <Dropdown
                    trigger={["hover"]}
                    menu={{ items }}
                    placement="bottomLeft"
                    arrow
                  >
                    <Image preview={false} alt="usrimg" className="rounded ml-3 cursor-pointer" height={40} width={40} src={data?.findOneProfile?.avatar}/>
                  </Dropdown>
                </div>
                ) : (
                  <div className="flex gap-2">
                    <Skeleton.Input active size='large'/>
                    <Skeleton.Image active style={{ height: '40px', width: '40px', padding: '10px' }}  /></div>
                )
              }

            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

{
  /* <nav className="navbar bg-white fixed top-0 z-50 w-full shadow-lg">
<ConfigProvider
  theme={
    {
      token: {
        colorPrimary: 'white',
        fontFamily: ''
      }
    }
  }
>
    <Layout>
    <Layout.Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', paddingLeft: 30, paddingRight: 10}}>
      <div className="logo flex items-center h-full">
      <h1 className='text-4xl font-bold'>Afric<span className='text-green-500'>lancer</span></h1>
      </div>

      <div className="navbar-menu h-full w-full">
        <div className="leftMenu h-full flex justify-end w-full">
            <NavItems mode={"horizontal"}/>
        </div>
        <Button className="menuButton" type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>


        <Drawer
          title={"Brand Here"}
          placement="right"
          closable={true}
          onClose={showDrawer}
          visible={visible}
          style={{ zIndex: 99999 }}
        >
          <NavItems mode={"inline"}/>
        </Drawer>
      </div>
    </Layout.Header>
  </Layout>
</ConfigProvider>
</nav> */
}
