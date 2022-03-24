import React from "react";
import Logo from "../assets/logo.svg";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/outline";
import { useStoreActions } from "../store/hooks";

function LandingRoute() {
  const requestSongs = useStoreActions((actions) => actions.songs.request);

  const searchClick = (term: string) => {
    requestSongs(term);
  };

  return (
    <form className="flex flex-col items-center mt-44 flex-grow w-5/5">
      <img src={Logo} height={70} width={200} />
      <div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
        <SearchIcon className="h-5 mr-3 text-gray-500" />
        <input
          value={""}
          onInput={(event) => null}
          className="flex-grow focus:outline-none"
        />

        <MicrophoneIcon className="h-5 text-gray-500" />
      </div>

      {/* Buttons */}
      <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
        <a onClick={() => searchClick("deft")} className="btn">
          {" "}
          Google Search{" "}
        </a>
        <a onClick={() => ""} className="btn">
          {" "}
          I'm Feeling Lucky{" "}
        </a>
      </div>
    </form>
  );
}
export default LandingRoute;
