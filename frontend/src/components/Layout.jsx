/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Sidebar from './Sidebar';
import LoginContext from '../contexts/LoginContext';


export default function Layout() {
  let { loggedin } = useContext(LoginContext)
  return (
    <>
      
      <div className="flex pt-16"> {/* Padding top to account for Nav height */}
        {loggedin ? <Sidebar  /> : <Nav /> }
        <main className="main-content flex-1"> {/* Ensure main content takes remaining space */}
          <Outlet />
        </main>
      </div>
    </>
  );
}
