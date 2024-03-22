"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ManagementDept from "./ManagementDept";
import SpecialTeacher from "./SpecialTeacher";
import SupportingStaff from "./SupportingStaff";
import Therapists from "./Therapists";

export function DepartmentTab({ teamMembers }) {
  const data = [
    {
      label: "Management",
      value: "management",
      desc: <ManagementDept members={teamMembers.managingTeam} />,
    },
    {
      label: "Therapists",
      value: "therapists",
      desc: <Therapists members={teamMembers.therapistTeam} />,
    },
    {
      label: "Teachers",
      value: "teachers",
      desc: <SpecialTeacher members={teamMembers.teacherTeam} />,
    },
    {
      label: "Staffs",
      value: "staff",
      desc: <SupportingStaff members={teamMembers.supportingStaffTeam} />,
    },
  ];
  return (
    <Tabs value="management" className=" pt-6 xl:pt-10">
      <TabsHeader className=" rounded-md">
        {data.map(({ label, value }) => (
          <Tab key={value} value={value}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {data.map(({ value, desc }) => (
          <TabPanel key={value} value={value}>
            {desc}
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
