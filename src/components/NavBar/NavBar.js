import React from 'react';
/*import {
    AppBar, Toolbar, Typography, makeStyles, ListItem, ListItemText, List
} from '@material-ui/core';*/

const NavBar = props => {

    return <>
      <div className="NavBar">
        <h1>Logo Coconut Shop</h1>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Nosotros</a></li>
            <li><a href="#">Tienda</a></li>
            <li><a href="#">Contacto</a></li>
        </ul>
      </div>
    </>
}
  
export default NavBar;