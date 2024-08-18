import express from 'express';
import initApp from './initApp.js';
import 'dotenv/config';

const app = express()
//const port = 3000
const port = process.env.PORT 

initApp(app,express);
send

app.listen(port, () => console.log(`Server is running on port ${port}!`));
