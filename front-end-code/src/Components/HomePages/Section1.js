import React, { Component } from 'react'
import {ReactComponent as Table} from "../images/svg-3.svg"
import "../Header/home.css";
import { Link } from 'react-router-dom';


import Button from 'react-bootstrap/Button'




export default class Home extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return(
          <>
            <section className="section1">
              <div>
                <Table className="section-1-img"/>
              </div>

              <div className="section-1-text">
                <h1>Around The Plate</h1>
                <p>Welcome to Around The Plate, discover and explore food thats right for you. Love to create new dishes? Upload your favorite recipe and share with the world! </p>

                <Link to="/your_recipe"><Button to="/" variant="success" className="regis-button">
                  Create A Recipe
                </Button></Link>

              </div>


            </section>

          </>
        );
    }
}
