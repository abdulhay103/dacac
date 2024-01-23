import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMapArea from "@/components/contact/GoogleMapArea";
import SectionHeader from "@/components/utils/SectionHeader";

export default function Contact() {
    return (
        <>
            <SectionHeader pathName="contact" title="Contact Us" />
            <ContactInfo />
            <GoogleMapArea />
        </>
    );
}
