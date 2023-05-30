import { useState } from "react";
import {
    Button,
    DropdownProps,
    Form,
    FormInputProps,
    Modal,
} from "semantic-ui-react";
import { EmployeeUpdateReq } from "../../api";
import { Department } from "../../UI/Department";
import { Employee } from "../../UI/Employee";

interface UpdateEmployeeModalProps {
    departments: Department[];
    onConfirm: (req: EmployeeUpdateReq) => void;
    employee: Employee;
}

export function UpdateEmployeeModal({
    departments,
    onConfirm,
    employee,
}: UpdateEmployeeModalProps) {
    const [open, setOpen] = useState(false);
    const [request, setRequest] = useState<EmployeeUpdateReq>({
        departmentLocation: employee.departmentLocation,
        departmentName: employee.departmentName,
        salary: employee.salary,
        employeeName: employee.employeeName,
    });

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="update-employee">Update</Button>}
        >
            <Modal.Header>Fill in the required data to update</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Input
                        fluid
                        label="Salary"
                        placeholder="Some number"
                        onChange={(_, { value }: FormInputProps) => {
                            setRequest({ ...request, salary: Number(value) });
                        }}
                    />

                    <Form.Select
                        label="Department"
                        options={departments.map((department: Department) => ({
                            text: `${department.departmentName}, ${department.departmentLocation}`,
                            value: `${department.departmentName}, ${department.departmentLocation}`,
                        }))}
                        placeholder="E.g. Legal"
                        search
                        onChange={(_, { value }: DropdownProps) => {
                            const departmentName = String(value).split(",")[0];
                            const departmentLocation =
                                String(value).split(",")[1];
                            setRequest({
                                ...request,
                                departmentName: departmentName,
                                departmentLocation: departmentLocation,
                            });
                        }}
                    />
                </Form>
            </Modal.Content>
            <Modal.Actions>
                <Button
                    content="Close"
                    labelPosition="right"
                    color="red"
                    icon="close"
                    onClick={() => setOpen(false)}
                />
                <Button
                    content="Confirm"
                    labelPosition="right"
                    icon="checkmark"
                    onClick={() => {
                        setOpen(false);
                        onConfirm(request);
                    }}
                    positive
                />
            </Modal.Actions>
        </Modal>
    );
}
