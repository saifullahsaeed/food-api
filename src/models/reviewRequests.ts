/**
 * food apiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, Schema, string } from '../schema';
import { Reviews1, reviews1Schema } from './reviews1';

export interface ReviewRequests {
  /** order uid */
  orderUid: string;
  reviews: Reviews1[];
}

export const reviewRequestsSchema: Schema<ReviewRequests> = object({
  orderUid: ['order_uid', string()],
  reviews: ['reviews', array(lazy(() => reviews1Schema))],
});
