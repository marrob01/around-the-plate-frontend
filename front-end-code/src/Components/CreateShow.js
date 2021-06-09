import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Icon } from 'semantic-ui-react'


export default class RecipeView extends Component {
	constructor(props) {
		super(props)

	}


	render(){

		return(
			<>

				<div class='row' id="current-recipe-box">

            {this.props.userrecipes.map(userRecipe => {

            return (
              <div class='col-6'>
              <>
                <Card style={{ width: '18rem' }} key={userRecipe.id}>
                  <Card.Body>
                    <Card.Title>Recipe Name - {userRecipe.recipe_name}</Card.Title>
										<Card.Text>
											Posted-{userRecipe.created_date}
										</Card.Text>
										<Card.Text>
                      Made by - You
                    </Card.Text>
                    <Card.Text>
                      {userRecipe.comments}
                    </Card.Text>
                    <Card.Text>
                      {userRecipe.steps}
                    </Card.Text>

                    <Card.Text>
										<Icon link name='heart'/>
										 {userRecipe.likes}
                    </Card.Text>

										<Button id='delete' onClick={() => this.props.delete(userRecipe.id)} variant="outline-danger">Delete</Button>
										<Button onClick={() => this.props.edit(userRecipe)} variant="success">Edit Recipe</Button>
                  </Card.Body>

                </Card>
              </>

              </div>
            )
          })}
        </div>




			</>
		)
	}
}
