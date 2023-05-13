import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getEmployees } from '../../api'
import { Container, Segment, Table } from 'semantic-ui-react'
import styles from '../Styles.module.scss'
import { InsertEmployeeModal } from './InsertEmployeeModal'
import { DeleteEmployeeModal } from './DeleteEmployeeModal'


export function Employee() {
    const { data, isLoading, isError, error } = useQuery({ queryKey: ["employeData"], queryFn: getEmployees })
    console.log(data)
    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error: {error.message}</div>
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
                        <Table.HeaderCell><InsertEmployeeModal/></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        data.map((entry: Employee) => <Table.Row>
                            <Table.Cell>{entry.employeeName}</Table.Cell>
                            <Table.Cell>{entry.salary}</Table.Cell>
                            <Table.Cell>{entry.departmentName}</Table.Cell>
                            <Table.Cell>{entry.departmentLocation}</Table.Cell>
                            <Table.Cell>{entry.lastModifyDate}</Table.Cell>
                            <Table.Cell><DeleteEmployeeModal/></Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </Container>)
}