import TeamOverView from "@/components/team/TeamOverView";
import { getTeamMembers } from "@/utils/assetsData";
import React from "react";

export default async function Team_Dash() {
  let allTeamMembers = await getTeamMembers();
  return <TeamOverView data={allTeamMembers} itemsPerPage={2} />;
}
