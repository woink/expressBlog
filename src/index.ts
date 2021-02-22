import express from 'express'
import bodyParser from 'body-parser'

const app = express()
const port = 3000

app
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  .get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})