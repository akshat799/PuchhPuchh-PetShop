import {AUTH} from '../constants/constantTypes';
import * as api from '../api/index_api';

export const signup = ( formData , history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH , data });

        history.goBack();
    } catch (error) {
        console.log(error);
    }
};

export const signin = ( formData , history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH , data });
        if(data.result.email === "puchhpuchhns@gmail.com"){
            history.push('/admin')
        }else{
            history.goBack();
        }
    } catch (error) {
        console.log(error);
    }
}
