
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

         this.props.login(this.state.username, this.state.password);
        }



    render() {

      console.log("-----------------------")
        return(
            <>



              <div className="form-box-lr">
                <Form className="lr-form" onSubmit={this.handleSubmit}>
                  <Form.Group controlId="formBasicSearch" className="smaller-input">
                    <Form.Label htmlFor="username">Username :</Form.Label>
                    <Form.Control type="text" placeholder="Username"  name="username" id="username" className="form-text" onChange={(event)=> this.loginChange(event)} value={this.state.username}/>
                  </Form.Group>


                  <Form.Group controlId="formBasicSearch" className="smaller-input">
                    <Form.Label htmlFor="password">Password :</Form.Label>
                    <Form.Control type="text" placeholder="Password" name="password" id="password" className="form-text" onChange={(event)=> this.loginChange(event)} value={this.state.password}/>
                  </Form.Group>

                  <Button variant="success" type="submit" className="register-button">
                    Log In
                  </Button>
                </Form>

                <Link to="/users/register" className="to-signup">
                  New User? Sign Up Here
                </Link>
              </div>



            </>
        )

      }

}
