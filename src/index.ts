import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import connect from './connect';

const app = express();
const port = 3000;

app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: true }))
	.use(routes)

	.listen(port, () => {
		console.log(`Server is listening on port ${port}`);
	});

const db = 'mongodb://localhost:27017/movies';
connect({ db });
