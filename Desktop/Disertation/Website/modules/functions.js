import { db } from './db.js'
import { Deplot } from "https://deno.land/x/deplot@0.3.0/mod.ts";




export async function showForums(){
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

