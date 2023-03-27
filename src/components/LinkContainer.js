import { useState } from 'react'
import Table from './Table';
import Form from './Form'; 
import '.App.css'

const LinkContainer = (props) => {
  const handleRemove = (index) => {
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */

            //drop at index command for array, have each array keep index counter
  }

  const handleSubmit = (favLink) => {
    /*
            TODO - Create logic to set state and add new favLink to favLinks array in state
        */
       

  }

  return (
    <div className="container">
      <h1>My Favorite Links</h1>
      <p>Add a new url with a name and link to the table.</p>
      {<Table /> /*TODO - Add Table Component */}

      <br />

      <h3>Add New</h3>
      {<Form /> /*TODO - Add Form Component */}
    </div>
  )
}

export default LinkContainer
