import React from 'react'

import {
    Link
  } from "react-router-dom";

class Navbar extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/home"><a class="navbar-brand" href="1">Api</a></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                        <Link to={{pathname:`/create`}}><button type="button" class="btn btn-danger">Create User</button></Link>
                        <Link to={{pathname:`/`}}><button class="btn btn-danger ml-5" >Logout</button></Link>
                        
                        </div>
                    </div>
                </nav>
            </div>
        </React.Fragment>
        )
    }
}

export default Navbar;