import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer';
import CssBaseline from '@mui/material/CssBaseline';

// Componentes
import Home from './pages/home.jsx';
import Productos from './pages/productos.jsx';
import Carrito from './pages/carrito.jsx';
import Perfil from './pages/perfil.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

const MainApp = () => {
  return (
    <Router>
      <CssBaseline />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/carrito" component={Carrito} />
        <Route path="/perfil" component={Perfil} />
        <Route path="/productos">
          <ItemListContainer greeting="Descubre nuestros productos" />
        </Route>
      </Switch>
    </Router>
  );
};

ReactDOM.render(<MainApp />, document.getElementById('root'));
