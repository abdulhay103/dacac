import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export const metadata = {
    title: "About | MEC Trade Link",
    description:
        "Welcome to MEC Trade-Link, where technical matters relating to planning, preparation of technical specifications, installation, and management of after-sales services for medical equipment. Our journey began 2013 with a vision to Looking for very far development in the health sector of our country.",
};

export default function AboutLayout({ children }) {
    return (
        <section>
            <MainHeader />
            {children}
            <Footer />
        </section>
    );
}
