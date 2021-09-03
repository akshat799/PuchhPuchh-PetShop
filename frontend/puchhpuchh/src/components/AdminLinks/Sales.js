import React from 'react'
import AdminNavbar from '../Admin/adminNavbar';
import SaleTable from './salesComponents/SaleTable';

export default function Sales() {
    return (
        <div>
            <AdminNavbar />
            <SaleTable />
        </div>
    )
}