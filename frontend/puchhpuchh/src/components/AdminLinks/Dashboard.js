import React , {useState , useEffect }from 'react'
import AdminNavbar from '../Admin/adminNavbar';
import * as api from '../../api/index_api';
import {MenuItem, Paper, Select, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import './dashboard.css';
import {BarChart , CartesianGrid , XAxis , YAxis , Tooltip , Legend , Bar} from 'recharts'; 
import BarData from './BarData';

export default function Dashboard() {
    var current = new Date();
    var current1 = current.getMonth();
    var currentYear = current.getFullYear();
    var  myMonth=[];

    const convertMonth = (month) => {
        var mymonth;
        switch (month) {
            case (0) : 
                return mymonth = 'Jan'
                break;
            case(1) :
                return mymonth = 'Feb'
                break;
            case(2) :
                return mymonth = 'Mar'
                break;
            case(3) :
                return mymonth = 'Apr'
                break;
            case(4) :
                return mymonth = 'May'
                break;
            case(5) :
                return mymonth = 'Jun'
                break;
            case(6) :
                return mymonth = 'Jul'
                break;
            case(7) :
                return mymonth = 'Aug'
                break;
            case(8) :
                return mymonth = 'Sept'
                break;
            case(9) :
                return mymonth = 'Oct'
                break;
            case(10) :
                return mymonth = 'Nov'
                break;
            case(11) :
                return mymonth = 'Dec'
                break;
        }
    }
    var currentMonth = convertMonth(current1);
    currentMonth = (`${currentMonth}${currentYear}`)
    const data = BarData();

    const [dataTable, setDataTable] = useState();
    const [monthSale,setMonthSale] = useState(0);
    const [yearSale , setYearSale] = useState(0);
    const [monthNoTax , setMonthNoTax] = useState(0);
    const [monthTax , setMonthTax] = useState(0);
    const [yearNoTax , setYearNoTax] = useState(0);
    const [yearTax , setYearTax] = useState(0);
    const [monthPeriod , setMonthPeriod] = useState(currentMonth);
    const [yearPeriod, setYearPeriod] = useState(`${currentYear}`);
    const [year , setYear] = useState([]);

    async function fetchSales(){
        let request = await api.sale();

        return (request.data);
    }

    async function fetchInventory(){
        let request = await api.inventory();

        return (request.data);
    }

    async function fetchGrooming(){
        let request = await api.grooming();

        return (request.data);
    }

    const handleChangeMonth = (event) => {

        setMonthPeriod(event.target.value);
    }

    const handleChangeYear = (event) => {

        setYearPeriod(event.target.value);
    }
    
    useEffect(() => {

        const getMonthSale = async() => {
            let testData = await fetchSales();
            var totalMonthSale = 0;
            let years = [];

            for (let i= 0 ; i < testData.length ; i++){
                let testDataDate = testData[i].date
                let testDataMonth = new Date(testDataDate).getMonth();
                var theMonth = convertMonth(testDataMonth);
                var theYear = new Date(testDataDate).getFullYear();
                var actDate = `${theMonth}${theYear}`;
                
                if(actDate === monthPeriod ){
                    totalMonthSale += testData[i].total;
                }

                if(years.indexOf(theYear) === -1){
                    years.push(theYear);
                    
                }
            }
            totalMonthSale = parseFloat(totalMonthSale.toFixed(2));
            setMonthSale(totalMonthSale);
            years.sort(function(a,b){return a-b;});
            setYear(years);
            
        }

        const getYearSale = async() => {
            let testData = await fetchSales();
            var totalYearSale = 0;

            for (let i= 0 ; i < testData.length ; i++){
                let testDataDate = testData[i].date
                var theYear = new Date(testDataDate).getFullYear();
                var actDate = `${theYear}`;

                if(actDate == yearPeriod ){
                    totalYearSale += testData[i].total;
                }
            }
            totalYearSale = parseFloat(totalYearSale.toFixed(2));
            setYearSale(totalYearSale);
            
        }
        
        
        
        getMonthSale();
        getYearSale();

    },[monthPeriod,yearPeriod])

    useEffect(() => {

        const getMonthNoTaxSale = async() => {
            let testData = await fetchInventory();
            let testData2 = await fetchSales();
            let testData3 = await fetchGrooming();
            var totalMonthSale = 0;

            for (let i= 0 ; i < testData2.length ; i++){
                let testDataDate = testData2[i].date
                let testDataMonth = new Date(testDataDate).getMonth();
                var theMonth = convertMonth(testDataMonth);
                var theYear = new Date(testDataDate).getFullYear();
                var actDate = `${theMonth}${theYear}`;

                if(actDate === monthPeriod ){

                    if(!testData2[i].animal){
            
                        let inventFilter = testData.filter(element => element.UserId === testData2[i].UserId);
                        totalMonthSale += (((inventFilter[0].price) * (testData2[i].amount))*(1-((testData2[i].discount)/100)));
                        
                    }else{

                        let groomFilter1 = testData3.filter(element => element.service === testData2[i].brandname);
                        let groomFilter2 = groomFilter1.filter(element => element.animal === testData2[i].animal);
                        let groomFilter = groomFilter2.filter(element => element.size === testData2[i].productname);
                            
                        totalMonthSale += (((groomFilter[0].price) * (testData2[i].amount))*(1-((testData2[i].discount)/100))); 

                    }
                }
                
            }

            totalMonthSale = parseFloat(totalMonthSale.toFixed(2));
            setMonthNoTax(totalMonthSale);

            
        }

        const getYearNoTaxSale = async() => {
            let testData = await fetchInventory();
            let testData2 = await fetchSales();
            let testData3 = await fetchGrooming();
            var totalYearSale = 0;

            for (let i= 0 ; i < testData2.length ; i++){
                let testDataDate = testData2[i].date
                var theYear = new Date(testDataDate).getFullYear();
                var actDate = `${theYear}`;

                if(actDate == yearPeriod ){

                    if(!testData2[i].animal){
            
                        let inventFilter = testData.filter(element => element.UserId === testData2[i].UserId);
                        totalYearSale += (((inventFilter[0].price) * (testData2[i].amount))*(1-((testData2[i].discount)/100)));
                        
                    }else{

                        let groomFilter1 = testData3.filter(element => element.service === testData2[i].brandname);
                        let groomFilter2 = groomFilter1.filter(element => element.animal === testData2[i].animal);
                        let groomFilter = groomFilter2.filter(element => element.size === testData2[i].productname);
                            
                        totalYearSale += (((groomFilter[0].price) * (testData2[i].amount))*(1-((testData2[i].discount)/100))); 

                    }
                }
                
            }

            totalYearSale = parseFloat(totalYearSale.toFixed(2));
            setYearNoTax(totalYearSale);

            
        }

        getMonthNoTaxSale();
        getYearNoTaxSale();
        
    },[monthPeriod,yearPeriod])

    const selectItem = () => {

        var month = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
        year.forEach(element => {
            for (let i = 0; i < month.length; i++) {
                myMonth.push(`${month[i]}${element}`);
                
            }   
        })
    }
      
    selectItem();

    

    useEffect(() => {
        setTimeout(() => {setDataTable(data)},2000)
    },[])
    
    
    
    

    setTimeout(() => {
        let totalmonthtax = (monthSale - monthNoTax);
        totalmonthtax = parseFloat(totalmonthtax.toFixed(2));
        let totalyeartax = (yearSale - yearNoTax);
        totalyeartax = parseFloat(totalyeartax.toFixed(2));

        setMonthTax(totalmonthtax);
        setYearTax(totalyeartax);
    },100);
        
    return (
        <div className='dashboard'>
            <AdminNavbar />
            
                <Grid container spacing = {2} direction = 'row' justifyContent = 'space-evenly' alignItems ='baseline'>
                    <Grid item xs={12} sm ={5} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg, #424242, #4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>Monthly Sales:</Typography>
                                <FormControl style={{minWidth: 120 , marginTop:10}}>
                                    <InputLabel defaultValue="" style={{fontWeight:'bold'}}>Select Month</InputLabel>
                                    
                                    <Select
                                    style={{fontWeight:'bold'}}
                                    variant='standard'
                                    value={monthPeriod}
                                    onChange={handleChangeMonth} >
                                        {   
                                            myMonth.map(month => {
                                                return(<MenuItem value={month}>{month}</MenuItem>)
                                            })    
                                        }
                                        
                                    </Select>
                                </FormControl>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${monthSale}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm ={5} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg, #424242, #4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>Yearly Sales:</Typography>
                                <FormControl style={{minWidth: 120 , marginTop:10}}>
                                    <InputLabel defaultValue="" style={{fontWeight:'bold'}}>Select Year</InputLabel>
                                    
                                    <Select
                                    style={{fontWeight:'bold'}}
                                    variant='standard'
                                    value={yearPeriod}
                                    onChange={handleChangeYear} >
                                    {
                                        year.map(element => {
                                            return(<MenuItem value={element}>{element}</MenuItem>); 
                                        })
                                          
                                    }                                        
                                    </Select>
                                </FormControl>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${yearSale}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm ={3} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg,#424242, #4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>W/o Tax Monthly:</Typography>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${monthNoTax}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm ={3} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg,#424242,#4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>Total Tax Monthly:</Typography>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${monthTax}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm ={3} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg,#424242, #4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>W/o Tax Yearly:</Typography>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${yearNoTax}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={6} sm ={3} style={{marginTop: 20}} >
                    <Paper className='monthPaper' style={{background:`linear-gradient(90deg,#424242, #4caf50)`}}>
                            <div style={{display:'flex', justifyContent:'space-between' , padding: 10}}>
                                <Typography  variant ='h4' className= 'monthSale' style={{fontWeight: 'bold'}}>Total Tax Yearly:</Typography>
                            </div>
                            <Typography variant="h5" style = {{textAlign: 'center',fontWeight:'bold'}}>${yearTax}</Typography>
                        </Paper>
                    </Grid>
                    <BarChart width={1500} height={400} data={dataTable}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip />
                        <Legend />
                    <Bar dataKey='amount' fill="#2e7d32" />
                    </BarChart>
                </Grid>
                
            
        </div>
    )
}
