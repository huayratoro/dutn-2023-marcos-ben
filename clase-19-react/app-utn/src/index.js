import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import App from "./components/App/App.js"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* En index deberia haber solo 1 componente que renderiza la aplicacion */}
    <App /> {/* es un componente */}
  </React.StrictMode>
);