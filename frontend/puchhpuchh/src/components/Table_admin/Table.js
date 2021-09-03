import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import {Inventory_data , CreateInventory, DeleteInventory, UpdateInventory, Appointment_data, CreateAppointment, DeleteAppointment, UpdateAppointment } from './Data';
import { columns_appointments, columns_inventory } from './columns';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import Pagination from './Pagination';




export default function Table(props) {

    let {title} = '';

    let history = useHistory();
    
    const [data,setData] = useState([]) ;
    
    let dispatch = useDispatch();
    
    var products;
    var columns;

    switch (props.title) {
        case 'Inventory':
            title = 'Inventory';
            products = Inventory_data();
            columns = columns_inventory;
            break;

        case 'Groomings':
            title = 'Groomings';
            products = Appointment_data();
            columns = columns_appointments;
            break;

        default:
            title = 'Coming Soon';
            break; 
    }   


    

    useEffect(() => {

        setData(products);

    },[products]);

    return(
        <div>
            <MaterialTable title = {title} 
            data =  {data}
            columns = {columns}
            editable = {{
                onRowAdd:(newRow) => new Promise((resolve,reject) => {
                    
                    setTimeout(() => {
                        switch (title) {
                            case 'Inventory':
                                
                                CreateInventory(newRow , dispatch);  
                                break;
                            
                            case 'Groomings':
                                console.log(newRow);
                                CreateAppointment(newRow , dispatch);  
                                break;        

                            default:
                                break;
                        }
                        

                        resolve(); 
                    }, 2000);
                    
                    setTimeout(() => {
                        
                        window.location.reload();

                    }, 3000);
                    
                }),
                onRowDelete:selectedRow => new Promise((resolve,reject) =>{
                            
                    setTimeout(() => {
                        switch (title) {
                            case 'Inventory':
                                
                                DeleteInventory(selectedRow._id , selectedRow.tableData.id ,selectedRow.UserId, dispatch);
                                break;
                            
                            case 'Groomings':
                                DeleteAppointment(selectedRow._id , selectedRow.tableData.id , dispatch);
                                break;

                            default:
                                break;
                        }
                        
                        

                        resolve();
                    },2000)
                    
                }),
                onRowUpdate:(updatedRow ,oldRow) => new Promise((resolve,reject) => {
                    
                    setTimeout(() => {
                        switch (title) {
                            case 'Inventory':
                                UpdateInventory(updatedRow._id , updatedRow , dispatch);
                                break;
                        
                            case 'Groomings':
                                UpdateAppointment(updatedRow._id , updatedRow , dispatch);
                                break;

                            default:
                                break;
                        }
                        

                        resolve();
                    }, 2000);
                }),
            
            }}
            options={{
                actionsColumnIndex:-1,
                addRowPosition:"first",
                exportButton: {
                    csv: true,
                    pdf: true,
                },
                filtering: true,
                sorting: true,
                columnsButton:true
            }}
            components = {{
                Pagination : props => (
                    <div>
                        <Pagination {...props}/>
                    </div>
                )
            }}
            />         
        </div>
    )

}
