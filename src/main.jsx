import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css"
// import '../node_modules/bootstrap//dist/css/bootstrap.min.css'
import Store from "./components/store.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(

<Provider store={Store}>
    <App/>
</Provider>

)
