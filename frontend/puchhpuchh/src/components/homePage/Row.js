import React , { useState , useEffect } from 'react';
import * as api from '../../api/index_api';
import './row.css';

function Row({ name }) {
    const [products , setProducts] = useState([])

    useEffect(()=> {
        async function fetchData(){
            var request;
            switch (name) {
                case 'Food':
                    request = await api.catalog();
                    setProducts(request.data);
                    return request;        
                    break;
           
                default:
                    request = await api.catalog();
                    setProducts(request.data);
                    return request;
                    break;
            }
        }
        fetchData();
    },[]);

    console.log(products);

    return (
        <div className="row">
            <h2 style={{color:"aliceblue",fontWeight:"bolder",fontFamily:"DyeLine"}}>{name}</h2>

            <div className="row__posters">
                {products.map(product => (
                <div className="row__poster">   
                    <img key={product.id} src= {product.path} alt={product.animal} className="row__poster_img"/>
                    <h6 style={{color:'aliceblue',textTransform:"uppercase"}}>{product.animal}</h6>
                    <p style={{color:'aliceblue'}}>price: ${product.price}</p> 
                </div>
                ))}
            </div>
        </div>
    )
}

export default Row;
