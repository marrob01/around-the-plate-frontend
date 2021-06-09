import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';



export default class NavBar extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }


    render() {
        return(
          <>
            <nav>
              {(this.props.logedin ?
                <>

                <Navbar bg="dark" variant="dark" fixed="top" >
                  <Navbar.Brand as={Link} to='/'>Around The Plate</Navbar.Brand>
                  <Container>
                    <Nav className="me-auto">

                      <Nav.Link as={Link} to="/favorites" className="favorites">Favorites</Nav.Link>
                      <Nav.Link as={Link} to="/your_recipe" className="your-recipe">Your Recipes</Nav.Link>
                      <Nav.Link as={Link} to="/view_recipe" className="view-recipe">User Recipes</Nav.Link>
                      <div className="logout">

                        <Nav.Link onClick={this.props.logoutUser}>Logout</Nav.Link>
                      </div>

                  </Nav>
                  </Container>



                </Navbar>



                </>
              :
                <>
                <Navbar bg="dark" variant="dark" fixed="top">
                  <Navbar.Brand as={Link} to='/'>Around The Plate</Navbar.Brand>
                    <Nav className="mr-auto">

                      <Nav.Link as={Link} to="/favorites" className="favorites">Favorites</Nav.Link>
                      <Nav className="justify-content-end">
                        <Nav.Link as={Link} to="/users/register" >Register</Nav.Link>
                        <Nav.Link as={Link} to="/users/login" >Log In</Nav.Link>

                      </Nav>

                  </Nav>


                </Navbar>



                </>


              )}
            </nav>

          </>

        )
    }
}
