
export const columns_inventory =[
        {
            title:'UserId',field:'UserId',readonly: true,filtering:false,editable:'never',hidden:true
        },
        {
            title:'Brand',field:'brandname'
        },
        {
            title:'Product',field:'productname'
        },
        {
            title:'Weight in LBS',field:'size.weight_lbs'
        },
        {
            title:'Weight in KG',field:'size.weight_kg'
    
        },
        {
            title:'Stock', field:'amount'
        },
        {
            title:'Price', field:'price'
        },
        {
            title:'Path', field:'path', filtering: false,
        },
        {
            title:'Animal Type', field:'animal',filtering: false,
            lookup:{
                'dog':'Dog',
                'cat':'Cat',
                'small animal':'Small Animal'
            }
        },
        {
            title:'Product Category',field:'category',filtering:false,
            lookup:
            {'food':'Food',
            'treat':'Treat',
            'grooming products':'Grooming Products',
            'shampoos':'Shampoos',
            'collar and leashes':'Collar & Leashes',
            'litter tray':'Litter Tray',
            'bowls':'Bowls',
            'toys':'Toys'}
        }
    ]

export const columns_appointments =[
        {
            title:'Name',field:'name',sorting:false
        },
        {
            title:'Animal Type',field:'animal',
            lookup: { 'dog':'Dog' , 'cat':'Cat'},sorting:false
        },
        {
            title:'Service',field:'service',sorting:false,
            lookup: {
            'grooming' : 'Grooming' , 
            'bath' : 'Bath' , 
            'bath & brush North-Breed' : 'Bath & Brush North-Breed' , 
            'full trim':'Full Trim W/o Bath',
            'nails and ears':'Nails and Ears',
            'face/feet/bum trim': 'Face/Feet/Bum Trim'
            }
        },
        {
            title: 'Phone No.', field:'phone',sorting:false
        },
        {
            title:'Email Address',field:'account.email',sorting:false
        },
        {
            title:'Date', field:'date',type:'date',defaultSort:'desc'
        },
        {
            title:'Time', field:'time',type:'time',defaultSort:'desc'
        }
    ]

