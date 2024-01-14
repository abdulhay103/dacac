import Sidebar from "@/components/master/sidebar/Sidebar";

export const metadata = {
    title: "Dashboard | MEC Trade Link",
    description:
        "The company was established in 2013. The main business for this company is to create technical matters relating to planning, preparation of technical specifications, installation, and management of after-sales services for medical equipment. Mec Trade Link is headed by a proprietor Md Kamrul Hasan who has completed BSC of EEE Dhaka International University of the batch 2006. An Electro-Medical Engineer Md. AL MAMUM, B.Sc (Mechanical from the Philippines). In the year 2013, the company started marketing disposable and other medical-related items. Our marketed brands are well known in the market and in some cases, we are leading the market.",
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
