import { AppBar, Hidden, Tab, Tabs } from "@material-ui/core";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const MenuDesktop = ({ links }) => {
  const location = useLocation();
  const tabsValue = links.map(link => link.path).find(path => location.pathname.includes(path)) || false;

  return (
    <Hidden smDown>
      <AppBar position="static" style={{ marginBottom: 10 }} className='w-full bg-blue-800'>
        <nav className="w-full h-12 bg-blue-800 text-white flex justify-center items-center py-2">
          <h1>Be ESN</h1>
        </nav>
        <Tabs aria-label="simple tabs example" value={tabsValue} className='bg-blue-800 w-full'>
          {links.map(link => (
            <Tab key={link.path} label={link.label} component={NavLink} to={link.path} value={link.path} />
          ))}
        </Tabs>
      </AppBar>
    </Hidden>
  );
};

export default MenuDesktop;
