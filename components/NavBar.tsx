// components/NavBar.jsx

"use client";

import { useState } from 'react';

const NavBar = () => {

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle"/>
      <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-200">
          <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square drawer-button">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">NavBar</div>
        </div>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu min-h-full p-4 w-80 bg-base-100">
          <li><a href="/">Dashboard</a></li>
          <li><a href="/profiles">Profiles</a></li>
          <li><a href="/account">Account</a></li>
          <li><a href="/protected">Protected</a></li>
        </ul>
      </div>
    </div>

    
  );
};

export default NavBar;