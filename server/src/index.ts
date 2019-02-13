import "reflect-metadata";
import { createKoaServer /*, Action*/ } from "routing-controllers";
import setupDb from "./db";
import AdController from "./ads/controller";
import UserController from "./users/controller";
import LoginController from "./logins/controller";
const json = require("koa-json");

const app = createKoaServer({
  controllers: [AdController, UserController, LoginController],
  cors: true
  /* authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;

    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");
      return !!(token && verify(token));
    }
    return false;
  } */
});

app.use(json());

const port = process.env.PORT || 4000;
setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
