import React, { Component } from 'react'
import RecipeSearchComponent from './RecipeSearchComponent'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import "./RecipeSearch.css";
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default class RecipeSearch extends Component {
    constructor(props){
        super(props)
        this.state ={
          foundRecipes:[],
          recipeToBeSearched: "",
          query: '',
          openRecipeSearch: false,
        }

    }

    fetchRecipes = async (event) => {
      event.preventDefault();

      const response = await fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random?number=10&tags=" + this.state.recipeToBeSearched, {
      	"method": "GET",
      	"headers": {
      		"x-rapidapi-key": "9409d877cbmsh8d5fee67a548b45p14717ejsn82811e6366e5",
      		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
          }
        })

      const foundRecipess = await response.json()
      if( response.status === 200 || response.status === 201 ){
        this.setState ({
          foundRecipes: foundRecipess.recipes,
          recipeToBeSearched: '',
          openRecipeSearch:true,

        })
        console.log(this.state.foundRecipes)
      }


}



    handleChange = (event) => {

         this.setState({
             [event.target.id]: event.target.value
         })
         console.log(this.state)
     }


     setOpen= (bool)=>{
           this.setState({
               openRecipeSearch: bool
           })
       }





    render() {
      console.log(this.state.recipeToBeSearched)

        return(
          <>
          <div className="form-box" id="search-form">
            <Form className="recipe-search-form" onSubmit={this.fetchRecipes}>
              <Form.Group controlId="formBasicSearch" className="smaller-input">

                <Form.Control type="text" placeholder="Search A recipe" id="recipeToBeSearched"  className="form-text" onChange={(event)=> this.handleChange(event)} value={this.state.recipeToBeSearched}/>
                <Form.Text className="text">
                  Search A Recipe By Ingredient
                </Form.Text>
              </Form.Group>

              <Button variant="success" type="submit" className="recipe-search-button">
                Search
              </Button>
            </Form>

          </div>

          <hr></hr>
          {this.state.openRecipeSearch &&

            <div class='row' id="user-recipe-box">
            <Button variant="danger" onClick={() => this.setOpen(false)}> close</Button>

            {this.state.foundRecipes.map(foundRecipe => {


              return(




                  <div class='col-md-4'>

                    <>

                      <Card style={{ width: '18rem' }} key={foundRecipe._id}>
                        <Card.Img variant="top" src={foundRecipe.image} />
                        <Card.Body>


                          <Card.Title>Recipe Name - {foundRecipe.title}</Card.Title>
                          <ListGroup variant="flush">
                            <ListGroup.Item>Instructions- {foundRecipe.instructions}</ListGroup.Item>

                          </ListGroup>
                          <Card.Text>
                            Servers- {foundRecipe.servings}
                          </Card.Text>
                          <Card.Text>
                            Ready In - {foundRecipe.readyInMinutes}
                          </Card.Text>

                        </Card.Body>
                      </Card>
                    </>
                  </div>
                )
              })}
            </div>


          }



          </>
        )
    }
}
