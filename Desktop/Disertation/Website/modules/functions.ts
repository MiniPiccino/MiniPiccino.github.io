// import { db } from './db.js'
// // @ts-ignore
// import { Datas, Deplot, Plotly } from 'https://deno.land/x/deplot/mod.ts';

// //const deplot = new Deplot('Plotly');

// export async function showPlot(){
// // var trace1 = {
// //     type: "scatter",
// //     mode: "lines",
// //     x: ['2020-10-04', '2021-11-04', '2023-12-04'],
// //     y: [10, 5],
// //     line: {color: '#17BECF'}
// //   };
  
// // //   var trace2 = {
// // //     type: "scatter",
// // //     mode: "lines",
// // //     x: ['2018-01-01', '2018-08-31'],
// // //     y: [3,7],
// // //     line: {color: '#7F7F7F'}
// // //   };
  
// //   var data = [trace1];
  
// //   var layout = {
// //     title: 'Custom Locale',
// //   };
  
// //   //var config = {locale: 'fr'};

// //   Plotly.newPlot('tester', data, layout);
// //   //deplot.plot(data, { title: 'My plot', size: [800, 600] });

// const deplot = new Deplot('Plotly');

// const trace: Plotly.Data = {
// 	x: ['Zebras', 'Lions', 'Pelicans'],
// 	y: [90, 40, 60],
// 	type: 'bar',
// 	name: 'New York Zoo',
// };

// const layout: Partial<Plotly.Layout> = {
// 	title: 'Hide the Modebar',
// 	showlegend: true,
// };

// const datas: Datas = { data: [trace], layout, config: { editable: true } };

// deplot.plot(datas, { title: 'My plot', size: [800, 600] });

// const trace2: Plotly.Data = {
// 	x: [1, 2, 3, 4, 5],
// 	y: [4, 0, 4, 6, 8],
// 	mode: 'lines+markers',
// 	type: 'scatter',
// };

// const datas2 = { data: [trace2], layout };

// deplot.plot(datas, { title: 'My second plot', size: [450, 450] });
// }
