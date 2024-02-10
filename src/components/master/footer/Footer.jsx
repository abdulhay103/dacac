import { getAllBlogs } from "@/utils/assetsData";
import FooterUi from "./FooterUi";

export default async function Footer() {
    let blogs = await getAllBlogs(4);
    return <FooterUi blogs={blogs} />;
}
