import axios from "axios";
import { action, thunk, Action, Thunk, debug } from "easy-peasy";
import { Response, Song } from "../models/response";

const API_URL = "https://itunes.apple.com/search?term=";

export interface SongModel {
  items: Song[];
  addSong: Action<SongModel, Song[]>;
  request: Thunk<SongModel, string | undefined>;
}

export const songs: SongModel = {
  items: [],
  addSong: action((state, payload) => {
    state.items = payload;
    // console.log(debug(state.items));
  }),
  request: thunk(async (actions, payload) => {
    try {
      const result = await axios.get<Response>(`${API_URL}${payload}`);
      const songs = result.data.results;
      actions.addSong(songs);
    } catch (error) {
      console.log(error);
    }
  }),
};
