const express =require('express')
const app = express()
const port = 3000 || process.env.PORT
const path = require('path')

app.use(express.static(path.join(__dirname,'/public')))

app.listen(port,()=>{

		console.log('listening on' + port)
})