import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import NavBar from "../components/NavBar";
import Pagination from "../components/Pagination";
import { useStoreState } from "../store/hooks";

function SearchResultRoute() {
  const params = useParams();
  const songs = useStoreState((state) => state.songs.items);
  /* Pagination logic */
  const [currentPage, setCurrentPage] = useState(1);
  const [songsPerPage] = useState(6);
  const indexOfLastSong = currentPage * songsPerPage;
  const indexOfFirstSong = indexOfLastSong - songsPerPage;
  const currentSongs = songs.slice(indexOfFirstSong, indexOfLastSong);
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <NavBar term={params.term} />
      <div className="flex justify-center flex-col items-center mb-8">
        <div className="grid auto-cols-max grid-cols-fill-40 gap-x-52 w-5/6 justify-center justify-items-center">
          {currentSongs.map((s) => (
            <Card key={s.trackId} s={s} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          paginate={paginate}
          totalSongs={songs.length}
          songsPerPage={songsPerPage}
        />
      </div>
    </>
  );
}

export default SearchResultRoute;
