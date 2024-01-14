import ContactInfo from "@/components/contact/ContactInfo";
import GoogleMapArea from "@/components/contact/GoogleMapArea";
import SectionHeader from "@/components/utils/SectionHeader";

export default function Contact() {
    return (
        <>
            <SectionHeader
                title="Contact Us"
                desc="Thank you for your interest in reaching out to us. We
                      value your feedback, inquiries, and any other messages
                      you may have. Please feel free to contact us using the
                      information below-"
            />
            <ContactInfo />
            <GoogleMapArea />
        </>
    );
}
