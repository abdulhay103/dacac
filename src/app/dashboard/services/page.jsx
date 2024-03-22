import ServicesOverView from "@/components/services/ServicesOverView";
import { getServices } from "@/utils/assetsData";
import React from "react";

export default async function Services_Dash() {
  let allServices = await getServices();
  return <ServicesOverView data={allServices} itemsPerPage={5} />;
}
