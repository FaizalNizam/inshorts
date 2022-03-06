import express from 'express'
import newsFromDb from '../controller/newsFromDbController.js'

const route=express.Router()

route.get('/news',newsFromDb)


export default route  