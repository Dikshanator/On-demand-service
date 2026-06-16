import express, { Application, Request, Response} from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import routes from "./routes/index";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

app.get("/health", (_req: Request, res: Response) => {
	res.json({ status: "ok", uptime: process.uptime() });
});

export default app;