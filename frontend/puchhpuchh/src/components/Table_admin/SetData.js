import React ,{useState,useEffect} from 'react'

export default function SetData(products) {
    const [data , setData] = useState([])
    useEffect(() => {
        setData(products);
    },[products]);

    return (data);
}
