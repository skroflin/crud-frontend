import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import React from 'react'
import { getEmployees } from '../api'

const queryClient = new QueryClient()

export function Employee() {
    const {data, isLoading, isError, error} = useQuery({ queryKey: ["employeData"], queryFn: getEmployees})
    if (isLoading) return <div>Loading ...</div>
    if (isError) return <div>Error: {error.message}</div>
    return <div>
        {JSON.stringify(data)}
    </div>
}