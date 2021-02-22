import express from 'express'
import movieController from '../controllers/moviesController'

const router = express.Router()

router.get('/', movieController.getHello)

export default router