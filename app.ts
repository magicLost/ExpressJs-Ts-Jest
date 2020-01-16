import * as express from "express";
import TourController from "./scr/controller/TourController";

const app: express.Application = express();

const tourController = new TourController();

//express.NextFunction
app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send("Hello World!");
});

app.get("/tours", tourController.getAllTours);

/* const middleware: express.RequestHandler = (req, res, next) => {
  next();
}; */

export default app;
