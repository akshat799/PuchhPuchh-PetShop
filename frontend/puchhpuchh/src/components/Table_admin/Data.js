import React, { useEffect } from 'react'
import { useDispatch , useSelector } from 'react-redux';
import { createAppointment, deleteAppointment, getAppointment, updateAppointment } from '../../actions/appointment_actions';
import { getInventory , createInventory, deleteInventory, updateInventory } from '../../actions/inventory_action';
import SetData from './SetData';
import uuid from 'react-uuid';

export function Inventory_data(){

    let dispatch = useDispatch();
    
    useEffect(()=> {
    
        dispatch(getInventory());

    },[dispatch]);

    const products1 = useSelector((state) => state.admin.initialState);
    
    const data1 = SetData(products1);
    return(data1)
}

export function CreateInventory(formData ,dispatch){

    formData.UserId = uuid();
    dispatch(createInventory(formData));

}

export function DeleteInventory(id , id_table , userid, dispatch){

    dispatch(deleteInventory(id , id_table , userid));
    
}

export function UpdateInventory(id ,formData , dispatch){
    
    dispatch(updateInventory(formData , id ));

}

export function Appointment_data(){

    let dispatch = useDispatch();
    
    useEffect(()=> {
    
        dispatch(getAppointment());

    },[dispatch]);

    const products2 = useSelector((state) => state.admin.initialState);
    
    const data2 = SetData(products2);
    return(data2)
}

export function CreateAppointment(formData ,dispatch){
    
    dispatch(createAppointment(formData));

}

export function DeleteAppointment(id , id_table , dispatch){

    dispatch(deleteAppointment(id , id_table));
    
}

export function UpdateAppointment(id ,formData , dispatch){

    dispatch(updateAppointment(formData , id ));

}