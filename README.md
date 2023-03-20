# PuchhPuchh-PetShop (Under Progress)
It is an **Ecommerce Website for a Pet Store in Halifax , Nova Scotia**. <br/>
It has a **Customer side interface** where you can browse various products we have for different animals. A customer can book appointments for grooming as well.<br/>
It has a **Pet Store Employee Interface** where the store employees can do the following :- 

- ***Point of Sale** system which actively updates the inventory on purchase. There is a **tip** system that calculate the tips for each employee.*
- ***Inventory Management System** to add/delete/update inventory and also add the images you want on the Customer side catalogue.*
- ***Grooming Appointment Scheduler** where the appointments booked from the Customer side. Along with this employee can add appointments as well.*
- ***A dashboard** where they can see monthly/yearly sale , taxes they paid monthly/yearly and a bar chart with all time sales based on products.*

# Setting Up
This WebSite is made by using the MERN Stack.
 ## General Folder Setup
 1. Frontend 
    - It is the client side which is using React as the framework.
 2. Backend
    - It is the server-database side which is using Nodejs for server creation , Expressjs for API creation , MongoDB (mongoose) as the database.
 ## Frontend setup:
  - Go to the directory `frontend/puchhpuchh`.
  ### Package Installation for Frontend
  Run the following command: <br/>
  `npm install` <br/>
  ### Run the React APP in the development mode using the command: <br/>
  `npm start`<br/>
 ## Backend Setup:
  -Go to the directory `backend/`
  ### Package Installation for Backend
  Run the following command: <br/>
  `npm install` <br/>
  ### Run the Server in development mode using the command : <br/>
  `nodemon server.js`<br/>
  
# MongoDB
This application is using a document database or NoSQL database MongoDB. <br/>
The Pet Store is a small bussiness using simple queries and as a developer I wanted to learn how to use MERN Stack , so I went for MongoDB instead of any relational database.

The Database is on my personal MongoDB ATLAS so the database is centralized and no need to setup the database. 

**NOTE: Any changes made from the website to the existing data will be added to the database and effect everyone using the application.**
 
