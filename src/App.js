import './App.css';

import React, {useState } from 'react'
import Navbar from './components/navbar';
import News from './components/news';
// import dotenv from  'dotenv'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App =()=>{
  const pageSize=6;
  const apiKey= process.env.REACT_APP_API_KEY
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        height= {4}
        color='green'
        waitingTime ={1400}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        <Switch>
          <Route exact path="/"> <News setProgress ={setProgress} apiKey = {apiKey}  key="general" pageSize={pageSize} country = "in" category ="general" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/sports"> <News setProgress ={setProgress} apiKey = {apiKey}  key="sports" pageSize={pageSize} country = "in" category ="sports" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/entertainment"> <News setProgress ={setProgress} apiKey = {apiKey}  key="entertainment" pageSize={pageSize} country = "in" category ="entertainment" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/health"> <News setProgress ={setProgress} apiKey = {apiKey}  key="generalhealth" pageSize={pageSize} country = "in" category ="health" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/science"> <News setProgress ={setProgress} apiKey = {apiKey}  key="science" pageSize={pageSize} country = "in" category ="science" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/technology"> <News setProgress ={setProgress} apiKey = {apiKey}  key="technology" pageSize={pageSize} country = "in" category ="technology" /> </Route>
        </Switch>
        <Switch>
          <Route exact path="/business"> <News setProgress ={setProgress} apiKey = {apiKey}  key="business" pageSize={pageSize} country = "in" category ="business" /> </Route>
        </Switch>
        </Router>
      </div>
    )
  }

  export default App;



