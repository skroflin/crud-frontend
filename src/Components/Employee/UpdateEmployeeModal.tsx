import React, { useState } from 'react'
import { Button, Form, Modal, Select } from 'semantic-ui-react'
import { EmployeeUpdateReq } from '../../api'

interface UpdateEmployeeModalProps {
    departments: Department[]
    onConfirm: (req: EmployeeUpdateReq) => void
    employee: Employee
}

export function UpdateEmployeeModal({ departments, onConfirm, employee }: UpdateEmployeeModalProps) {
    const [open, setOpen] = useState(false)
    const [request, setRequest] = useState<EmployeeUpdateReq>({
        departmentLocation: employee.departmentLocation,
        departmentName: employee.departmentName,
        salary: employee.salary,
        employeeName: employee.employeeName
    })

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className='update-employee'>Update</Button>}
        >
            <Modal.Header>Fill in the required data to update</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input >
                    </Form.Input>
                    <Form.Field
                        control={Select}
                        options={departments.map((department: Department) => ({
                            key: `${department.departmentName}, ${department.departmentLocation}`,
                            text: `${department.departmentName}, ${department.departmentLocation}`,
                            value: department
                        }))}
                        label={{ children: 'Departments', htmlFor: 'form-select-control-departments' }}
                        placeholder='E.g. Legal'
                        search
                        searchInput={{ id: 'form-select-control-departments ' }}
                        
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
                        onConfirm(request)
                    }}
                    positive
                />
            </Modal.Actions>
        </Modal>
    )
}