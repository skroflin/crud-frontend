import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'semantic-ui-css/semantic.min.css';
import { SideBar } from './Components/SideBar.tsx';
import { Employee } from './Components/Employee/Employee.tsx';
import { Department } from './Components/Department/Department.tsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <QueryClientProvider client={queryClient}>
        <SideBar links={[
          { id: "Employee", icon: "user", url: "/", component: <Employee /> },
          { id: "Department", icon: "building", url: "department", component: <Department /> },
        ]} />
      </QueryClientProvider>
)
