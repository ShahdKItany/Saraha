import authRouter from './src/modules/auth/auth.router.js'; // Corrected the import statement
/*
const initApp = (app, express) => {

    connectDb();

    app.use(express.json());

    app.use('/auth', authRouter);

    app.use('*', (req, res) => {
        return res.status(404).json({ message: "Page not found" });
    });
};

export default initApp;
*/

import express from 'express';
import initApp from './initApp.js';
import 'dotenv/config';

const app = express();

// تحديد المنفذ من متغير البيئة أو استخدام 3000 كقيمة افتراضية
const port = process.env.PORT || 3000;

initApp(app, express);

app.listen(port, () => console.log(`Server is running on port ${port}!`));
