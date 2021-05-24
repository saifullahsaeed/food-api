/**
 * food apiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { ApiResponse, RequestOptions } from '../core';
import { string, unknown } from '../schema';
import { BaseController } from './baseController';

export class MiscController extends BaseController {
  /**
   * this data already come paginated
   *
   * @param query
   * @return Response from the API call
   */
  async searchproduct(
    query: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<unknown>> {
    const req = this.createRequest('GET');
    const mapped = req.prepareArgs({ query: [query, string()] });
    req.appendTemplatePath`/search/${mapped.query}`;
    req.authenticate(false);
    return req.callAsJson(unknown(), requestOptions);
  }

  /**
   * report user
   *
   * @param username
   * @param message
   * @return Response from the API call
   */
  async reportuser(
    username: string,
    message: string,
    requestOptions?: RequestOptions
  ): Promise<ApiResponse<void>> {
    const req = this.createRequest('POST', '/report');
    const mapped = req.prepareArgs({
      username: [username, string()],
      message: [message, string()],
    });
    req.form({
      username: mapped.username,
      message: mapped.message,
    });
    return req.call(requestOptions);
  }
}
