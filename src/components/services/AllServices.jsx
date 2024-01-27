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
        title: "Therapeutic Recreation Program",
        subTitle: "Promote & develop self-awareness",
        details:
            "Offer a comprehensive service where educators, psychologists, and therapists collaborate to create customized IEPs for students with special needs. This service would involve assessment, goal setting, progress tracking, and regular updates to ensure each student's unique requirements are met.",
    },
    {
        img: CustomSolutions,
        title: "Comprehensive IEP Service",
        subTitle: "Personalized educational plans ",
        details:
            " We understand that each healthcare environment is unique. Our team works closely with you to create custom solutions that align with your budget, space, and functionality requirements.",
    },
    {
        img: CustomSolutions,
        title: "Skills Development Program",
        subTitle: "Social interaction, and communication skills",
        details:
            " Develop a structured social skills development program tailored to the needs of students with special needs. This program aims to enhance students' social competence, interpersonal communication, and relationship-building skills in various social contexts.",
    },
    {
        img: TrainingSupport,
        title: "Behavioral and Intervention",
        subTitle: " Empowering Your Team",
        details:
            "Develop a program that provides behavioral assessment, intervention planning, and ongoing support for students with behavioral challenges. This service would involve collaboration with behavior analysts, psychologists, and educators to develop effective behavior management strategies and create a positive learning environment for all students.",
    },
    {
        img: MaintenanceServices,
        title: "Family Support and Education",
        subTitle: " Ensuring Longevity and Reliability",
        details:
            "Offer workshops, support groups, and individual counseling sessions for families of students with special needs. Topics could include understanding their child's diagnosis, navigating the education system, advocating for their child's needs, and accessing community resources. This service aims to empower families and strengthen their ability to support their child's education and development.",
    },
    {
        img: ProjectManagement,
        title: "Speech and Language Therapy",
        subTitle: "Seamless Execution, Every Time",
        details:
            "Provide specialized speech and language therapy services for students with communication disorders. This service would involve assessment, individualized therapy sessions, group therapy activities, and collaboration with educators to support language development and communication skills in the classroom.",
    },
    {
        img: GlobalSourcing,
        title: "Sensory Integration Program",
        subTitle: "Access to the Best Worldwide",
        details:
            "Develop a sensory integration program that addresses the sensory processing needs of students with special needs. This program would include sensory-based activities, environmental modifications, and therapeutic interventions designed to help students regulate their sensory experiences and improve their ability to participate in daily activities.",
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
