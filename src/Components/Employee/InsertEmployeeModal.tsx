import React, { useState } from 'react'
import { Button, DropdownProps, Form, FormInputProps, Modal, Select } from 'semantic-ui-react'
import { EmployeeInsertReq } from '../../api'

interface InsertEmployeeModalProps {
  departments: Department[]
  onConfirm: (req: EmployeeInsertReq) => void
}

export function InsertEmployeeModal({ departments, onConfirm }: InsertEmployeeModalProps) {
  const [open, setOpen] = useState(false)
  const [request, setRequest] = useState<EmployeeInsertReq>({
    employeeName: "Dave",
    salary: 100,
    departmentName: "Sales",
    departmentLocation: "London"
  })
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
          <Form.Field><Form.Input
            fluid
            label="Name"
            placeholder="Pero Perich"
            onChange={(_, { value }: FormInputProps) => {
              setRequest({ ...request, employeeName: String(value) })
            }}
          />
          </Form.Field>
          <Form.Field>
            <Form.Input
              fluid
              label="Salary"
              placeholder="Some number"
              onChange={(_, { value }: FormInputProps) => {
                setRequest({ ...request, salary: Number(value) })
              }}
            />
          </Form.Field>
          <Form.Select
            options={departments.map((department: Department) => ({
              text: `${department.departmentName}, ${department.departmentLocation}`,
              value: `${department.departmentName}, ${department.departmentLocation}`,

            }))}
            label="Department"
            placeholder='E.g. Legal'
            search
            onChange={(_, { value }: DropdownProps) => {
              const departmentName = String(value).split(",")[0]
              const departmentLocation = String(value).split(",")[1]
              setRequest({ ...request, departmentName: departmentName, departmentLocation: departmentLocation })
            }
            }
          />
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
          onClick={() => {
            setOpen(false)
            console.log("CONFIRMING", request)
            onConfirm(request)
          }}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}