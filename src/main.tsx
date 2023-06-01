import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import 'semantic-ui-css/semantic.min.css';
import { SideBar } from './Components/SideBar.tsx';
import { EmployeeTable } from './Components/Employee/EmployeeTable.tsx';
import { DepartmentTable } from './Components/Department/DepartmentTable.tsx';
import { HomeComponent } from './Components/HomeComponent.tsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
      <QueryClientProvider client={queryClient}>
        <SideBar links={[
          { id: "Employee", icon: "user", url: "employee", component: <EmployeeTable /> },
          { id: "Department", icon: "building", url: "department", component: <DepartmentTable /> },
          { id: "Home", icon: "home", url: "", component: <HomeComponent/>}
        ]} />
      </QueryClientProvider>
)
