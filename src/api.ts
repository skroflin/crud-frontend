import axios from "axios";

function apiGetCall(route: string) {
    return axios.get(`/api/${route}`, {
            headers: {
                'Access-Control-Allow-Credentials': 'true',
                'Access-Control-Allow-Origin': "*"
            }
        }).then((res) => res.data)
}

// employees
export const getEmployees = () => apiGetCall("employee")

// department
