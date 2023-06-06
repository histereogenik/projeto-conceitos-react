import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {PI as numeroPi, GMT_BRASIL} from './teste.js'
import nomes from './nomes.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {GMT_BRASIL}
    {numeroPi}
    {nomes.length}
    <App />
  </React.StrictMode>,
)
