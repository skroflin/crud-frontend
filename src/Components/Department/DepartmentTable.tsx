import { useState } from "react";
import { deleteDepartment, getDepartments, insertDepartment } from "../../api";
import { useMutation, useQuery } from "@tanstack/react-query";
import { Container, Loader, Message, Table } from "semantic-ui-react";
import styles from "../Styles.module.scss";
import { InsertDepartmentModal } from "./InsertDepartmentModal";
import { DeleteDepartmentModal } from "./DeleteDepartmentModal";
import { UpdateDepartmentModal } from "./UpdateDepartmentModal";
import { AxiosError } from "axios";
import { Department } from "../../UI/Department";

export function DepartmentTable() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["departmentData"],
        queryFn: getDepartments,
    });

    const [errorMessage, setErrorMessage] = useState<string>();

    const departmentDelete = useMutation({
        mutationFn: deleteDepartment,
        onSuccess: () => {
            refetch();
            setErrorMessage(undefined);
        },
        onError: () => setErrorMessage("Could not delete department")
    });

    const departmentInsert = useMutation({
        mutationFn: insertDepartment,
        onSuccess: () => {
            refetch();
            setErrorMessage(undefined);
        },
        onError: (_error, variables, _context) => setErrorMessage(`
            Could not insert ${variables.departmentName}, ${variables.departmentLocation}`),
    });



    if (isLoading) return <Loader />;
    if (isError)
        return (
            <Message negative={true}>
                Error: {(error as AxiosError).message}
            </Message>
        );

    return (
        <Container className={styles.tableContainer}>
            {errorMessage && <Message error={true}>{errorMessage}</Message>}
            <Table celled striped>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Department Name</Table.HeaderCell>
                        <Table.HeaderCell>Department Location</Table.HeaderCell>
                        <Table.HeaderCell>
                            <InsertDepartmentModal
                                onConfirm={departmentInsert.mutate}
                            />
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {data.map((entry: Department, i: number) => (
                        <Table.Row key={i}>
                            <Table.Cell>{entry.departmentName}</Table.Cell>
                            <Table.Cell>{entry.departmentLocation}</Table.Cell>
                            <Table.Cell className="department-cell">
                                <DeleteDepartmentModal
                                    onConfirm={() =>
                                        departmentDelete.mutate({
                                            departmentName:
                                                entry.departmentName,
                                            departmentLocation:
                                                entry.departmentLocation,
                                        })
                                    }
                                />
                                <UpdateDepartmentModal />
                            </Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table>
        </Container>
    );
}
