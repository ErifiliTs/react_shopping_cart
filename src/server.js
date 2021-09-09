import express from 'express';
import data from './data.json';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
	console.log(res.send('Server is running...'));
})

app.post("/products" , (req, res) => {
  console.log((res.send(data.products)));
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('serve at http://localhost:5000'));
