import React from 'react'
import AdminNavbar from '../Admin/adminNavbar';
import Table  from '../Table_admin/Table';
export default function Groomings() {
    return (
        <div>
            <AdminNavbar />
            <Table title='Groomings'/>
        </div>
    )
}