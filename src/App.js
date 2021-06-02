import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'styles/style.css';
import Routes from 'routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
