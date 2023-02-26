import { db } from './db.js'
import { Deplot } from "https://deno.land/x/deplot@0.3.0/mod.ts";




export async function getStock(){
    //let sql = `SELECT * FROM apple;`
    const x = `SELECT Date FROM apple;`;
    const y = `SELECT Price FROM apple;`;
    const result1 = await db.query(x)
    const result2 = await db.query(y)
    const output1 = [];
    const output2 = [];
    result1.forEach( (value) => {
         return output1.push(value.Date); 
     });
    result2.forEach( (value) => {
        return output2.push(value.Price); 
    });
    var trace1 = {
      x: output1,
      y: output2,
      type: 'scatter'
  };
  
  var data = [trace1];
  
  var layout = {
      title: 'Scroll and Zoom',
      showlegend: true
  };
  let datas = {data}
    return datas
}

export async function getCommodity(){
    //let sql = `SELECT * FROM apple;`
    const x = `SELECT Date FROM gold;`;
    const y = `SELECT Price FROM gold;`;
    const result1 = await db.query(x)
    const result2 = await db.query(y)
    const output1 = [];
    const output2 = [];
    result1.forEach( (value) => {
         return output1.push(value.Date); 
     });
    result2.forEach( (value) => {
        return output2.push(value.Price); 
    });
    var trace1 = {
      x: output1,
      y: output2,
      type: 'scatter'
  };
  
  var data = [trace1];
  
  var layout = {
      title: 'Scroll and Zoom',
      showlegend: true
  };
  let datas = {data}
    return datas
}

export async function getData(){
    const u = `show tables;`
    const tables = await db.query(u)
    let output = []
    tables.forEach( (value) => {
        console.log(value.Tables_in_website)
        //for(key in value){
        //    output.push(value[key])    
        //}
        //output = {table: value.Tables_in_website};
        output.push(value.Tables_in_website)
        //console.log(output)
        return output
        //output1.push(value.Date); 
    });
    console.log(output)
    //let out = JSON.stringify(u2)
    //let tables = {table: u2}
    //console.log(tables)
    return output
}