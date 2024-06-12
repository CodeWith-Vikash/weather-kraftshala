import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/DataContext.jsx'
import { OtherProvider } from './context/OtherContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <OtherProvider>
    <App />
    </OtherProvider>
  </DataProvider>,
)
