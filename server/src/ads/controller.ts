import {
  JsonController,
  Get,
  Post,
  Put,
  HttpCode,
  Body,
  Param,
  NotFoundError
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

  @Get("/ads/:id")
  async getAd(@Param("id") id: number) {
    const ad = await Ad.findOne(id);
    return { ad };
  }

  @Put("/ads/:id")
  async updatePage(@Param("id") id: number, @Body() update: Partial<Ad>) {
    const ad = await Ad.findOne(id);
    if (!ad) throw new NotFoundError("Cannot find ad");
    return Ad.merge(ad, update).save();
  }

  @Post("/ads")
  @HttpCode(201)
  createAd(@Body() ad: Ad) {
    return ad.save();
  }
}
