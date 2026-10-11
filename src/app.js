import express from "express";

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export { app };