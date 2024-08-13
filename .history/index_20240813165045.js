import express from 'express';
import initApp from './src/initApp.js';
import 'dotenv/config';

const app = express()
//const port = 3000

initApp(app,express);

app.listen(port, () => console.log(`server is r ${port}!`))