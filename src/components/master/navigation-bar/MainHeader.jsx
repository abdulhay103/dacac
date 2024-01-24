import { getUser } from "@/utils/assetsData";
import { NavbarUi } from "./NavbarUi";

export default async function MainHeader() {
    let user = await getUser();
    return <NavbarUi user={user} />;
}
