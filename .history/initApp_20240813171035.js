import authRouter from './src/modules/auth/auth.router'; // Corrected the import statement

const initApp = (app, express) => {

    connectDb();

    app.use(express.json());

    app.use('/auth', authRouter);

    app.use('*', (req, res) => {
        return res.status(404).json({ message: "Page not found" });
    });
};

export default initApp;
