import DirectorsUi from "@/components/directors/DirectorsUi";
import CtaSection from "@/components/utils/CtaSection";
import SectionHeader from "@/components/utils/SectionHeader";

export default async function Directors() {
    return (
        <>
            <SectionHeader pathName="directors" title="Our Supervisors" />
            <DirectorsUi />
            <CtaSection
                para1="Are you thinking of consulting with our consultants? So contact us today for your feedback or suggestions without delay."
                para2="Give the serial by phone or write your opinion in detail in the message. We will contact you as soon as possible."
                ctaText="Get an Appionment"
            />
        </>
    );
}
