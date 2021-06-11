
import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

import {
  BrowserRouter,
  Route,
  Switch,

} from "react-router-dom";
import BackRound from './Components/Header/BackroundImg';
import RecipeSearch from './Components/Header/RecipeSearch';
import Home from './Components/Home';
import Create from './Components/CreateRecipe';
import Favorites from './Components/Favorites';
import View from './Components/ViewRecipe';
import Register from './Components/Register';
import NavBar from './Components/Header/NavBar'
import LogIn from './Components/LogIn'
import { Redirect } from "react-router-dom"
import {ReactComponent as Github} from "./Components/images/github.svg"
import {ReactComponent as Linkden} from "./Components/images/linkden.svg"
import { Link } from 'react-router-dom';

import "./Components/Header/RecipeSearch.css";
import Footer from "./Components/Footer.js"


let baseURL= process.env.REACT_APP_BASEURL

console.log('current base URL:', baseURL)



export default class App extends Component {

  constructor(props){
      super(props)
      this.state ={
          loggedIn : false,
        }
  }

  changeLoggedInStatus = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  register = async ( username, email, password) => {


    let body = JSON.stringify({
      username:username,
      email:email,
      password:password,
    })

    console.log(body)

      const response = await fetch('http://localhost:8000/api/v1/users/register ', {
        credentials: 'include',
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },

        body:body


      })

      if(response.status === 200 || response.status === 201){
        this.setState({
          loggedIn: true
        })
      }
      console.log(response)
      const parseData = await response.json()
      console.log(parseData)
      console.log(parseData.data)

    }

    login = async (username, password) => {


      let body = JSON.stringify({
        username:username,
        password:password,
      })

      console.log(body)

        const response = await fetch('http://localhost:8000/api/v1/users/login ', {
          credentials: 'include',
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },

          body:body


        })

        if(response.status === 200 || response.status === 201){
          this.setState({
            loggedIn: true
          })
        }


      }



    logoutUser = async () => {
      const url = 'http://localhost:8000/api/v1/users/logout'
        try {
          const response = await fetch(url, {
          method: 'GET',
          credentials: "include"
        })
          if (response.status === 200) {
            console.log("USER IS LOGGED OUT")
          this.setState({
            loggedIn: false
        })

      }
  }
  catch (err) {
    console.log('Error => ', err)
  }
}

  render() {


    return (
      <div className="App">

        <BrowserRouter >

          <NavBar logedin={this.state.loggedIn} changeLoggedInStatus={this.changeLoggedInStatus} logoutUser={this.logoutUser} />


            <BackRound />

          <RecipeSearch />
          <hr></hr>

          <Switch>

              <Route path="/" exact component={Home} />
              <Route path="/your_recipe" exact component={Create} />
              <Route path="/view_recipe" exact  component={View} />
              <Route path="/favorites"  exact component={Favorites} />
              <Route path="/users/register"  exact component={() => <Register
                 register={this.register}  />}
              />

              <Route path="/users/login"  exact component={() => <LogIn
                 login={this.login}  />}
              />
          </Switch>



        </BrowserRouter>


      </div>
    );

  };

}
