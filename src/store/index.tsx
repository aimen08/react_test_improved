import axios from "axios";
import { Action, action, thunk, Thunk } from "easy-peasy";
import { Song, Response } from "../models/response";

const API_URL = "https://itunes.apple.com/search?term=";

export interface StoreModel {
  songs: {
    items: Song[];
    addSong: Action<StoreModel, Song[]>;
    request: Thunk<StoreModel, any>;
  };
}

const model: StoreModel = {
  songs: {
    items: [],
    addSong: action((state, payload) => {
      state.songs.items.push(...payload);
      console.log(state.songs.items);
    }),
    request: thunk(async (actions, payload) => {
      const result = await axios.get<Response>(`${API_URL}${payload}`);
      const songs = result.data.results;
      actions.songs.addSong(songs);
    }),
  },
};

export default model;
