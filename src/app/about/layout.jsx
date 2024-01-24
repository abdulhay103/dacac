import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export const metadata = {
    title: "About | Dream Angels Centre for Autistic Children (DACAC)",
    description:
        "Dream Angels Centre for Autistic Children (DACAC) is a specialized centre for physically and mentally challenged children between the ages of 2- 8 years especially with symptoms of AUTISM. DACAC is run and managed by professional speech therapists, occupational therapists, physiotherapists and special educators ably supported by caregivers and administrative staff.",
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
