// Importing all the necessary dependencies for my app.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store.js";

// Rendering the App component to the root div in the App.jsx file.
ReactDOM.createRoot(document.getElementById('root')).render(
  
  // Wrapping the App component in the Provider component to give it access to the store.
  <Provider store={store}>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </Provider>
)
