
import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
	res.json({ status: "ok", uptime: process.uptime() });
});

const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 5000;

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}`);
});

export default app;
