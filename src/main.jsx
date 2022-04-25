import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { EmployeesProvider } from "./contexts/Employees"
import './index.css'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <EmployeesProvider>
    <App />
    </EmployeesProvider>
    </BrowserRouter>
  </React.StrictMode>
)