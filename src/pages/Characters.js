import React from "react";
import { useCharacters } from "../hooks/useCharacters";

function Characters() {
  const { error, loading, data } = useCharacters();

  if (loading) return "Loading....";
  if (error) return "Error....";

  console.log(data);
  return <div></div>;
}

export default Characters;
