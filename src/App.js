import React , {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Registration from './components/Registration';
import { BrowserRouter as Router } from 'react-router-dom';
import {Routes} from 'react-router-dom';
import Alert from './components/Alert';

import{
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode , setMode]=useState('primary');// Where the dark mode is enable or not
  const [alert , setAlert] = useState(null);

  const showAlert = (message , type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },2000);
  }

  const toggle= () =>{
  if(mode==="dark"){
    setMode("primary");
    document.body.style.backgroundColor="white";
    showAlert("Light Mode has been enabeled","success");
  }
  else{
    setMode("dark");
    document.body.style.backgroundColor="#26324a";
    showAlert("Dark Mode has been enabeled","success");
  }
  }
  return (
    <Router>
    <div>
    {/* <Router> */}
      <Navbar title="TextUtils" aboutText="About Textutils" mode={mode} toggleMode = {toggle}/>
     
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path='/' element={< TextForm />}></Route>
          <Route exact path='/About' element={< About />}></Route>
          <Route exact path='/Registration' element={< Registration/>}></Route>
      
      </Routes>
    </div>
    </div>
    </Router>
  );
    }
export default App;
