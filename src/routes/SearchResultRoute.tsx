import React from "react";
import { useParams } from "react-router-dom";

function SearchResultRoute() {
  const params = useParams();
  return <div>{params.term}</div>;
}

export default SearchResultRoute;
