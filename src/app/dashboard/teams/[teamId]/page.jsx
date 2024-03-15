import { UpdateTeam } from "@/components/team/UpdateTeam";
import { singleMember } from "@/utils/assetsData";
import React from "react";

export default async function EditTeam({ params }) {
  let id = parseInt(params.teamId);
  let teamMember = await singleMember(id);

  console.log(teamMember);

  return <UpdateTeam details={teamMember} />;
}
