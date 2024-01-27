import { Landing, Home } from "./views";
import {Route, Routes, useLocation} from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";

function App() {
  
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar/>}
      <br></br>        
      <Routes>
        <Route  path="/" element = {<Landing/>}/>
{/*          
        <Route  path="/detail/:id" element = {<Detail/>}/>
        <Route  path="/create" element = {<Form/>}/>     
*/}
        <Route  path="/home" element={<Home/>}/>
      </Routes> 
    </div>
  );
}

export default App;
