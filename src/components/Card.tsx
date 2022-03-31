import { MusicNoteIcon, PlusCircleIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import { getDzdFromUsd } from "../utils/helpers";

function Card(props: any) {
  const { s } = props;
  const [isAdded, setIsAdded] = useState(false);

  const add = () => {
    if (!isAdded) {
      setIsAdded(true);
    }
  };
  return (
    <div className=" text-center text-white font-bold text-sm p-4 shadow rounded-md flex m-10 flex-col w-[200px] md:w-[280px] items-center bg-[#C362F7] justify-center space-y-2">
      <img
        src={s.artworkUrl100}
        alt={s.trackName}
        className="w-full  object-contain rounded-md"
      />
      <h1>{s.artistName}</h1>
      <div className="flex flex-row items-center space-x-2">
        <MusicNoteIcon className="w-7" />
        <h1>{s.trackName}</h1>
      </div>
      <div className="flex flex-row justify-between items-center w-full">
        <h1>{getDzdFromUsd(s.trackPrice)}.00 DZD</h1>
        <PlusCircleIcon
          onClick={add}
          className={` ${
            isAdded ? "text-red-500" : "text-white"
          } w-7 cursor-pointer hover:opacity-75`}
        />
      </div>
    </div>
  );
}

export default Card;
