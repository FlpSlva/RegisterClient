import express, {Request, Response, NextFunction}  from 'express'


const app = express();
const port = 3333;

app.listen(port, () => console.log("server is running on port !", port))