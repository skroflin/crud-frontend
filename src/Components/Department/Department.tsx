import React from 'react'
import { getDepartments } from '../../api'
import { useQuery } from '@tanstack/react-query'
import { Container, Table } from 'semantic-ui-react'
import styles from '../Styles.module.scss'
import { InsertDepartmentModal } from './InsertDepartmentModal'
import { DeleteDepartmentModal } from './DeleteDepartmentModal'
import { UpdateDepartmentModal } from './UpdateDepartmentModal'


export function Department() {
    const { data, isLoading, isError, error } = useQuery({ queryKey: ["departmentData"], queryFn: getDepartments })
    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error: {error.message}</div>
    return (
        <Container className={styles.tableContainer}>
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Department Name</Table.HeaderCell>
                        <Table.HeaderCell>Department Location</Table.HeaderCell>
                        <Table.HeaderCell><InsertDepartmentModal/></Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {
                        data.map((entry: Department) => <Table.Row>
                            <Table.Cell>{entry.departmentName}</Table.Cell>
                            <Table.Cell>{entry.departmentLocation}</Table.Cell>
                            <Table.Cell className='department-cell'><DeleteDepartmentModal/><UpdateDepartmentModal/></Table.Cell>
                        </Table.Row>)
                    }
                </Table.Body>
            </Table>
        </Container>)
}