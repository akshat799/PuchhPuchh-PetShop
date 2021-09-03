import React , {useEffect} from 'react'
import * as api from '../../api/index_api';

export default function BarData() {
    
    var data;

    async function fetchSales(){
        let request = await api.sale();

        return (request.data);
    }

    async function fetchCatalog(){
        let request = await api.catalog();

        return (request.data);
    }

    async function getData(){
        data = [
            {
                'name':'Grooming',
                'amount': 0,
            },
            {
                'name': 'Food',
                'amount': 0, 
            },
            {
                'name': 'Treat',
                'amount':0,
            },
            {
                'name': 'GroomPro',
                'amount':0,
            },
            {
                'name': 'Shampoos',
                'amount':0,
            },
            {
                'name': 'Collar-Leashes',
                'amount': 0,
            },
            {
                'name': 'Litter-Tray',
                'amount': 0,
            },
            {
                'name': 'Bowl',
                'amount': 0,
            },
            {
                'name': 'Toys',
                'amount': 0,
            }
        ];
        let request1 = await fetchSales();
        let request2 = await fetchCatalog();
        // let request3 = fetchGrooming();
        
        for (let i =0 ; i < request1.length ; i++){
            
            if(!request1[i].animal){
                
                let inventFilter = request2.filter(element => element.UserId === request1[i].UserId);
                
                switch(inventFilter[0].category){
                    case ('food'):
                        
                        data[1].amount += parseFloat(request1[i].total.toFixed(2));
                        break;
                    
                    case ('treat'):

                        data[2].amount += parseFloat(request1[i].total.toFixed(2));
                        break;
                    
                    case ('grooming products'):

                        data[3].amount += parseFloat(request1[i].total.toFixed(2));
                        break;

                    case ('shampoos'):
                        
                        data[4].amount += parseFloat(request1[i].total.toFixed(2));
                        break;

                    case ('collar and leashes'):
                        return data[5].amount += parseFloat(request1[i].total.toFixed(2));

                    case ('litter tray'):

                        data[6].amount += parseFloat(request1[i].total.toFixed(2));
                        break;

                    case ('bowls'):

                        data[7].amount += parseFloat(request1[i].total.toFixed(2));
                        break;

                    case ('toys'):

                        data[8].amount += parseFloat(request1[i].total.toFixed(2));
                        break;
                }

            }
            else if ( request1[i].animal){
                data[0].amount += request1[i].total
            }
        } 
    }

    getData();

    return data;
}
