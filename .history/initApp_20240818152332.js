import authRouter from './src/modules/auth/auth.router.js'; // Corrected the import statement

const initApp = (app, express) => {

    

    app.use(express.json());

    app.use('/auth', authRouter);

    app.use('*', (req, res) => {
        return res.status(404).json({ message: "Page not found" });
    });
};

export default initApp;
