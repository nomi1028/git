
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/User/Login';
import User from './components/User/User';
import Table from './components/User/Table';


function App() {
  return (
    <>
     <BrowserRouter>
        

            <Routes>
           
              
              <Route path="/" element={<Login/>} />
              <Route path="/Chips/:login" element={<User/>}/>
            </Routes>
          
      </BrowserRouter>
     
     
     
    </>
  );
}

export default App;
