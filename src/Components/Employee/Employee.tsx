import { useQueries, useMutation } from '@tanstack/react-query'
import React from 'react'
import { EmployeeUpdateReq, deleteEmployee, getDepartments, getEmployees, updateEmployee } from '../../api'
import { Container, Loader, Table } from 'semantic-ui-react'
import styles from '../Styles.module.scss'
import { InsertEmployeeModal } from './InsertEmployeeModal'
import { DeleteEmployeeModal } from './DeleteEmployeeModal'
import { UpdateEmployeeModal } from './UpdateEmployeeModal'


export function Employee() {
    const result = useQueries({
        queries: [
            { queryKey: ["employees"], queryFn: getEmployees },
            { queryKey: ["departments"], queryFn: getDepartments },
        ]
    })

    const employeeDelete = useMutation({
        mutationFn: deleteEmployee
    })

    const employeeUpdate = useMutation({
        mutationFn: updateEmployee
    })
    
    if (result[0].isLoading || employeeDelete.isLoading) return <Loader />
    if (result[0].isError) return <div>Error: {result[0].error.message}</div>
    return (
        <Container className={styles.tableContainer}>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee Name</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Department Name</Table.HeaderCell>
                        <Table.HeaderCell>Department Location</Table.HeaderCell>
                        <Table.HeaderCell>Last Modify Date</Table.HeaderCell>
                        <Table.HeaderCell><InsertEmployeeModal departments={result[1].data}/></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        result[0].data.map((entry: Employee) => <Table.Row>
                            <Table.Cell>{entry.employeeName}</Table.Cell>
                            <Table.Cell>{entry.salary}</Table.Cell>
                            <Table.Cell>{entry.departmentName}</Table.Cell>
                            <Table.Cell>{entry.departmentLocation}</Table.Cell>
                            <Table.Cell>{entry.lastModifyDate}</Table.Cell>
                            <Table.Cell>
                                <DeleteEmployeeModal onConfirm={() => employeeDelete.mutate({employeeName : entry.employeeName})}/>
                                <UpdateEmployeeModal 
                                                departments={result[1].data} 
                                                onConfirm={(employeeUpdateData: EmployeeUpdateReq) => employeeUpdate.mutate(employeeUpdateData)}
                                                employee={entry}
                                                />
                            </Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </Container>)
}