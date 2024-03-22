import AllServices from "@/components/services/AllServices";
import CtaSection from "@/components/utils/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";
import { getServices } from "@/utils/assetsData";

export default async function Services() {
  const services = await getServices(6);
  return (
    <>
      <SectionHeader
        pathName="services"
        title="Our services"
        desc="Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience."
      />
      <AllServices services={services} />
      <CtaSection
        title="Want to be a beneficiary of our dedicated service?"
        para1="At Dream Angels Center for Autistic Children (DACAC), we
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
