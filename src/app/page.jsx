import ActivitiesCounter from "@/components/home/ActivitiesCounter";
import CertificatesUi from "@/components/home/CertificatesUi";
import FounderUi from "@/components/home/FounderUi";
import Hero from "@/components/home/Hero";
import { SliderUi } from "@/components/home/SliderUi";
import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export default function Home() {
    return (
        <>
            <MainHeader />
            {/* <SliderUi /> */}
            <Hero />
            <ActivitiesCounter />
            <FounderUi />
            <CertificatesUi />
            <Footer />
        </>
    );
}
