import { FETCH_ALL, CREATE , DELETE , UPDATE } from "../constants/constantTypes";
import * as api from '../api/index_api';

export const getInventory = () => async(dispatch) =>{
    try {
        const {data} = await api.inventory();
        dispatch({ type: FETCH_ALL , data });
    } catch (error) {
        console.log(error);
    }
};

export const createInventory = (formData) => async(dispatch) => {
    try {
        
        let [message,message2] = await Promise.all([api.createInventories(formData), api.createCatalogs(formData)]);
        
        const data = formData;
        alert(`${message.data}`);
        dispatch({type: CREATE , data });

    } catch (error) {
        console.log(error);
    }
}

export const deleteInventory = (id , id_table,userid) => async(dispatch) => {
    try {

        const items = await api.catalog();
        var item = items.data.filter(dat => dat.UserId === userid);
    
        const [message,message2] = await Promise.all([api.deleteInventories(id),api.deleteCatalogs(item[0]._id)]);
        const data = id_table;

        alert(`${message.data}`);
        dispatch({type: DELETE , data });

    } catch (error) {   
       console.log(error); 
    }
}

export const updateInventory = (formData , id) => async(dispatch) => {
    try {
       
       const items = await api.catalog();
       var item = items.data.filter(dat => dat.UserId === formData.UserId);
       

       var itemSales = await api.sale();
       var itemSale = itemSales.data.filter(dat => dat.UserId === formData.UserId);
       
        if(itemSale){
            var message3;
            for( let i = 0 ; i < itemSale.length ; i++){

                itemSale[i].brandname = formData.brandname;
                itemSale[i].productname = formData.productname;
                itemSale[i].weight = formData.size.weight_lbs;
                message3 = await api.updateSales(itemSale[i] , itemSale[i]._id);
            } 
        }
        

       if(!formData.path){
           formData.path = item[0].path;
           
       }

        if(!formData.animal){
           formData.animal = item[0].animal;
           
       }

       if(!formData.category){
           formData.category = item[0].category;
           
       }
       
       const [message,message2] = await Promise.all([api.updateInventories(formData , id),api.updateCatalogs(formData, item[0]._id)]);
       
       const data = formData;
      
       alert(`${message.data}`);
       dispatch({type: UPDATE , data });

    } catch (error) {
        console.log(error);
    }
}

