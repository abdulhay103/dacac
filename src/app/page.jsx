import AcademicInfo from "@/components/home/AcademicInfo";
import ActivitiesCounter from "@/components/home/ActivitiesCounter";
import CertificatesUi from "@/components/home/CertificatesUi";
import FounderUi from "@/components/home/FounderUi";
import Hero from "@/components/home/Hero";
import HeroFAQ from "@/components/home/HeroFAQ";
import { SliderUi } from "@/components/home/SliderUi";
import WhyChoose from "@/components/home/WhyChoose";
import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export default function Home() {
    return (
        <>
            <MainHeader />
            <Hero />
            <AcademicInfo />
            <WhyChoose />
            <HeroFAQ />
            <Footer />
        </>
    );
}
