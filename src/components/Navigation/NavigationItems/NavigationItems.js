import React from 'react';
import './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem.js';

const navigationItems = () => (
  <ul className="NavigationItems">
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/orders" >Orders</NavigationItem>
  </ul>
)

export default navigationItems;
