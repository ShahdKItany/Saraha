import express from 'express';
import initApp from './src/initApp.js';
import 'dotenv/config';

const app = express()
const port = 3000

initApp(app,express);

app.get('/',async (req, res) =>{
    const user = await userModel.find();
return res.json({message:"success",user});
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))