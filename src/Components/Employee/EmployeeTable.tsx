import { useQueries, useMutation } from "@tanstack/react-query";
import {
    EmployeeInsertReq,
    EmployeeUpdateReq,
    deleteEmployee,
    getDepartments,
    getEmployees,
    insertEmployee,
    updateEmployee,
} from "../../api";
import { Container, Loader, Message, Table } from "semantic-ui-react";
import styles from "../Styles.module.scss";
import { InsertEmployeeModal } from "./InsertEmployeeModal";
import { DeleteEmployeeModal } from "./DeleteEmployeeModal";
import { UpdateEmployeeModal } from "./UpdateEmployeeModal";
import { AxiosError } from "axios";
import { Employee } from "../../UI/Employee";
import { useState } from "react";

export function EmployeeTable() {
    const result = useQueries({
        queries: [
            { queryKey: ["employees"], queryFn: getEmployees },
            { queryKey: ["departments"], queryFn: getDepartments },
        ],
    });

    const [errorMessage, setErrorMessage] = useState<string | undefined>();

    const employeeDelete = useMutation({
        mutationFn: deleteEmployee,
        onSuccess: () => {
            result[0].refetch();
            setErrorMessage(undefined);
        },
        onError: () => setErrorMessage("Could not delete employee"),
    });

    const employeeUpdate = useMutation({
        mutationFn: updateEmployee,
        onSuccess: () => {
            result[0].refetch();
            setErrorMessage(undefined);
        },
        onError: () => setErrorMessage("Could not update employee"),
    });

    const employeeInsert = useMutation({
        mutationFn: insertEmployee,
        onSuccess: () => {
            result[0].refetch();
            setErrorMessage(undefined);
        },
        onError: () => setErrorMessage("Could not insert employee"),
    });

    if (result[0].isLoading || employeeDelete.isLoading) return <Loader />;
    if (result[0].isError)
        return (
            <Message>Error: {(result[0].error as AxiosError).message}</Message>
        );

    return (
        <Container className={styles.tableContainer}>
            {errorMessage && <Message error={true}>{errorMessage}</Message>}
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Employee Name</Table.HeaderCell>
                        <Table.HeaderCell>Salary</Table.HeaderCell>
                        <Table.HeaderCell>Department Name</Table.HeaderCell>
                        <Table.HeaderCell>Department Location</Table.HeaderCell>
                        <Table.HeaderCell>Last Modify Date</Table.HeaderCell>
                        <Table.HeaderCell>
                            <InsertEmployeeModal
                                departments={result[1].data}
                                onConfirm={(
                                    employeeInsertData: EmployeeInsertReq
                                ) => employeeInsert.mutate(employeeInsertData)}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {result[0].data.map((entry: Employee, i: number) => (
                        <Table.Row key={i}>
                            <Table.Cell>{entry.employeeName}</Table.Cell>
                            <Table.Cell>{entry.salary}</Table.Cell>
                            <Table.Cell>{entry.departmentName}</Table.Cell>
                            <Table.Cell>{entry.departmentLocation}</Table.Cell>
                            <Table.Cell>{entry.lastModifyDate}</Table.Cell>
                            <Table.Cell>
                                <DeleteEmployeeModal
                                    onConfirm={() =>
                                        employeeDelete.mutate({
                                            employeeName: entry.employeeName,
                                        })
                                    }
                                />
                                <UpdateEmployeeModal
                                    departments={result[1].data}
                                    onConfirm={(
                                        employeeUpdateData: EmployeeUpdateReq
                                    ) =>
                                        employeeUpdate.mutate(
                                            employeeUpdateData
                                        )
                                    }
                                    employee={entry}
                                />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
}
