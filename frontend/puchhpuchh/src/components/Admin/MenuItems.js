import { Button } from '@material-ui/core';


export const MenuItems = [
    {
        title: 'Sales',
        url: '/admin',
        cName: 'nav-links'
    },
    {
        title: 'Inventory',
        url: '/admin/inventories',
        cName: 'nav-links'
    },
    {
        title: 'Groomings',
        url: '/admin/groomings',
        cName: 'nav-links'
    },
    {
        title: 'Dashboard',
        url: '/admin/dashboard',
        cName: 'nav-links'
    },
    {
        title:<Button style={{color:'aliceblue' , backgroundColor:'green', fontWeight:"bolder" }}>Log Out</Button>,
        url:'/auth',
        cName:'nav-links-auth'
    }
]
