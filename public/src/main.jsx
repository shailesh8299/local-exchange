import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { CookiesProvider } from 'react-cookie'
ReactDOM.createRoot(document.getElementById('root')).render(
  <CookiesProvider defaultSetOptions={{ path: '/' }}>
    <Provider store={store}>
      <App />
    </Provider>
  </CookiesProvider>
)
