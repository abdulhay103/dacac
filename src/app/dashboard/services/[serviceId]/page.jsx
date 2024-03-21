import { UpdateService } from "@/components/services/UpdateService";
import { getSingleService } from "@/utils/assetsData";
import React from "react";

export default async function EditService({ params }) {
  let id = parseInt(params.serviceId);
  let singleService = await getSingleService(id);
  return <UpdateService details={singleService} />;
}
