import AllServices from "@/components/services/AllServices";
import CtaSection from "@/components/utils/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";
import { getServices } from "@/utils/assetsData";

export default async function Services() {
    const services = await getServices();
    return (
        <>
            <SectionHeader
                pathName="services"
                title="Our services"
                desc="Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience."
            />
            <AllServices services={services} />
            <CtaSection />
        </>
    );
}
