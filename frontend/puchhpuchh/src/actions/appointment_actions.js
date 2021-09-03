import { FETCH_ALL, CREATE , DELETE , UPDATE } from "../constants/constantTypes";
import * as api from '../api/index_api';


export const getAppointment = () => async(dispatch) =>{
    try {
        const {data} = await api.appointment();
        dispatch({ type: FETCH_ALL , data });
    } catch (error) {
        console.log(error);
    }
};

export const createAppointment = (formData) => async(dispatch) => {
    try {
        const message = await api.createAppointments(formData);
        const data = formData;
        
        alert(`${message.data}`);
        dispatch({type: CREATE , data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteAppointment = (id , id_table) => async(dispatch) => {
    try {

        const message = await api.deleteAppointments(id);
        const data = id_table;

        alert(`${message.data}`);
        dispatch({type: DELETE , data });

    } catch (error) {   
       console.log(error); 
    }
}

export const updateAppointment = (formData , id) => async(dispatch) => {
    try {
       const message = await api.updateAppointments(formData , id);
       const data = formData;
       
       alert(`${message.data}`);
       dispatch({type: UPDATE , data });

    } catch (error) {
        console.log(error);
    }
}
