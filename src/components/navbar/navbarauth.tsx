import React, { useState } from "react";
import { Layout, Button, Drawer, ConfigProvider, theme } from "antd";
import {NavAuthItems} from "./navitems";
import { MenuOutlined } from "@ant-design/icons";


export const NavbarAuth = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };


  return (
    <nav className="navbar bg-white fixed top-0 z-50 w-full shadow-lg">
        <ConfigProvider
          theme={
            {
              token: {
                colorPrimary: 'none',
                colorInfoHover: 'green',
                fontFamily: '',
              }
            }
          }
        >
            <Layout>
            <Layout.Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', padding: 30}}>
              <div className="logo flex items-center h-full">
              <h1 className='text-4xl font-bold'>Afric<span className='text-green-500'>lancer</span></h1>
              </div>

              <div className="navbar-menu h-full w-full">
                <div className="leftMenu h-full flex justify-end w-full">
                    <NavAuthItems mode={"horizontal"}/>
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
                  <NavAuthItems mode={"inline"}/>
                </Drawer>
              </div>
            </Layout.Header>
          </Layout>
        </ConfigProvider>
    </nav>
  );
};