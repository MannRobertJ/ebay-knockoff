import {
  JsonController,
  Get,
  Post,
  HttpCode,
  Body
  /*   Put,
  Post,
  Param,
  Body,
  HttpCode,
  NotFoundError,
  Authorized */
} from "routing-controllers";
import Ad from "./entity";

@JsonController()
export default class AdController {
  @Get("/ads")
  async allAdds() {
    const ads = await Ad.find();
    return { ads };
  }

  @Post("/ads")
  @HttpCode(201)
  createAd(@Body() ad: Ad) {
    return ad.save();
  }
}
