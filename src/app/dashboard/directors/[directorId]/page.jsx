import { UpdateDirector } from "@/components/directors/UpdateDirector";
import { getDirectorDetails } from "@/utils/assetsData";
import React from "react";

export default async function DirectorUpdatePage({ params }) {
  let id = parseInt(params.directorId);
  let directorDetails = await getDirectorDetails(id);
  return <UpdateDirector details={directorDetails} />;
}
