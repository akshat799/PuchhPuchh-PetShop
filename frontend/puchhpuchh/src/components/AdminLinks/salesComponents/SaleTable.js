import React, {useEffect, useState} from 'react';
import MaterialTable from 'material-table';
import { useDispatch } from 'react-redux';
import * as api from '../../../api/index_api';
import { Inventory_data } from '../../Table_admin/Data';
import Pagination from '../../Table_admin/Pagination';
import { UpdateInventory } from '../../Table_admin/Data';
import { Grid, Typography } from '@material-ui/core';
import uuid from 'react-uuid';

export default function SaleTable(){

    let dispatch = useDispatch();

    const [data,setData] = useState([]);
    const [products,setProducts] = useState([]);

    let product = Inventory_data();
    var productPrice;
    var updatedInventory;
    var groomingPriceLookup;

    const [updatedProduct,setUpdatedProduct] = useState({});
    const [updatedProduct1,setUpdatedProduct1] = useState({});    

    const [customerTotal , setCustomerTotal] = useState(0);

    const totalCalculate= (price,amount,discount) => {

        var main = ((price*amount)*(1-(discount/100)));
        var request = (main*0.15);
        var total = (main + request);
        
        return (total.toFixed(2));
    }

    async function addSale(formData,updatedRow) {


        let message = await api.createSales(formData);
        
        alert (`${message.data}`);

        setData(updatedRow);
        
    }

    async function deleteSale(id, updatedRow){
        let message = await api.deleteSales(id);

        alert (`${message.data}`);

        setData(updatedRow);
    
    }

    async function fetchGrooming(){
        let request = await api.grooming();

        return (request.data);
    }    

    async function getLookupGrooming(){

        groomingPriceLookup = await fetchGrooming();

    }
    
    async function fetchGroomingPrice(service , size , animal){
        let request = await fetchGrooming();
    
        let request2 = request.filter(x => x.animal === animal);
        let request3 = request2.filter(x => x.service === service);
        let request4 = request3.filter(x => x.size === size);
        
        return (request4[0].price);
    }
    
    
    
    useEffect(() => {

        async function fetchSales(){
            var request = await api.sale();
            setData(request.data);
        }

        
        fetchSales();
        setProducts(product);
                 
    },[setData,product])
   
    useEffect(() => { 
        let updated_product1 = new Set();  
        var updated_product2;
        var newlook;       
        let updated_product3 = new Set();
        var updated_product4;
        var newlook1;
        getLookupGrooming();

        setTimeout(() => {

            if(product && groomingPriceLookup){
                if(product[0] && groomingPriceLookup[0]){
                    for (let i = 0 ; i < product.length ; i++ ){
                        updated_product1.add(product[i].brandname.trim());
                        updated_product3.add(product[i].productname.trim());
                    }    
                    
                    if(groomingPriceLookup){
                        if(groomingPriceLookup[0]){
                            for (let i = 0 ; i < groomingPriceLookup.length ; i++){
                                updated_product1.add(groomingPriceLookup[i].service)
                                if(groomingPriceLookup[i].size){
                                    updated_product3.add(groomingPriceLookup[i].size);
                                }
                                
                            }
                        }
                    }
                    
                    newlook = Array.from(updated_product1, v => ({[v]:`${v}`}));
                    newlook1 = Array.from(updated_product3, v => ({[v] : `${v}`}));
                    console.log(newlook);
                    updated_product2 = Object.assign(...newlook);
                    updated_product4 = Object.assign(...newlook1);
                    console.log (updated_product2 , updated_product4);
                    setUpdatedProduct(updated_product2);
                    setUpdatedProduct1(updated_product4);
                }
            }
        },1000)
            
    },[product,setUpdatedProduct,groomingPriceLookup])        
             
    

    return (
        <div>
            <MaterialTable title='Sales' 
            data={data}
            columns = {[
                {
                    title:'UserId',field:'UserId',readonly: true,filtering:false,editable:'never',hidden:true
                },
                {
                    title:'Date' , field:'date' , type: 'date' , defaultSort:'desc',initialEditValue : new Date(),editable :'never'
                },
                {
                    title: 'Brand/Grooming Service' , field: 'brandname',
                    lookup: updatedProduct
                },
                {
                    title: 'Product/Animal Size (Dog only)' , field: 'productname',
                    lookup: updatedProduct1
                },
                {
                    title: 'Animal', field: 'animal',lookup: {'dog':'Dog' , 'cat': 'Cat'},filtering:false
                },
                {
                    title:'Weight', field:'weight'
                },
                {
                    title: 'Quantity' , field: 'amount',initialEditValue: 1
                },
                {
                    title: 'Discount (in %)' , field: 'discount',initialEditValue: 0
                },
                {
                    title: 'Total' , field: 'total',editable:'onUpdate',filtering:false
                }
            ]}
            editable = {{
                onRowAdd:(newRow) => new Promise((resolve,reject) => {
                    if(!newRow.animal){

                        var items_1 = products.filter(menu => menu.brandname === newRow.brandname);
                        var items_2 = items_1.filter(menu => menu.productname === newRow.productname);
                        var items_3 = items_2.filter(menu => menu.size.weight_lbs === newRow.weight);
                    
                        productPrice = items_3[0].price;
                        newRow.UserId = items_3[0].UserId;

                        items_3[0].amount -= newRow.amount;
                        updatedInventory = items_3[0];
                        UpdateInventory(updatedInventory._id , updatedInventory , dispatch);
                        
                    }else if(newRow.animal){
                        newRow.UserId = uuid();
                        async function groomSale(){
                            let groomingPrice = await fetchGroomingPrice(newRow.brandname , newRow.productname , newRow.animal);
                            productPrice = groomingPrice;
                        }    
                        groomSale();    
                    }
                    
                    setTimeout(() => {
                        if(productPrice !== 0){
                            if(productPrice){
                                newRow.total = parseFloat(totalCalculate(productPrice , newRow.amount , newRow.discount));
                    
                                let updatedRow = [...data , newRow];
                                
                                setTimeout(() => {
                                    
                                    addSale(newRow,updatedRow);
                                    
                                    resolve(); 
                                }, 2000);
                                
                                setTimeout(() => {
                                    
                                    window.location.reload();

                                }, 3000);
                            }
                        }
                    },300);
                }),
                onRowDelete:selectedRow => new Promise((resolve,reject) =>{
                    if(!selectedRow.animal){
                        var items_1 = products.filter(menu => menu.UserId === selectedRow.UserId);

                        items_1[0].amount += selectedRow.amount;
                        updatedInventory = items_1[0];
                        UpdateInventory(updatedInventory._id , updatedInventory , dispatch);
                    }
                      
                    const index = selectedRow.tableData.id;
                    let updatedRow = [...data];
                    updatedRow.splice(index,1)
       
                    setTimeout(() => {

                        deleteSale(selectedRow._id,updatedRow);                        
                       

                        resolve();
                    },2000)
                    
                }),
            
            }}
            onSelectionChange = {(rowData) => {
                let CustomerTotal = 0;
                for(let i = 0; i<rowData.length;i++ ){
                    CustomerTotal += rowData[i].total;
                }
                setCustomerTotal(CustomerTotal);
            }}
            options={{
                selection:true,
                actionsColumnIndex:-1,
                addRowPosition:"first",
                exportButton: {
                    csv: true,
                    pdf: true,
                },
                filtering: true,
                sorting: true,
                columnsButton:true}}
            components = {{
                Pagination : props => (
                    <div>
                        <Grid container >
                        {
                            (customerTotal !== 0) ?(
                                <Typography variant='subtitle1'>Total : {customerTotal}</Typography>
                            ) : null
                        }
                        </Grid>
                        <Pagination {...props}/>
                    </div>
                )
            }}/>
        </div>
    )
}