import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from "react-router-dom";
import './index.css'

import Home from './components/Home'

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
        <Home />
     </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
