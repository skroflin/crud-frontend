import React from 'react'
import { getDepartments } from '../api'
import { useQuery } from '@tanstack/react-query'


export function Department() {
    const { data, isLoading, isError, error } = useQuery({ queryKey: ["employeData"], queryFn: getDepartments })
    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error: {error.message}</div>
    return <div>
        {JSON.stringify(data)}
    </div>
}