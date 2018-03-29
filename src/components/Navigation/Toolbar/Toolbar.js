import React from 'react';
import './Toolbar.css';
import Logo from '../../Logo/Logo.js';
import NavigationItems from '../NavigationItems/NavigationItems.js'

const toolbar = (props) => (
  <header className="Toolbar">
    <Logo />
    <div> MENU </div>
    <nav>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
