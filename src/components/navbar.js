import React from 'react'
//import { Component } from 'react'
import {
    Link
  } from "react-router-dom";

const Navbar =()=> {
        return (
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{backgroundColor:'rgb(40, 44, 52)'}}>
                    <div className="container-fluid">
                        <Link className="navbar-brand" style={{color:'white', fontWeight:'bold'}} to="/">NewsApp</Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse"  id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" style={{color:'white'}} aria-current="page" to="/">Home</Link>
                                </li>
                                {/* <li className="nav-item"> <Link className="nav-link" to="/about">About</Link></li> */}
                                <li className="nav-item" > <Link className="nav-link" style={{color:'white'}} to="/business">Business</Link></li>
                                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}} to="/entertainment">Entertainment</Link></li>
                                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}} to="/health">Health</Link></li>
                                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}} to="/science">Science</Link></li>
                                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}} to="/sports">Sports</Link></li>
                                <li className="nav-item"> <Link className="nav-link" style={{color:'white'}} to="/technology">Technology</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    export default Navbar
