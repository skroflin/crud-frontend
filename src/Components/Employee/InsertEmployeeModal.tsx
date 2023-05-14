import React, { useState } from 'react' 
import { Button, Form, Modal, Select } from 'semantic-ui-react'

interface InsertEmployeeModalProps {
    departments: Department[]
}

export function InsertEmployeeModal({ departments } : InsertEmployeeModalProps) {
  
  const [open, setOpen] = useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Insert Employee</Button>}
    >
      <Modal.Header>Fill in the required data</Modal.Header>
      <Modal.Content>
      <Form>
    <Form.Field>
      <label>Employee Name</label>
      <input placeholder='E.g. Pero Perich' />
    </Form.Field>
    <Form.Field>
      <label>Salary</label>
      <input placeholder='A certain amount' />
    </Form.Field>
    <Form.Field
        control={Select}
        options={departments.map((department: Department) => ({
          key: `${department.departmentName}, ${department.departmentLocation}`,
          text: `${department.departmentName}, ${department.departmentLocation}`,
          value: department 
        }))}
        label={{ children: 'Departments', htmlFor: 'form-select-control-departments' }}
        placeholder='Departments'
        search
        searchInput={{ id: 'form-select-control-departments '}}
    />
    <Form.Field>
      <label>Last Modify Date</label>
      <input placeholder='April, May, June etc.' />
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