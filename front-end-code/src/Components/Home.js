import React, { Component } from 'react'
import {ReactComponent as Table} from "./images/svg-1.svg"
import Section1 from "./HomePages/Section1"
import Section2 from "./HomePages/Section2"
import Section3 from "./HomePages/Section3"

export default class Home extends Component {
    constructor(props){
        super(props)


    }

    render() {
        return(
          <>
            <Section1 />
            <Section2 />
            <Section3 />

          </>
        );
    }
}
