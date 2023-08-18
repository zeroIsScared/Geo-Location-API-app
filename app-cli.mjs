import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { getcityName, printData } from './app.mjs';

const rl = readline.createInterface({input,output});



const whereAmI=async()=>{

    const lat = await rl.question(`Please enter the latitude: >>`);
    const lon = await rl.question(`Please enter the longitude: >>`);  

    getcityName(lat,lon,printData);
    setTimeout(whereAmI   
    , 1000)
}
    
whereAmI();