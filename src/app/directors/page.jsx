import DirectorsList from "@/components/directors/DirectorsList";
import CtaSection from "@/components/utils/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";
import { getDirectors } from "@/utils/assetsData";

export default async function Directors() {
    const directors = await getDirectors();

    return (
        <>
            <SectionHeader pathName="directors" title="Our Supervisors" />
            <DirectorsList directors={directors} />
            <CtaSection
                title="Do you want to get an appointment?"
                para1="Are you thinking of consulting with our consultants? So contact us today for your feedback or suggestions without delay."
                para2="Give the serial by phone or write your opinion in detail in the message. We will contact you as soon as possible."
                ctaText="Get an Appionment"
            />
        </>
    );
}
