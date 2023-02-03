// import { db } from './db.js'
import * as deplot from 'https://deno.land/x/deplot/mod.ts';
//import { Plotly } from "https://deno.land/x/deplot@0.3.0/mod.ts";

//const deplot = new Deplot('Plotly');

// export async function showForums(){
//     //let sql = `SELECT * FROM apple;`
//     let x = `SELECT Date FROM apple;`
//     let result = await db.query(x)
//     //console.log(x)
//     let output = [];
//     result.forEach( (value) => {
//         return output.push(value.Date); 
//         //console.log("RENE")
//         //output.push(result)
//         //console.log(s)
//         //break
//     });
//     //console.log(output)
//     //console.log('Show forums')
//     //console.log(result)
//     return output
// }
export async function showPlot(){
var trace1 = {
    type: "scatter",
    mode: "lines",
    x: ['2020-10-04', '2021-11-04', '2023-12-04'],
    y: [10, 5],
    line: {color: '#17BECF'}
  };
  
//   var trace2 = {
//     type: "scatter",
//     mode: "lines",
//     x: ['2018-01-01', '2018-08-31'],
//     y: [3,7],
//     line: {color: '#7F7F7F'}
//   };
  
  var data = [trace1];
  
  var layout = {
    title: 'Custom Locale',
  };
  
  //var config = {locale: 'fr'};

  //Plotly.newPlot('tester', data, layout);
  deplot.plot('tester', data, { title: 'My plot', size: [800, 600] });

}
