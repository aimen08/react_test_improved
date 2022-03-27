import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function SearchResultRoute() {
  const params = useParams();
  return (
    <>
      <NavBar term={params.term} />
    </>
  );
}

export default SearchResultRoute;
