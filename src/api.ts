import axios from "axios";

function apiGetCall(route: string) {
    return axios.get(`/api/${route}`, {
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': "*"
            }
        }).then((res) => res.data)
}

function apiPostCall<T>(route: string, data: T) {
    return axios.post(`/api/${route}`, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        },
        data: data
    }).then((res) => res.data)
}

function apiPutCall<T>(route: string, data: T) {
    return axios.put(`/api/${route}`, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        },
        data: data
    }).then((res) => res.data)
}

function apiDeleteCall<T>(route: string, data: T) {
    return axios.delete(`/api/${route}`, {
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': "*"
            },
            data: data
        }).then((res) => res.data)
}

export interface EmployeeDeleteReq {
    employeeName: string
}

export interface EmployeeUpdateReq {
    salary: number,
    departmentName: string,
    departmentLocation: string,
    employeeName: string
}

export interface EmployeeInsertReq {
    employeeName: string
    salary: number,
    departmentName: string,
    departmentLocation: string
}

export interface DepartemntDeleteReq {
    departmentName: string,
    departmentLocation: string
}

// employees
export const getEmployees = () => apiGetCall("employee")
export const deleteEmployee = (req: EmployeeDeleteReq) => apiDeleteCall<EmployeeDeleteReq>("employee", req)
export const updateEmployee = (req: EmployeeUpdateReq) => apiPutCall<EmployeeUpdateReq>("employee", req)
export const insertEmployee = (req: EmployeeInsertReq) => apiPostCall<EmployeeInsertReq>("employee", req)

// department
export const getDepartments = () => apiGetCall("department")
export const deleteDepartment = (req: DepartemntDeleteReq) => apiDeleteCall<DepartemntDeleteReq>("department", req)