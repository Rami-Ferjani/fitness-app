import React from 'react'
import {Form,FormGroup,Input,Button} from "reactstrap"
import "../../../css/Exercice.css"
function Exercice() {
    return (
        <div >
             <Form>
      <FormGroup className="exercice">
        <Input
          type="text"
          name="name"
          id="exerciceName"
          placeholder="Exercice name"
        />
         <Input
          type="text"
          name="sets"
          id="sets"
          placeholder="Sets"
        />
         <Input
          type="text"
          name="reps"
          id="reps"
          placeholder="Reps"
        />
        <Input
          type="text"
          name="link"
          id="link"
          placeholder="Video Link"
        />
        <Button color="primary">Add</Button>
      </FormGroup>
    </Form>
        </div>
    )
}

export default Exercice
