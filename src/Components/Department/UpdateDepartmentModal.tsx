import React, { useState } from 'react' 
import { Button, Form, Modal, Select } from 'semantic-ui-react'

export function UpdateDepartmentModal() {
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button className='update-department'>Update</Button>}
    >
      <Modal.Header>Fill in the required data to update</Modal.Header>
      <Modal.Content>
      <Form>
    <Form.Field>
      <label>Department Name</label>
      <input placeholder='E.g. Sales' />
    </Form.Field>
    <Form.Field>
      <label>Department Location</label>
      <input placeholder='E.g. Oslo' />
    </Form.Field>
  </Form>
      </Modal.Content>
      <Modal.Actions>
        <Button
        content="Close"
        labelPosition='right' 
        color='red'
        icon='close'
        onClick={() => setOpen(false)}
        />
        <Button
          content="Confirm"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}