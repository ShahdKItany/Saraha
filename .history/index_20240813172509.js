import express from 'express';
import initApp from './';
import 'dotenv/config';

const app = express()
//const port = 3000

initApp(app,express);

app.listen(port, () => console.log(`server is running on port ${process.env.PORT}!`))