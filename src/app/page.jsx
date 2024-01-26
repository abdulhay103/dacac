import AcademicInfo from "@/components/home/AcademicInfo";
import ActivitiesCounter from "@/components/home/ActivitiesCounter";
import AdmissionFAQ from "@/components/home/AdmissionFAQ";
import Hero from "@/components/home/Hero";
import HeroFAQ from "@/components/home/HeroFAQ";
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
            <ActivitiesCounter />
            <AdmissionFAQ />
            <Footer />
        </>
    );
}
