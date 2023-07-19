import React from 'react'
import { Form as BTForm, FormGroup, Input, Label, Col, Button} from 'reactstrap';



const ThoughtsForm = ({date,inputThoughts,handleDate,handleInputThoughts,handleSave}) => {
 
  
  
  return (
    <div className='mb-3'>
      <h1>Thoughts for the Day</h1>
      <BTForm className='form p-3 bg-info rounded-3'  onSubmit={handleSave}>
        <FormGroup className='row'>
            <Label for='date'>Date:</Label>
            <Col sm="4">
                <Input 
                    type='text' 
                    name='date' 
                    id='date' 
                    placeholder={date}
                    value={date}
                    onChange={handleDate}
                    readOnly>

                </Input>
            </Col>
        </FormGroup>

        <FormGroup className='row'>
            <Label for='inputThoughts'>Input Thoughts:</Label>
            <Col sm="4">
                <textarea 
                    className='w-100'
                    type='text' 
                    name='inputThoughts' 
                    id='inputThoughts' 
                    placeholder='Input fields for thoughts' 
                    value={inputThoughts} 
                    onChange={handleInputThoughts}>

                </textarea>
            </Col>
        </FormGroup>

        <Button className='border-white' type='save'color='primary'>Save</Button>
      </BTForm>
    </div>
  )
}

export default ThoughtsForm
