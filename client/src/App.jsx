// Import components and hooks.
import { Landing, Home, Detail, Form } from "./views";
import {Route, Routes, useLocation} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

// uses the useLocation hook to get the current location, then renders the NavBar. 
function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <br></br>        
      // This section sets up the routes in my application
      <Routes>
        <Route  path="/" element = {<Landing/>}/>
        <Route  path="/detail/:id" element = {<Detail/>}/>
        <Route  path="/create" element = {<Form/>}/>     
        <Route  path="/home" element={<Home/>}/>
      </Routes> 
    </div>
  );
}

export default App;
