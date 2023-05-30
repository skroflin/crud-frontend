import { useState } from "react";
import { Button, Confirm } from "semantic-ui-react";

interface DeleteDepartmentModalProps {
    onConfirm: () => void;
}

export function DeleteDepartmentModal({
    onConfirm,
}: DeleteDepartmentModalProps) {
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
