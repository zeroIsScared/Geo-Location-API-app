import axios from 'axios';
import data from './data.json' assert {type:'json'};



export const getcityName=async (lat,lon, cb)=>{
    //const {lat, lon}= await coordinates;
    axios.get(`https://geocode.xyz/${lat},${lon}?geoit=xml&auth=${data.KEY}`)
    .then(res => {
        const headerDate = res.headers && res.headers.date ? res.headers.date : `no response date`;
        console.log(`Status code: ${res.status}`);
        console.log(`Date in Response header: `, headerDate);
        cb(res.data)
    })
    .catch(err => {
        console.log(`!!!Erorr ${err.message}`)
    }
    )
}

export const printData = async(response)=>{

    const xml2js = await import('xml2js');

    xml2js.parseString(response, (err, result)=>{
    const {geodata:{city}} =result;

    if (city === undefined){
        console.log(`\nNo city was found at the at given coordinates. Please check the coordinates and try again!\n`);
    }else {
        console.log(`\nThe city name located at given coordinates is : ${city[0]}\n`);
    }   
})
}
