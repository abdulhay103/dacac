import Sidebar from "@/components/master/sidebar/Sidebar";

export const metadata = {
    title: "Dashboard | Dream Angels Centre for Autistic Children (DACAC)",
    description:
        "Dream Angels Centre for Autistic Children (DACAC) is a specialized centre for physically and mentally challenged children between the ages of 2- 8 years especially with symptoms of AUTISM. DACAC is run and managed by professional speech therapists, occupational therapists, physiotherapists and special educators ably supported by caregivers and administrative staff.",
};

export default function DashboardLayout({ children }) {
    return (
        <section className="grid grid-flow-col grid-cols-12 gap-6 min-h-screen relative">
            <div className=" xl:col-span-3 2xl:col-span-2 fixed">
                <Sidebar />
            </div>
            <div className="w-[1000px] 2xl:w-[1500px] absolute right-0">
                {children}
            </div>
        </section>
    );
}
