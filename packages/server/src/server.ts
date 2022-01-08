import express, { Application } from 'express';

const app: Application = express();

const server = app.listen(8000, () => {
    console.log('start');
})