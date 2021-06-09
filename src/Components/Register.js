import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./Header/RecipeSearch.css";





export default class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
          username : "",
          email: "",
          password : "",
        }
      }

      loginChange = (event) => {

           this.setState({
               [event.target.name]: event.target.value
           })
           console.log(this.state)
       }
       handleSubmit = (event) => {
         event.preventDefault();
         console.log(this.state)
         console.log("immmmmm hit")

         this.props.register(this.state.username, this.state.email, this.state.password);
        }



    render() {
      console.log(this.handleSubmit)
      console.log(this.state.email)
      console.log("-----------------------")
        return(
            <>

            <div className="form-box-lr">
              <Form className="lr-form" onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicSearch" className="smaller-input">
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Username" name="username" id="usernme" className="form-text" onChange={(event)=> this.loginChange(event)} value={this.state.username}/>
                </Form.Group>

                <Form.Group controlId="formBasicSearch" className="smaller-input">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="text" placeholder="Email" name="email" id="email" className="form-text" onChange={(event)=> this.loginChange(event)} value={this.state.email}/>
                </Form.Group>

                <Form.Group controlId="formBasicSearch" className="smaller-input">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="text" name="password" id="password" placeholder="Password" className="form-text" onChange={(event)=> this.loginChange(event)} value={this.state.password}/>
                </Form.Group>

                <Button variant="success" type="submit" className="regis-button">
                  Register
                </Button>


              </Form>

              <Link to="/users/login" className="to-login">
                Alreday have an accout? Log In
              </Link>

            </div>


            </>
        )

      }

}
