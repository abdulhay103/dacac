import Footer from "@/components/master/footer/Footer";
import MainHeader from "@/components/master/navigation-bar/MainHeader";

export const metadata = {
    title: "Contact Us | MEC Trade Link",
    description:
        "Thank you for your interest in reaching out to us. We value your feedback, inquiries, and any other messages you may have. Please feel free to contact us using the information below- Resister Office: MEC Trade-Link 17/3, Skaton road, Bangla Motor, Dhaka-1312, Bangladesh. Display Center:781/3, West Shewrapara, Mirpur, Dhaka-1216. Phone: +88 01756 173864 & +88 01912 858117 Email: mectradelink@gmail.com",
};

export default function ContactLayout({ children }) {
    return (
        <section>
            <MainHeader />
            {children}
            <Footer />
        </section>
    );
}
