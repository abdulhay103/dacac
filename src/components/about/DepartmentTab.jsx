"use client";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import ManagementDept from "./ManagementDept";
import BioMedicalDept from "./BioMedicalDept";
import TechnicalDept from "./TechnicalDept";

const data = [
    {
        label: "Management",
        value: "management",
        desc: <ManagementDept />,
    },
    {
        label: "Bio-Medical",
        value: "bio-medical",
        desc: <BioMedicalDept />,
    },
    {
        label: "Technical",
        value: "technical",
        desc: <TechnicalDept />,
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
