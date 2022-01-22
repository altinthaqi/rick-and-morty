import React from "react";
import { useLocations } from "../hooks/useLocations";

function Locations() {
  const { loading, error, data } = useLocations();

  if (loading) return "Loading....";
  if (error) return "Error....";

  console.log(data);

  return <div></div>;
}

export default Locations;
