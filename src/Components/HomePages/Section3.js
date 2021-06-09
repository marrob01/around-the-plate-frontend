import React, { Component } from 'react'
import "../Header/home.css";
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'





export default class Home extends Component {
    constructor(props){
        super(props)
        this.state ={
          foundWine:[],
          foundWineDescription:[],
          wineToBeSearched: "",
          openWine: false
        }


    }


    fetchWine = async (event) => {
      event.preventDefault();


      const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/food/wine/pairing?food=" + this.state.wineToBeSearched, {
      	"method": "GET",
      	"headers": {
          "x-rapidapi-key": "b618d63831msh68b425a29138d9fp1da56ajsn640a4026624d",
		      "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
          }
        })

      const foundWine = await response.json()
      if( response.status === 200 || response.status === 201 ){
        this.setState ({
          foundWine: foundWine.pairedWines,
          foundWineDescription:foundWine.pairingText,

          wineToBeSearched: '',
          openWine:true

        })
        console.log(this.state.foundWine)
        console.log(this.state.foundWineDescription)
      }


}
    setOpen= (bool)=>{
          this.setState({
              openWine: bool
          })
      }



    handleChange = (event) => {

         this.setState({
             [event.target.id]: event.target.value
         })
         console.log(this.state)
     }




    render() {
      console.log(this.state.foundWine)
        return(
          <>
            <section className="section3">

              <h1>Find The Perfect Wine For Your Food</h1>
              <div className="form-box" id="search-form">
                <Form className="wine-search-form" onSubmit={this.fetchWine}>
                  <Form.Group controlId="formBasicSearch" className="smaller-input">

                    <Form.Control type="text" placeholder="Search A Food" id="wineToBeSearched"  className="form-text" onChange={(event)=> this.handleChange(event)} value={this.state.wineToBeSearched}/>
                    <Form.Text className="text">
                      Search A Food
                    </Form.Text>
                  </Form.Group>

                  <Button variant="success" type="submit" className="wine-search-button">
                    Search
                  </Button>
                </Form>

              </div>
              {this.state.openWine &&

                <>
                {this.state.foundWine.map(foundWine => {


                  return(

                      <div class='col-md-4'>
                        <>
                          <div key={foundWine._id}>
                            <ol>
                              <li>{foundWine} </li>
                            </ol>

                          </div>

                        </>


                      </div>
                    )
                  })}

                  <p>{this.state.foundWineDescription}</p>




                <Button variant="danger" onClick={() => this.setOpen(false)}> close</Button>
                </>

              }

            </section>

          </>
        );
    }
}
