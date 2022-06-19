import React from 'react';
import Badge from '@mui/material/Badge';
import { Search } from '@material-ui/icons';
import { ShoppingCartOutlined } from '@mui/icons-material';
import '../styles/navBar.css';

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="wrapper-left">
          <div className="language">
            <span>EN</span>
          </div>
          <div className="search-container">
            <input type="text" />
            <Search style={{color:'grey',fontSize:20}}/>
          </div>
        </div>
        <div className="wrapper-center">
          <div className="logo">
            <h1>Herencia</h1>
          </div>
        </div>
        <div className="wrapper-right">
          <div className="menu-items">REGISTER</div>
          <div className="menu-items">SIGN IN</div>
          <div className="menu-items">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined/>
            </Badge>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
