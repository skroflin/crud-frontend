import { useState } from "react";
import { Button, Form, FormInputProps, Modal } from "semantic-ui-react";
import { DepartmentUpdateReq } from "../../api";
import { Department } from "../../UI/Department";

interface UpdateDepartmentModalProps {
    onConfirm: (req: DepartmentUpdateReq) => void;
    department: Department
}

export function UpdateDepartmentModal({
    onConfirm
}: UpdateDepartmentModalProps) {
    const [open, setOpen] = useState(false);
    const [request, setRequest] = useState<DepartmentUpdateReq>({
        departmentName: "Development",
        departmentLocation: "London",
    });

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button className="update-department">Update</Button>}
        >
            <Modal.Header>Fill in the required data to update</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <Form.Input
                            fluid
                            label="Department Name"
                            placeholder="E.g. Development"
                            onChange={(_, { value }: FormInputProps) => {
                                setRequest({
                                    ...request,
                                    departmentName: String(value),
                                });
                            }}
                        />
                    </Form.Field>
                    <Form.Field>
                    <Form.Input
                            fluid
                            label="Department Location"
                            placeholder="E.g. London"
                            onChange={(_, { value }: FormInputProps) => {
                                setRequest({
                                    ...request,
                                    departmentLocation: String(value),
                                });
                            }}
                        />
                    </Form.Field>
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
