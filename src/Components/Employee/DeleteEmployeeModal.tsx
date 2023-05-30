import { useState } from "react";
import { Button, Confirm } from "semantic-ui-react";

interface DeleteEmployeeModalProps {
    onConfirm: () => void;
}

export function DeleteEmployeeModal({ onConfirm }: DeleteEmployeeModalProps) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Delete</Button>
            <Confirm
                open={open}
                onCancel={() => setOpen(false)}
                onConfirm={() => {
                    setOpen(false);
                    onConfirm();
                }}
            />
        </>
    );
}
