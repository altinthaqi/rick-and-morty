import React from "react";
import { useCharacter } from "../hooks/useCharacter";

function Character() {
  const { error, loading, data } = useCharacter(1);

  if (loading) return "Loading....";
  if (error) return "Error....";
  console.log(data);
  return <div></div>;
}

export default Character;
