import MassageList from "@/components/inbox/MassageList";
import { getAllMassage } from "@/utils/assetsData";

export default async function Inbox() {
    let allMassage = await getAllMassage();
    return <MassageList allMassage={allMassage} />;
}
