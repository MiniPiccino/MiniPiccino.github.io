/* routes.js */

import { Router } from 'https://deno.land/x/oak@v6.5.1/mod.ts'
import { Handlebars } from 'https://deno.land/x/handlebars/mod.ts'
// import { upload } from 'https://cdn.deno.land/oak_upload_middleware/versions/v2/raw/mod.ts'
// import { parse } from 'https://deno.land/std/flags/mod.ts'
import { getData, getStock } from './modules/functions.js'
//import { plot } from "https://deno.land/x/deplot/mod.ts";

const handle = new Handlebars({ defaultLayout: '' })

const router = new Router()

router.get('/', async context => {
	//const authorised = context.cookies.get('authorised')
	//const data = { authorised }
	let output = await getStock();
	let tables = await getData();
	let data = JSON.stringify(output)
	data = {data: data, tables}
	console.log(data)
	const body = await handle.renderView('home', data)
	context.response.body = body
})

export default router