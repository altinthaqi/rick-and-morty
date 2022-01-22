import React from "react";
import { useLocation } from "../hooks/useLocation";

function Location() {
  const { error, loading, data } = useLocation(1);

  if (loading) return "Loading....";
  if (error) return "Error....";

  console.log(data);
  return <div></div>;
}

export default Location;
