import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CounterStore from './Store/Store.js'
import { Provider } from "react-redux";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={CounterStore}>
    <App />
    </Provider>
  </StrictMode>,
)
