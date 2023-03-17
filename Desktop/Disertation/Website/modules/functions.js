import { db } from './db.js'
import { Deplot } from "https://deno.land/x/deplot@0.3.0/mod.ts";


export async function plot(){
    let stock = await getStock();
    let commodity = await getCommodity()
    let data = {stock , commodity}
    console.log(data)
    return data
}


export async function getStock(data){
    //let sql = `SELECT * FROM apple;`
    const x = `SELECT Date FROM ${data};`;
    const y = `SELECT Price FROM ${data};`;
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

export async function getCommodity(data){
    //let sql = `SELECT * FROM apple;`
    const x = `SELECT Date FROM ${data};`;
    const y = `SELECT Price FROM ${data};`;
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
        output.push(value.Tables_in_website)
        return output
    });
    console.log(output)
    return output
}