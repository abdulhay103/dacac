import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export const metadata = {
    title: "Shopping Cart | MEC Trade Link",
    description:
        "The company was established in 2013. The main business for this company is to create technical matters relating to planning, preparation of technical specifications, installation, and management of after-sales services for medical equipment. Mec Trade Link is headed by a proprietor Md Kamrul Hasan who has completed BSC of EEE Dhaka International University of the batch 2006. An Electro-Medical Engineer Md. AL MAMUM, B.Sc (Mechanical from the Philippines). In the year 2013, the company started marketing disposable and other medical-related items. Our marketed brands are well known in the market and in some cases, we are leading the market.",
};

export default function ServicesLayout({ children }) {
    return (
        <section>
            <MainHeader />
            {children}
            <Footer />
        </section>
    );
}
