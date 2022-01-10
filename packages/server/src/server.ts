import express, { Application } from 'express';
import session from 'express-session';

import sequelize from './sequelize';
import routes from './routes';

const FileStore = require('session-file-store')(session);
const app: Application = express();
const sessionMidleware = session({
    secret: 'kkokkiotalk',
    saveUninitialized: true,
    cookie: { secure: false },
    resave: false,
    store: new FileStore(),
});

app.use(sessionMidleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

sequelize.sync({ force: true });

app.use('/', routes);

app.listen(8000, () => {
    console.log('start');
})