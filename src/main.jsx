import { PersistGate } from 'redux-persist/integration/react'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './config/router.jsx'
import { Provider } from 'react-redux'
import { store, persistor } from './store/index.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <App />
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Router />
    </PersistGate>
  </Provider>
)
