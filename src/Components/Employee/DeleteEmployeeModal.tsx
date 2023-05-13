import React, { useState } from 'react'
import { Button, Confirm } from 'semantic-ui-react'


export function DeleteEmployeeModal () {
    const [ open, setOpen ] = useState(false)
    
    return <>
    <Button onClick={() => setOpen(true)}>Delete</Button>
        <Confirm
          open={open}
          onCancel={() => setOpen(false)}
          onConfirm={() => setOpen(false)}
        />
    </>
}