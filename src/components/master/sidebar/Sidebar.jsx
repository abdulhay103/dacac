import { countUnreadedMassages } from "@/utils/assetsData";
import { SidebarUi } from "./SidebarUi";

export default async function Sidebar() {
    const totalMassage = await countUnreadedMassages("unread");
    return <SidebarUi totalMassage={totalMassage} />;
}
