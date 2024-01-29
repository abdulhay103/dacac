import CtaSection from "@/components/utils/CtaSection";
import ServiceDetails from "@/components/services/ServiceDetails";
import SectionHeader from "@/components/utils/SectionHeader";
import { getSingleService } from "@/utils/assetsData";

export default async function SingleService({ params }) {
    let serviceId = parseInt(params.id);
    let service = await getSingleService(serviceId);
    return (
        <>
            <SectionHeader
                pathName="services"
                title="services Details"
                desc="Dream Angels Centre for Autistic Children (DACAC) is a specialized centre for physically and mentally challenged children between the ages of 2- 8 years especially with symptoms of AUTISM. DACAC is run and managed by professional speech therapists, occupational therapists, physiotherapists and special educators ably supported by caregivers and administrative staff."
            />
            <ServiceDetails service={service} />
            <CtaSection />
        </>
    );
}
