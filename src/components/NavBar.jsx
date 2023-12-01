import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => {
  // se hardcodea el numero de elementos en el carrito por ahora
  const itemCount = 3;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          E-Commerce
        </Typography>
        <ul className="nav-list">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/carrito">
              Carrito
              <CartWidget itemCount={itemCount} />
            </Link>
          </li>
          <li>
            <Link to="/perfil">Perfil</Link>
          </li>
        </ul>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;