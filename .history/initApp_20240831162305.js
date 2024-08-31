

//   git add .
//  git commit -m "changes" 
//  git push -u origin main

//------------------------
// git add .
//git commit -m "create validation, create  send email " 
//git push -u origin main

import connectDB from './DB/connection.js';
import authRouter from './src/modules/auth/auth.router.js'; // Corrected the import statement
import messageRouter from './src/modules/messages/message.router.js';
const initApp = (app, express) => {

    connectDB();

    app.use(express.json());

    app.use('/auth', authRouter);

    app.use('/messages',messageRouter);

    app.use('*', (req, res) => {
        return res.status(404).json({ message: "Page not found" });
    });



    app.use((err,req,res,next)=>{

        return res.json({message:"global error"});

    }
);
};

export default initApp;
