import React, { Component } from 'react'
import "./Header/RecipeSearch.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CloseButton from 'react-bootstrap/CloseButton'


export default class EditForm extends Component {

  constructor(props){
      super(props)
      this.state= {
        recipe_name:"",
        steps:"",
        likes:"",
        comments:"",
      }
  }

  handleEditChange = (event) => {

       this.setState({
           [event.target.name]: event.target.value
       })
       console.log(this.state)
   }

   handleSubmit = (event) => {
     event.preventDefault();

     console.log(this.state)

     this.props.editRecipe(this.state.recipe_name, this.state.steps, this.state.likes, this.state.comments);
    }


  render() {

    return (
      <>


        <div className="form-box-lr">
          <Form className="lr-form" onSubmit={this.handleSubmit}>
            <Form.Label> Edit Recipe Form</Form.Label>
            <Form.Group  className="smaller-input">
              <Form.Label>Recipe Name</Form.Label>
              <Form.Control type="text" placeholder="Recipe Name" name="recipe_name" id="recipe_name" className="form-text" onChange={(event)=> this.handleEditChange(event)} value={this.state.recipe_name}/>
            </Form.Group>

            <Form.Group className="smaller-input">
              <Form.Label>Steps</Form.Label>
              <Form.Control type="text" placeholder="Steps" name="steps" id="steps" className="form-text" onChange={(event) => this.handleEditChange(event)} value={this.state.steps}/>
            </Form.Group>

            <Form.Group  className="smaller-input">
              <Form.Label>Likes</Form.Label>
              <Form.Control type="text" name="likes" id="likes" placeholder="Likes" className="form-text" onChange={(event) => this.handleEditChange(event)} value={this.state.likes}/>
            </Form.Group>

            <Form.Group  className="smaller-input">
              <Form.Label>Comments</Form.Label>
              <Form.Control type="text" name="comments" id="comments"  placeholder="Comments" className="form-text" onChange={(event) => this.handleEditChange(event)} value={this.state.comments}/>
            </Form.Group>

            <Button variant="success" type="submit" className="regis-button">
              Edit Recipe
            </Button>

            <CloseButton  variant="success"  />


          </Form>
        </div>




      </>
    );

  };

}
