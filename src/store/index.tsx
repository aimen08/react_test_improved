import { createStore } from "easy-peasy";
import { cart, CartModel } from "./cart.model";
import { SongModel, songs } from "./songs.model";

export interface StoreModel {
  songs: SongModel;
  cart: CartModel;
}

const model = {
  songs: songs,
  cart: cart,
};

const store = createStore(model, { devTools: true });

export default store;
