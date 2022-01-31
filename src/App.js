
import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route  exact path="/" element={<Home />} />
    <Route exact path="Profile.js" element={<Profile />} />





    </Routes>
    
    
    
    
    </BrowserRouter>
            
         
          
     </div>
  
 
    
 
  );
}

export default App;
