import { teamMemberByDesignation } from "@/utils/assetsData";
import { DepartmentTab } from "./DepartmentTab";

export default async function TeamMembers() {
  let managingTeamPromise = teamMemberByDesignation("Management/Admin");
  let therapistTeamPromise = teamMemberByDesignation("Therapist");
  let teacherTeamPromise = teamMemberByDesignation("Special Teacher");
  let supportingStaffTeamPromise = teamMemberByDesignation("Office Staff");

  let [managingTeam, therapistTeam, teacherTeam, supportingStaffTeam] =
    await Promise.all([
      managingTeamPromise,
      therapistTeamPromise,
      teacherTeamPromise,
      supportingStaffTeamPromise,
    ]);

  return (
    <div className=" bg-gray-50">
      <div className="container py-6 xl:py-16 2xl:py-20 ">
        <div className="flex justify-center">
          <h3 className=" inline-block relative before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[3px] before:rounded-full before:opacity-100 before:bg-gradient-to-l before:from-amber-500 before:to-deep-orange-500">
            Our Team
          </h3>
        </div>
        <DepartmentTab
          teamMembers={{
            managingTeam,
            therapistTeam,
            teacherTeam,
            supportingStaffTeam,
          }}
        />
      </div>
    </div>
  );
}
