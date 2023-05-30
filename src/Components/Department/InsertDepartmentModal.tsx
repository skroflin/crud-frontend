import { useState } from "react";
import { Button, Form, FormInputProps, Modal } from "semantic-ui-react";
import { DepartmentInsertReq } from "../../api";

interface InsertDepartmentModalProps {
    onConfirm: (req: DepartmentInsertReq) => void;
}

export function InsertDepartmentModal({
    onConfirm,
}: InsertDepartmentModalProps) {
    const [open, setOpen] = useState(false);
    const [request, setRequest] = useState<DepartmentInsertReq>({
        departmentName: "Development",
        departmentLocation: "London",
    });

    return (
        <Modal
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            trigger={<Button>Insert Department</Button>}
        >
            <Modal.Header>Fill in the required data</Modal.Header>
            <Modal.Content>
                <Form>
                    <Form.Field>
                        <Form.Input
                            fluid
                            label="Department Name"
                            placeholder="Development"
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
                            placeholder="London"
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
