import ProductConsultation from "/public/services/Product-Consultation.png";
import CustomSolutions from "/public/services/Custom-Solutions.png";
import TrainingSupport from "/public/services/Training-and-Support.png";
import MaintenanceServices from "/public/services/Maintenance-Services.png";
import ProjectManagement from "/public/services/Project-Management.png";
import GlobalSourcing from "/public/services/Global-Sourcing.png";
class data {
    servicesArray = [
        {
            id: 1,
            img: ProductConsultation,
            title: "Therapeutic Program",
            subTitle: "Promote & develop self-awareness",
            details:
                "Offer a comprehensive service where educators, psychologists, and therapists collaborate to create customized IEPs for students with special needs. This service would involve assessment, goal setting, progress tracking, and regular updates to ensure each student's unique requirements are met.",
        },
        {
            id: 2,
            img: CustomSolutions,
            title: "Comprehensive IEP Service",
            subTitle: "Personalized educational plans ",
            details:
                " We understand that each healthcare environment is unique. Our team works closely with you to create custom solutions that align with your budget, space, and functionality requirements.",
        },
        {
            id: 3,
            img: CustomSolutions,
            title: "Skills Development Program",
            subTitle: "Social interaction, and communication skills",
            details:
                " Develop a structured social skills development program tailored to the needs of students with special needs. This program aims to enhance students' social competence, interpersonal communication, and relationship-building skills in various social contexts.",
        },
        {
            id: 4,
            img: TrainingSupport,
            title: "Behavioral and Intervention",
            subTitle: " Empowering Your Team",
            details:
                "Develop a program that provides behavioral assessment, intervention planning, and ongoing support for students with behavioral challenges. This service would involve collaboration with behavior analysts, psychologists, and educators to develop effective behavior management strategies and create a positive learning environment for all students.",
        },
        {
            id: 5,
            img: MaintenanceServices,
            title: "Family Support and Education",
            subTitle: " Ensuring Longevity and Reliability",
            details:
                "Offer workshops, support groups, and individual counseling sessions for families of students with special needs. Topics could include understanding their child's diagnosis, navigating the education system, advocating for their child's needs, and accessing community resources. This service aims to empower families and strengthen their ability to support their child's education and development.",
        },
        {
            id: 6,
            img: ProjectManagement,
            title: "Speech and Language Therapy",
            subTitle: "Seamless Execution, Every Time",
            details:
                "Provide specialized speech and language therapy services for students with communication disorders. This service would involve assessment, individualized therapy sessions, group therapy activities, and collaboration with educators to support language development and communication skills in the classroom.",
        },
        {
            id: 7,
            img: GlobalSourcing,
            title: "Sensory Integration Program",
            subTitle: "Access to the Best Worldwide",
            details:
                "Develop a sensory integration program that addresses the sensory processing needs of students with special needs. This program would include sensory-based activities, environmental modifications, and therapeutic interventions designed to help students regulate their sensory experiences and improve their ability to participate in daily activities.",
        },
    ];

    productType = [
        { id: 1, name: "Newest" },
        { id: 2, name: "Best Selling" },
        { id: 3, name: "Top Rated" },
    ];
}
let assetData = new data();
export { assetData };
