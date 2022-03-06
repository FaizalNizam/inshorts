import express from 'express'
import cors from 'cors'
import bodyParser from 'body-parser'

//components
import connection from './connection/db.js'
import newsToDb from './controller/newsToDbController.js'
import route from './routes/route.js'

const app=express()

app.use(cors())
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json({extended:true}))

app.use('/',route)

const port=8000

connection()

app.listen(port,()=>console.log(`server is running successfully on port ${port}`))

newsToDb()