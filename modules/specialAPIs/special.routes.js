import express from 'express'
import { getAvailableModel, getModel, getSpeceficModels, queryModels } from './special.controllers.js'
const specialRouter= express.Router()

specialRouter.get('/model',getSpeceficModels)
specialRouter.get('/model/:model',getAvailableModel)
specialRouter.get('/:model',getModel)
specialRouter.get('/',queryModels)


export default specialRouter