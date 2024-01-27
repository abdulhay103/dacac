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

const data = [
    {
        label: "Management",
        value: "management",
        desc: <ManagementDept />,
    },
    {
        label: "Special-Teacher",
        value: "teachers",
        desc: <SpecialTeacher />,
    },
    {
        label: "Supporting Staff",
        value: "staff",
        desc: <SupportingStaff />,
    },
];

export function DepartmentTab() {
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
