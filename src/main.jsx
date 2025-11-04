import React from 'react'
import { StrictMode } from 'react'

import './index.css'
import {createRoot} from 'react-dom/client'
import App from './App.jsx'
import { CartProvider } from './components/UserContext.jsx'

const container = document.getElementById('root');
const root = createRoot(container);

root.render(

    <CartProvider>
    <App />
    </CartProvider>
);