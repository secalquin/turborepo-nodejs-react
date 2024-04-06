import { Router } from "express";

const routes = Router();

routes.use("/example", (_request, response) => {
  return response.json({ message: "example" });
});

export default routes;
