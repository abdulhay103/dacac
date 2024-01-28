import SectionHeader from "@/components/utils/SectionHeader";
import React from "react";

export default function SingleService({ params }) {
    let serviceId = params.id;
    return (
        <div>
            <SectionHeader
                pathName="services"
                title="services Details"
                desc="Elevating Healthcare through Comprehensive Solutions, At MEC Trade Link, we go beyond being a medical equipment supplier. Our range of services is designed to enhance your healthcare experience."
            />
            <h2>{serviceId}</h2>
        </div>
    );
}
