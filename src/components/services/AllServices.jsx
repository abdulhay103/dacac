import Image from "next/image";
import ProductConsultation from "/public/services/Product-Consultation.png";
import CustomSolutions from "/public/services/Custom-Solutions.png";
import TrainingSupport from "/public/services/Training-and-Support.png";
import MaintenanceServices from "/public/services/Maintenance-Services.png";
import ProjectManagement from "/public/services/Project-Management.png";
import GlobalSourcing from "/public/services/Global-Sourcing.png";

const servicesArray = [
    {
        img: ProductConsultation,
        title: "Product Consultation",
        subTitle: "Guidance at Your Fingertips",
        details:
            "Our knowledgeable team is ready to assist you in selecting the right medical equipment for your specific needs. Whether you are setting up a new facility or upgrading existing equipment, count on us for expert advice.",
    },
    {
        img: CustomSolutions,
        title: "Custom Solutions",
        subTitle: "Tailored to Your Requirements",
        details:
            " We understand that each healthcare environment is unique. Our team works closely with you to create custom solutions that align with your budget, space, and functionality requirements.",
    },
    {
        img: TrainingSupport,
        title: "Training and Support",
        subTitle: " Empowering Your Team",
        details:
            "Maximize the potential of your medical equipment with our comprehensive training programs. From product demonstrations to in-depth usage guides, we ensure your team is well-equipped to provide the best care.",
    },
    {
        img: MaintenanceServices,
        title: "Maintenance And Services",
        subTitle: " Ensuring Longevity and Reliability",
        details:
            "Our commitment to your success extends beyond the sale. Benefit from our maintenance services, ensuring that your equipment operates at peak performance, minimizing downtime, and prolonging its lifespan.",
    },
    {
        img: ProjectManagement,
        title: "Project Management",
        subTitle: "Seamless Execution, Every Time",
        details:
            "Embarking on a new project? Let us handle the logistics. Our project management team ensures a smooth process, from planning to installation, allowing you to focus on patient care.",
    },
    {
        img: GlobalSourcing,
        title: "Global Sourcing",
        subTitle: "Access to the Best Worldwide",
        details:
            "Tap into our global network to source the latest and most advanced medical equipment. We ensure you have access to cutting-edge technologies and innovations from around the world.",
    },
];
export default function () {
    return (
        <div className=" container py-10">
            <div className="grid grid-flow-row grid-cols-12 items-center gap-8 lg:gap-10 xl:gap-12 py-10 lg:py-12 xl:py-16 2xl:py-20">
                {servicesArray.map((item, index) => (
                    <div
                        key={index}
                        className=" p-5 lg:p-6 col-span-12 lg:col-span-4 gap-6 lg:gap-8 xl:gap-10 min-h-[430px] border rounded-md bg-white shadow-lg hover:shadow-xl hover:text-white hover:bg-deep-orange-500 transition-all"
                    >
                        <div className=" flex flex-col gap-5 items-center justify-center">
                            <div className=" w-28 h-28 lg:w-32 lg:h-32 overflow-hidden bg-white rounded-full">
                                <Image
                                    src={item.img}
                                    width="auto"
                                    height="auto"
                                    className=" object-cover"
                                    alt="Product Consultation"
                                />
                            </div>
                            <div className=" text-center">
                                <h4 className="pt-2 capitalize">
                                    {item.title}
                                </h4>
                                <p className="font-semibold">{item.subTitle}</p>
                            </div>
                        </div>
                        <p className=" py-3 text-justify">{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
