import React from 'react';
import AppBar from '@material-ui/core/AppBar';

function Header() {
  return (
    <div className="header-bg">
      <AppBar position="static" color="default">
        <h2>Monkey Funds</h2>
      </AppBar>
    </div>
  )
}

export default Header;