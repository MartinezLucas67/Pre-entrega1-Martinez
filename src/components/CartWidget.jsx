import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';

const CartWidget = ({ itemCount }) => {
  return (
    <IconButton color="inherit">
      <Badge badgeContent={itemCount} color="error">
        <FaShoppingCart />
      </Badge>
    </IconButton>
  );
};

export default CartWidget;