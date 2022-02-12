import { Favurlshow } from "./favurlshow";

export interface GetFavurlshowResponseModel {

  FavURLShows:Favurlshow[];
  /**
   * 响应信息
   */
  startCursor: string;

  /**
   * 响应数据
   */
  // data: ResponseData;
  // *
  //  * 响应时间

  // time: number;

}
