import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import {ReactComponent as Table} from "../images/svg-5.svg"
import "../Header/home.css";
import { Link } from 'react-router-dom';




export default class Home extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return(
          <>

          <section className="section2">



            <div className="section-2-text">
              <h1>What’s good for your heart?</h1>
              <p> Find out more about eating nutritiously, get tips and discover new ingredients to use in your meals. Search by ingredient or meal type to find new recipes to try.</p>
              <Link to="/view_recipe"><Button to="/" variant="success" className="regis-button">
                Discover Recipes
              </Button></Link>
            </div>

            <div className="section-2-img-box">

              <Table id="section-2-img"/>
            </div>


          </section>


          </>
        );
    }
}
