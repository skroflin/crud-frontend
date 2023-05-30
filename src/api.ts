import axios from "axios";

async function apiGetCall(route: string) {
    const res = await axios.get(`/api/${route}`, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        }
    });
    return res.data;
}

async function apiPostCall<T>(route: string, data: T) {
    const res = await axios.post(`/api/${route}`, data, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        }
    });
    return res.data;
}

async function apiPutCall<T>(route: string, data: T) {
    const res = await axios.put(`/api/${route}`, data, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        }
    });
    return res.data;
}

async function apiDeleteCall<T>(route: string, data: T) {
    const res = await axios.delete(`/api/${route}`, {
        headers: {
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Origin': "*"
        },
        data: data
    });
    return res.data;
}

// employees
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

export const getEmployees = () => apiGetCall("employee")
export const deleteEmployee = (req: EmployeeDeleteReq) => apiDeleteCall<EmployeeDeleteReq>("employee", req)
export const updateEmployee = (req: EmployeeUpdateReq) => apiPutCall<EmployeeUpdateReq>("employee", req)
export const insertEmployee = (req: EmployeeInsertReq) => apiPostCall<EmployeeInsertReq>("employee", req)

// department
export interface DepartemntDeleteReq {
    departmentName: string,
    departmentLocation: string
}

export interface DepartmentInsertReq {
    departmentName: string,
    departmentLocation: string
}

export const getDepartments = () => apiGetCall("department")
export const deleteDepartment = (req: DepartemntDeleteReq) => apiDeleteCall<DepartemntDeleteReq>("department", req)
export const insertDepartment = (req: DepartemntDeleteReq) => apiPostCall<DepartmentInsertReq>("department", req)
