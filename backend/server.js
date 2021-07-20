const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require ('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
});

const appointmentsRouter = require('./routes/appointments');
const catalogsRouter = require('./routes/catalogs');
const groomingsRouter = require('./routes/groomings');
const inventoriesRouter = require('./routes/inventories');
const usersRouter = require('./routes/users');

app.use('/appointments', appointmentsRouter);
app.use('/catalogs', catalogsRouter);
app.use('/groomings', groomingsRouter);
app.use('/inventories', inventoriesRouter);
app.use('/users', usersRouter);

app.listen(port , () => {
    console.log(`Server is running on port: ${port}`);
});