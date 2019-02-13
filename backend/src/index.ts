import "reflect-metadata";
import { createKoaServer /*, Action*/ } from "routing-controllers";
import setupDb from "./db";
import AdController from "./ads/controller";
// import { verify } from "./logins/jwt";
// import LoginController from "./logins/controller";

const app = createKoaServer({
  controllers: [AdController]
  /* authorizationChecker: (action: Action) => {
    const header: string = action.request.headers.authorization;

    if (header && header.startsWith("Bearer ")) {
      const [, token] = header.split(" ");
      return !!(token && verify(token));
    }
    return false;
  } */
});
const port = process.env.PORT || 4001;
setupDb()
  .then(_ => app.listen(port, () => console.log(`Listening on port ${port}`)))
  .catch(err => console.error(err));
