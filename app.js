import express from 'express';
import Router from './Routers/Router.js';
const PORT = 1000;
const app = express();

app.use(express.json());
app.use("/v1", Router);


app.listen(PORT, ()=>{
	console.log(`server running on http://localhost:${PORT}/`);
})