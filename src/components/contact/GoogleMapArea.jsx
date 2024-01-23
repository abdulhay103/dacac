import { GoogleMapsEmbed } from "@next/third-parties/google";
export default function GoogleMapArea() {
    return (
        <div className=" container py-7 lg:py-8 xl:py-10 2xl:py-12 pb-10 mb-6 xl:mb-10">
            <h6 className="pb-6">
                <span className=" font-semibold">Location Map:</span> For your
                convenience, here's a map showing our school location.
            </h6>
            <GoogleMapsEmbed
                apiKey={process.env.GOOGLE_API_KEY}
                height={400}
                width="100%"
                mode="place"
                q="Dream Angels Centre for Autistic Children (DACAC), Dhaka, Bangladesh"
            />
        </div>
    );
}
