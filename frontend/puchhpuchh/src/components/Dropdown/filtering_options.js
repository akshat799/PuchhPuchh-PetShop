import React from "react";


const product_category =  {
    title: "Product Category",
    options:[
        {
            name: "Food",
            onPress: () => {
                
            },
        },
        {
            name: "Treats",
            onPress: () => {
                console.log("treats was pressed");
            },
        },
        {
            name: "Grooming Products",
            onPress: () => {
                console.log("Grooming Products was pressed");
            },
        },
        {
            name: "Shampoos",
            onPress: () => {
                console.log("Shampoos was pressed");
            },
        },
        {
            name: "Collar and Leashes",
            onPress: () => {
                console.log("Collar and Leashes was pressed");
            },
        },
        {
            name: "Litter Tray",
            onPress: () => {
                console.log("Litter Tray was pressed");
            },
        },
        {
            name: "Bowls",
            onPress: () => {
                console.log("Bowls was pressed");
            },
        },
        {
            name: "Toys",
            onPress: () => {
                console.log("Toys was pressed");
            },
        },
    ]
};

const filter = {
    title: "Filter",
    options: [
        {
            name: "Dog",
            onPress: () => {
                console.log("Dog was pressed");
            },
        },
        {
            name: "Cat",
            onPress: () => {
                console.log("Cat was pressed");
            },
        },
        {
            name: "Small Animals",
            onPress: () => {
                console.log("Small Animal was pressed");
            },
        },
    ],
};

export default product_category;
export { filter };

