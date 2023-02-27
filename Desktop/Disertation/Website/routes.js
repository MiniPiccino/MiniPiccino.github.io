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
	const body = context.request.body({ type: 'form' })
	const value = await body.value
	const obj = Object.fromEntries(value)
	console.log(obj)
	await register(obj)
	context.response.redirect('/login')
})

export default router