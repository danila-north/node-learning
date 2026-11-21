import express from "express";
import { logger } from "./middleware/logger.mjs";
import { checkApiKey } from "./middleware/checkApiKey.mjs";
import { notFound } from "./middleware/notFound.mjs";
import { errorHandler } from "./middleware/errorHandler.mjs";
import notesRouter from "./routes/notes.mjs";

const app = express();

app.use(express.json());
app.use(logger);
app.use(checkApiKey);
app.use("/notes", notesRouter);
app.use(notFound);
app.use(errorHandler);

export default app;
