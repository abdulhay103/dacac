import Image from "next/image";
import Link from "next/link";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TwitterLogo,
} from "@phosphor-icons/react/dist/ssr";

export default function ManagementDept({ members }) {
  return (
    <div className="grid grid-flow-row grid-cols-12 items-center gap-6 lg:gap-8 xl:gap-14 pt-5 lg:pt-6 xl:pt-10">
      {members.map((member) => (
        <div
          key={member.id}
          className="border bg-white border-cyan-500 rounded-md shadow-lg col-span-12 lg:col-span-4 2xl:col-span-3 hover:scale-105 transition-all duration-500"
        >
          <div className="m-5 h-52 xl:h-60 overflow-hidden flex justify-center items-center rounded-md">
            <Image
              src={member.avatar}
              width={250}
              height={200}
              className=" object-cover"
              alt={member.firstName}
            />
          </div>
          <div className="p-6">
            <h6 className=" font-semibold">{member.profession}</h6>
            <p>{member.firstName + " " + member.lastName}</p>
            <p>{member.qualification}</p>
          </div>
          <div className=" flex gap-6 justify-center py-3 bg-cyan-500">
            <Link
              target="_blank"
              href={member.facebook}
              className=" text-gray-100 hover:text-purple-500 transition-all hover:scale-105 hover:rotate-6"
            >
              <FacebookLogo size={24} />
            </Link>
            <Link
              target="_blank"
              href={member.twiter}
              className=" text-gray-100 hover:text-purple-500 transition-all hover:scale-105 hover:rotate-6"
            >
              <TwitterLogo size={24} />
            </Link>
            <Link
              target="_blank"
              href={member.linkedin}
              className=" text-gray-100 hover:text-purple-500 transition-all hover:scale-105 hover:rotate-6"
            >
              <LinkedinLogo size={24} />
            </Link>
            <Link
              target="_blank"
              href={member.instragram}
              className=" text-gray-100 hover:text-purple-500 transition-all hover:scale-105 hover:rotate-6"
            >
              <InstagramLogo size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
