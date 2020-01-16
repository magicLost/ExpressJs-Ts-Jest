import * as express from "express";

export default (fn: express.RequestHandler): express.RequestHandler => {
  return (req, res, next) => {
    fn(req, res, next).catch((err: Error) => next(err));
  };
};
