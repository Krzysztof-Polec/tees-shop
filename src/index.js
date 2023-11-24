import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './components/Shop/Shop'
import "./sass/globalStyles.scss"

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <Shop></Shop>
  </React.StrictMode>
)