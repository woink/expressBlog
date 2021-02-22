import express from 'express'
import bodyParser from 'body-parser'
import routes from './routes'

const app = express()
const port = 3000

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .use(routes)

  .get('/', (req, res) => {
  res.send('Hello World!')
})

  .listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})