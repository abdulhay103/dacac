import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export const metadata = {
    title: "Our Services | MEC Trade Link",
    description:
        "Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience.",
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
