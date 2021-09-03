import React from 'react';
import Row from './Row';
import './homepage.css';
export default function Homepage() {
    return (
        <div className="homepage">
            <Row name= "Food" />
            <Row name= "Treat" />
            <Row name= "Grooming Products" />
            <Row name= "Shampoos" />
            <Row name= "Collar and Leashes" />
            <Row name= "Litter Tray" />
            <Row name= "Bowls" />
            <Row name= "Toys" />
        </div>
    )
}
