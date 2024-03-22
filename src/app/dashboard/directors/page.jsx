import DirectorOverView from "@/components/directors/DirectorOverView";
import { getDirectors } from "@/utils/assetsData";
import React from "react";

export default async function Directors_Dash() {
  let directors = await getDirectors();
  return <DirectorOverView data={directors} itemsPerPage={3} />;
}
