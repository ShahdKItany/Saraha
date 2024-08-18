import express from 'express';
import initApp from './initApp.js';
import 'dotenv/config';
//import { sendEmail } from './src/utils/sendEmail.js';

const app = express()
//const port = 3000
const port = process.env.PORT 

initApp(app,express);
//sendEmail();

app.listen(port, () => console.log(`Server is running on port ${port}!`));
