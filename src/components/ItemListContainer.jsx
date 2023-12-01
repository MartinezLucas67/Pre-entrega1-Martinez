import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
      {/* se agrega contenido segun sea necesario */}
    </div>
  );
};

export default ItemListContainer;