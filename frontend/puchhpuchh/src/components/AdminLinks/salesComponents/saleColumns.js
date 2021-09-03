// import React from 'react';
// import Lookup from './Lookup';

// let product = Lookup();

// console.log(product);

export const columns_sales = [
    {
        title:'UserId',field:'UserId',readonly: true,filtering:false,editable:'never',hidden:true
    },
    {
        title:'Date' , field:'date' , type: 'date' , defaultSort:'desc',initialEditValue : new Date(),editable :'never'
    },
    {
        title: 'Brand/Grooming' , field: 'brandname',
        lookup: {}
    },
    {
        title: 'Product/Grooming Service' , field: 'productname',
    },
    {
        title: 'Animal', field: 'animal',lookup: {'Dog':'Dog' , 'Cat': 'Cat'},filtering:false
    },
    {
        title:'Weight', field:'weight'
    },
    {
        title: 'Quantity' , field: 'amount',
    },
    {
        title: 'Discount (in %)' , field: 'discount',
    },
    {
        title: 'Total' , field: 'total',editable:'onUpdate',filtering:false
    }
   
]