import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClientProvider, QueryClient } from 'react-query';
import 'semantic-ui-css/semantic.min.css';
import { SideBar } from './Components/SideBar.tsx';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SideBar/>
    </QueryClientProvider>
  </React.StrictMode>,
)
