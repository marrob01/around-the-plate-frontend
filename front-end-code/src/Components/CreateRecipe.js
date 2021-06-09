

import React, { Component } from 'react'
import RecipeView from './CreateShow'
import NewFrom from './CreateRecipeForm'
import Button from 'react-bootstrap/Button';
import EditForm from './EditForm'
import {ReactComponent as Table} from "./images/svg-4.svg"
import "./Header/RecipeSearch.css";






export default class Create extends Component {

  constructor(){
      super()
      this.state ={
        userRecipes : [],
        ModalOpen: false,
        editModalOpen: false,
        iDoFrecipeToBeEdited: {},
        recipeToBeEdited: null,

      }
    }

    editRecipe = async (recipe_name, steps, likes, comments) => {

          let body = JSON.stringify({
            recipe_name:recipe_name,
            steps:steps,
            likes:likes,
            comments:comments,
          })
          console.log(body)

          const response = await fetch('http://localhost:8000/api/v1/recipes/ ' +this.state.iDoFrecipeToBeEdited.id , {
            method: 'PUT',
            credentials: 'include',

            headers: {
              'Content-Type' : 'application/json'
            },

            body:body
          })
          if (response.status===200 || response.status===201 ){
            const updatedRecipe = await response.json()
            const findIndex = this.state.userRecipes.findIndex(recipe => recipe.id === updatedRecipe.data.id)
            const copyRecipes = [...this.state.userRecipes]
            copyRecipes[findIndex] = updatedRecipe.data
            this.setState({
              userRecipes: copyRecipes,
              editModalOpen:false
            })

        }
    }

    editRecipeForm = (userRecipe) => {
        console.log("click 123")
        this.setState({
            editModalOpen: !this.state.editModalOpen,
            iDoFrecipeToBeEdited: userRecipe,
            recipeToBeEdited: userRecipe,
        })
        console.log(this.state.iDoFrecipeToBeEdited)

    }

    closeEditRecipeForm  ()  {
        console.log("click 123")
        this.setState({
            closeEditModalOpen: !this.state.editModalOpen,

        })

    }



    getUserRecipes = async (id) => {

    try{
      const response = await fetch('http://localhost:8000/api/v1/recipes/user_recipe', {method: "GET", credentials: 'include'})
      const userRecipes = await response.json()
      console.log(userRecipes)
      if(response.status === 200 || response.status === 201 ){
        this.setState({
          userRecipes: userRecipes.data
        })
      }
    }
    catch(err) {
      console.log('Error: ', err);
    }
  }

  addRecipe = (newRecipe) => {
    const copyRecipe = [...this.state.userRecipes]
    console.log(copyRecipe)
    copyRecipe.push(newRecipe)
    this.setState({
      userRecipes: copyRecipe
    })
    this.getUserRecipes()
  }

  createRecipe = async ( recipe_name, steps, likes, comments) => {


    let body = JSON.stringify({
      recipe_name:recipe_name,
      steps:steps,
      likes:likes,
      comments:comments,
    })

    console.log(body)

      const response = await fetch('http://localhost:8000/api/v1/recipes/ ', {
        credentials: 'include',
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body:body

      })
      if(response.status === 201 || response.status === 200){
        const recipes = await response.json()
        const recipeData = recipes.data
        console.log(recipeData)
        this.addRecipe(recipeData)
        this.setState({
          ModalOpen:false
        })

      }


    }

    addRecipeForm = () => {
        // console.log("click 123")
        this.setState({
            ModalOpen: !this.state.ModalOpen

        })
    }








  deleteRecipe = async (id) => {

    try{
      const response = await fetch( 'http://localhost:8000/api/v1/recipes/' + id, {
        method: 'DELETE',
        credentials: "include"
      })

      if (response.status===200 || response.status===201 ){

        const findIndex = this.state.userRecipes.findIndex(userRecipe => userRecipe._id === id)
        const copyRecipe = [...this.state.userRecipe]
        copyRecipe.splice(findIndex, 1)

        this.setState({
          userRecipes: copyRecipe
        })
      }
      this.getUserRecipes()

    }
    catch(err){
      console.log('Error => ', err);
    }
  }

  componentDidMount () {
    this.getUserRecipes()

  }

  render() {
    console.log(this.state.userRecipes)

    console.log(this.state.iDoFrecipeToBeEdited)


    return (
      <>
        <div className="outter-box">
            <RecipeView userrecipes={this.state.userRecipes} addRecipe={this.addRecipe} delete={this.deleteRecipe} edit={this.editRecipeForm} />

            <div className="inner-box">
              <Button variant="success" onClick={this.addRecipeForm}>Add Recipe </Button>
              {this.state.editModalOpen &&
                <EditForm editRecipe={this.editRecipe} />
              }

              {this.state.ModalOpen &&
                <NewFrom createRecipe={this.createRecipe} />
              }
            </div>
        </div>






         { this.state.userRecipes.length === 0 &&
           <>
           <div classname="no-recipe-box">
             <h1>You Have No Recipes</h1>

             <h1>
             <Table  className="no-recipes"/>

             </h1>
            </div>
           </>

          }




      </>
    );

  };

}
