import React from 'react'
import AdminNavbar from '../Admin/adminNavbar';
import Table  from '../Table_admin/Table';
export default function Inventory() {
    return (
        <div>
            <AdminNavbar />
            <Table title='Inventory'/>
        </div>
    )
}
