


import React, { Component } from 'react'

import {ReactComponent as Github} from "./images/github.svg"
import {ReactComponent as Linkden} from "./images/linkden.svg"
import "./Header/RecipeSearch.css";





export default class App extends Component {

  constructor(props){
      super(props)

  }

  render() {


    return (
      <>

      <section className="footerBox">
        <p><a href="https://github.com/marrob01/Around-The-Plate">Github</a> |<a href="https://www.linkedin.com/in/marcusrobinson15/"> Linkden</a></p>
        <Github />
        <Linkden />

      </section>





      </>
    );

  };

}
