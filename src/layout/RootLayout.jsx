import React from "react";
import { Outlet } from "react-router";
import {Navbar} from '../components/NavBar'
function RootLayout() {
  return (
    <>
      <h1>Hello</h1>
      <Navbar />
      <Outlet />
    </>
  );
}

export default RootLayout;
