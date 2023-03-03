/* routes.js */

import { Router } from 'https://deno.land/x/oak@v6.5.1/mod.ts'
import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts'
// import { upload } from 'https://cdn.deno.land/oak_upload_middleware/versions/v2/raw/mod.ts'
// import { parse } from 'https://deno.land/std/flags/mod.ts'
import { getCommodity, getData, getStock, plot} from './modules/functions.js'
//import { plot } from "https://deno.land/x/deplot/mod.ts";

const handle = new Handlebars({ defaultLayout: '' })

const router = new Router()


router.get('/', async context => {
	//const authorised = context.cookies.get('authorised')
	//const data = { authorised }
	//let stock = await plot();
	const stockData = context.cookies.get("stock2");
  	const commodityData = context.cookies.get("commodity2");
	console.log(stockData)
	console.log(commodityData)
	let stock = await getStock();
	let commodity = await getCommodity();
	let tables = await getData();
	let dataS = JSON.stringify(stock);
	let dataC = JSON.stringify(commodity);
	let data = {dataS: dataS, dataC: dataC, tables}
	console.log(data)
	const body = await handle.renderView('home', data)
	context.response.body = body
})

router.post('/', async context => {
	console.log('POST /')
	// const body = context.request.body({ type: 'form' })
	// const value = await body.value
	// const obj = Object.fromEntries(value)
	// console.log(obj)
	const body = await context.request.body({ type: "form" }).value;
    const stockData = body.get("stock2");
    const commodityData = body.get("commodity2");
    context.cookies.set("stock2", stockData);
    context.cookies.set("commodity2", commodityData);
	context.response.redirect('/')
})
// router.post("/", async context => {
// 	const body = await context.request.body().value;
// 	console.log(body)
// 	const params = new URLSearchParams(body);
// 	const name = params.get("stock2");
// 	const email = params.get("commodity2");
// 	const url = `/?name=${name}&email=${email}`;
// 	context.response.redirect(url);
//   });

export default router