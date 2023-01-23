import React, { useState } from "react";
import { Layout, Button, Drawer } from "antd";
import NavItems from "./navitems";
import { MenuOutlined } from "@ant-design/icons";


export const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };


  return (
    <nav className="navbar bg-white fixed top-0 z-50 w-full shadow-md">
      <Layout>
        <Layout.Header className="nav-header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: 'white', paddingLeft: 30, paddingRight: 10}}>
          <div className="logo flex items-center h-full">
            <h1 className="brand-font font-bold text-lg">LOGO</h1>
          </div>

          <div className="navbar-menu w-full">
            <div className="leftMenu flex justify-end w-full">
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
              <NavItems mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

{/* <div className="mx-5 flex items-center">
<div className="border-l-2 border-gray-200 h-8 w-2 mr-5"></div>
<button className="w-32 rounded-lg h-10 flex items-center justify-center bg-green-500 text-white">
    <span>Post a Project</span>
</button>
  <div className="ml-10 flex items-center">
  <p className="font-bold text-lg">Paul.A</p>
      <div className="test-user-pic h-10 w-10 bg-center bg-cover rounded ml-5"></div>
  </div>
</div> */}