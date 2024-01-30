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
                details="details"
                title="services Details"
                desc="Dream Angels Centre for Autistic Children (DACAC) is a specialized centre for physically and mentally challenged children between the ages of 2- 8 years especially with symptoms of AUTISM. DACAC is run and managed by professional speech therapists, occupational therapists, physiotherapists and special educators ably supported by caregivers and administrative staff."
            />
            <ServiceDetails service={service} />
            <CtaSection
                para1=" At Dream Angels Center for Autistic Children (DACAC), we
                        believe that every child has the potential to thrive and
                        succeed. Our dedicated team of educators is committed to
                        providing a nurturing and inclusive learning environment
                        where students can grow academically, socially, and
                        emotionally."
                para2="Whether you're a prospective parent exploring our school
                        for the first time or a current member of our community,
                        we're delighted to have you here. From our rigorous
                        academic programs to our enriching extracurricular
                        activities, we offer a diverse range of opportunities to
                        inspire and empower every student."
                ctaText="Contact us!"
            />
        </>
    );
}
