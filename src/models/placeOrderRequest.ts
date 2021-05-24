/**
 * food apiLib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ).
 */

import { array, lazy, object, Schema } from '../schema';
import { Product, productSchema } from './product';

export interface PlaceOrderRequest {
  product: Product[];
}

export const placeOrderRequestSchema: Schema<PlaceOrderRequest> = object({
  product: ['product', array(lazy(() => productSchema))],
});
