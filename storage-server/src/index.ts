import express, { Express } from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import dotenv from 'dotenv';
import router from "./routes";
import initDB from "./db/initdb";
import cors from "cors";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app: Express = express();

app.use(helmet());
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Run migrations to init database
initDB.runMigrations();

app.use(router);

app.listen(PORT, () => console.log("Everything works fine on port " + PORT))
