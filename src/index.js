import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App';
import Sign from './routes/Sign';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId="243960895642-q4bsifq7nnplpdtn454mom5qdeb59ivq.apps.googleusercontent.com">
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='Sign' element={<Sign />} />
          </Route>
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
