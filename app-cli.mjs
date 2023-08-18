import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getcityName, printData } from './app.mjs';

const rl = readline.createInterface({input,output});



const whereAmI=async()=>{

    const lat = await rl.question(`\n Please enter the latitude: >> `);
    const lon = await rl.question(`\n Please enter the longitude: >> `);  

if (lat.trim() !== '' && lon.trim() !== ''){
    getcityName(lat,lon,printData);
    setTimeout(whereAmI   
    , 1000)
} else {
    console.log(`\nPlease enter valid coordinates!\n`)
}
   
}
    
whereAmI();