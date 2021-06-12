import React, { Component } from 'react'
import CreateShow from './CreateShow'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Icon } from 'semantic-ui-react'
import "./Header/RecipeSearch.css";

let baseURL;

if (process.env.NODE_ENV === 'development') {
  baseURL = 'http://localhost:8000';
} else {
  baseURL = process.env.REACT_APP_BASEURL
}

export default class App extends Component {

  constructor(props){
      super(props)
      this.state = {
        allRecipes: [],
        recipeToBeLiked: {},

      }

  }



    getAllRecipes = async (id) => {

    try{
      const response = await fetch(this.props.baseURL + '/api/v1/recipes/all_recipes', {method: "GET", credentials: 'include'})
      const allRecipes = await response.json()
      console.log(allRecipes)
      if(response.status === 200 || response.status === 201 ){
        this.setState({
          allRecipes: allRecipes.data,

        })
      }
    }
    catch(err) {
      console.log('Error: ', err);
    }
  }

      handleRecipe = (newrecipe) => {
      const copyAllRecipes = [...this.state.allRecipes]
      console.log(copyAllRecipes)
      copyAllRecipes.push(newrecipe)
      this.setState({
        allRecipes: copyAllRecipes
      })

    }

      componentDidMount() {
        this.getAllRecipes()
      }



      likeRecipeHelper = (recipe) => {
          console.log("click 123")
          this.setState({
              recipeToBeLiked: recipe,
          })
          this.likeRecipe()
          console.log(this.state.recipeToBeLiked)

      }


      likeRecipe = async (id) => {

          const url = baseURL + '/api/v1/recipes/' + this.state.recipeToBeLiked.id + '/like'
          const response = await fetch(url, {method: "POST", credentials: 'include'})
          const likedRecipe = await response.json();
          console.log(url)
          console.log(likedRecipe)
          this.getAllRecipes();


      }


  render() {
    console.log(this.state.allRecipes)
    console.log(this.state.recipeToBeLiked)

    return (
      <>

        <div class='row' id="user-recipe-box">

          {this.state.allRecipes.map(recipe => {

            return (
              <div class='col-md-4' >
              <>
                <Card style={{ width: '18rem' }} Style="height: 100%" key={recipe._id}>
                  <Card.Body>
                    <Card.Title>Recipe Name - {recipe.recipe_name}, by {recipe.name.username}</Card.Title>
                    <Card.Text>
                      Posted-{recipe.created_date}
                    </Card.Text>
                    <Card.Text>
                      {recipe.comments}
                    </Card.Text>
                    <Card.Text>
                      {recipe.steps}
                    </Card.Text>

                    <Card.Text>
                    <Icon link name='heart'/>
                     {recipe.likes}
                    </Card.Text>

                    <Button onClick={() => this.likeRecipeHelper(recipe)}variant="outline-danger">Like</Button>
                  </Card.Body>
                </Card>
              </>

              </div>
            )
          })}
        </div>


    </>
    );

  };

}
