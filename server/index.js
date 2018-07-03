import express from 'express';
import proxy from 'http-proxy-middleware';
import serverRenderer from './middleware/renderer';
import cors from 'cors';

const PORT = 3000;
const path = require('path');

const app = express();
app.use(cors())

const router = express.Router();

router.use('/api', proxy(
	{
		target: 'http://localhost:3001/',
		changeOrigin: true
	}
));

router.use('^/$', serverRenderer);

router.use(express.static(
	path.resolve(__dirname, '..', 'build'),
	{ maxAge: '30d' },
));

router.use('^/', serverRenderer);


app.use(router);

app.listen(PORT, (error) => {
	if (error) {
		return console.log('Error: ', error);
	}
	console.log('Listening on ' + PORT + '...');
});
