// Importing all the necessary dependencies for my app.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store.js";

// Rendering the App component to the root div in the index.html file.
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />  
    </BrowserRouter>
  </Provider>
)
