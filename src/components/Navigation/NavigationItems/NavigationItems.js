import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" >Burger Builder</NavigationItem>
    <NavigationItem link="/orders" >Orders</NavigationItem>
  </ul>
)

export default navigationItems;
