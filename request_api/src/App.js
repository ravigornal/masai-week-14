import React from 'react';
import './App.css';
import Login from './components/Login'


import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Details from './components/Details';
import Form from './components/editForm'
import Create from './components/createForm'
import Delete from './components/Delete'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Home2 from './components/Home2'


function App() {
  return (
    <div className="App">
    	<Router>
        <Route path="/" exact component={Login}/>
        <Route path="/home" component={Navbar}/>
        <Route path="/home2" component={Navbar}/>
        <Route path="/home" exact  component={Home}/>
        <Route path="/show/:id" exact component={Details}/>
        <Route path="/edit/:id" exact component={Form}/>
        <Route path="/create" component={Create}/>
        <Route path="/delete/:first_name" exact component={Delete}/>
        <Route path="/home2"  component={Home2}/>
    	</Router>
    </div>
  );
}

export default App;
