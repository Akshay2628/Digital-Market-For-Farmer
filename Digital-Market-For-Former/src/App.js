
//import './App.css';
//import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Example from './components/Example';
// import RegistrationForm from './components/RegistrationForm';
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
//  import BasicExample from './components/BasicExample';
import NewLogin from './components/NewLogin';
import Registration from './components/Registration';
import HomePage from './pages/HomePage';

/* import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit'; */

function App() {

  return(
   <div>
{/*     <Router>
      <Routes>
        <Route  path='/' exact element={<Example/>}></Route>
        <Route path='/add' exact element={<RegistrationForm/>}></Route>
      </Routes>
    </Router> */}

      <Routes>
        <Route path="/" element={<Navigate replace to="/customers"/>}></Route>
        <Route  path='/customers' exact element={<NewLogin/>}></Route>
        <Route path='/registration' exact element={<Registration/>}></Route>
        <Route path='/homepage' exact element={<HomePage/>}></Route>
        </Routes>

  </div> 
  );
}




export default App;
