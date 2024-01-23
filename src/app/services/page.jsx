import AllServices from "@/components/services/AllServices";
import CtaSection from "@/components/services/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";

export default function Services() {
    return (
        <>
            <SectionHeader
                pathName="services"
                title="Our services"
                desc="Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience."
            />
            <AllServices />
            <CtaSection />
        </>
    );
}
