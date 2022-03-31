import { action, Action } from "easy-peasy";
import { Song } from "../models/response";

export interface CartModel {
  items: Song[];
  addToCart: Action<CartModel, Song>;
  deleteAll: Action<CartModel, string | undefined>;
}

export const cart: CartModel = {
  items: [],
  addToCart: action((state, payload) => {}),
  deleteAll: action((state, payload) => {}),
};
