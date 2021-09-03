import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }

    return req;
})

export const signIn = (formData) => API.post('/users/signin' , formData);
export const signUp = (formData) => API.post('/users/signup' , formData);


export const inventory = () => API.get('/inventories/');
export const createInventories = (formData) => API.post('/inventories/add' , formData);
export const  deleteInventories = (id) => API.delete(`/inventories/${id}`);
export const updateInventories = (formData , id) => API.post(`/inventories/update/${id}` , formData);



export const catalog = () => API.get('/catalogs/');
export const createCatalogs = (formData) => API.post('/catalogs/add' , formData);
export const  deleteCatalogs = (id) => API.delete(`/catalogs/${id}`);
export const updateCatalogs = (formData , id) => API.post(`/catalogs/update/${id}` , formData);



export const appointment = () => API.get('/appointments/');
export const createAppointments = (formData) => API.post('/appointments/add' , formData);
export const  deleteAppointments = (id) => API.delete(`/appointments/${id}`);
export const updateAppointments = (formData , id) => API.post(`/appointments/update/${id}` , formData);



export const sale = () => API.get('/sales/');
export const createSales = (formData) => API.post('/sales/add' , formData);
export const  deleteSales = (id) => API.delete(`/sales/${id}`);
export const updateSales = (formData , id) => API.post(`/sales/update/${id}` , formData);



export const grooming = () => API.get('/groomings/');
export const createGrooming = (formData) => API.post('/groomings/add' , formData);
export const  deleteGrooming = (id) => API.delete(`/groomings/${id}`);
export const updateGrooming = (formData , id) => API.post(`/groomings/update/${id}` , formData);

