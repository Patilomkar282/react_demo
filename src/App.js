
import './App.css';
import Home from './Components/Home.js';
import Profile from './Components/Profile.js';

import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route  exact path="/" element={<Home />} />
    <Route exact path="Profile.js" element={<Profile />} />

    </Switch>
    
    
    
    
    </BrowserRouter>
            
         
          
     </div>
  
 
    
 
  );
}

export default App;
