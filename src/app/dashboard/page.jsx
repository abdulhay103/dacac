import OverViewCard from "@/components/dashboard/OverViewCard";
import {
  countUnreadedMassages,
  getUser,
  totalBlogs,
  totalCategoris,
  totalMember,
  totalMemberWithDesig,
  totalService,
  totalSubscriber,
} from "@/utils/assetsData";

export default async function Dashboard() {
  let userPromise = getUser();
  let countBlogsPromise = totalBlogs();
  let countCategoriesPromise = totalCategoris();
  let countMemberPromise = totalMember();
  let manageePromise = totalMemberWithDesig("Management/Admin");
  let therapistPromise = totalMemberWithDesig("Therapist");
  let teacherPromise = totalMemberWithDesig("Special Teacher");
  let staffPromise = totalMemberWithDesig("Office Staff");
  let totalServicePromise = totalService();
  let totalMassagePromise = countUnreadedMassages();
  let totalUnreadedMassagePromise = countUnreadedMassages("unread");
  let countSubscriberPromise = totalSubscriber();

  let [
    user,
    countBlogs,
    countCategories,
    countMember,
    totalManagee,
    totalTherapist,
    TotalTeacher,
    TotalStaff,
    totalServices,
    totalMassage,
    totalUnreadedMassage,
    countSubscriber,
  ] = await Promise.all([
    userPromise,
    countBlogsPromise,
    countCategoriesPromise,
    countMemberPromise,
    manageePromise,
    therapistPromise,
    teacherPromise,
    staffPromise,
    totalServicePromise,
    totalMassagePromise,
    totalUnreadedMassagePromise,
    countSubscriberPromise,
  ]);

  return (
    <section className=" px-8 py-8 2xl:px-10 2xl:py-12">
      <div className=" pb-6">
        <p className=" text-lg">
          Welcome{" "}
          <span className=" font-semibold">
            {user.firstName + " " + user.lastName}
          </span>
        </p>
        <p>See information about your software.</p>
      </div>
      <div className=" flex flex-col lg:flex-row gap-8">
        <div className=" w-full lg:w-2/3 border shadow-md rounded-lg overflow-hidden">
          <h4 className=" text-center bg-gray-700 py-4 text-white ">
            Page Insite Overviews
          </h4>
          <div className=" grid grid-cols-6 gap-5 p-6">
            <OverViewCard
              bgColor="bg-blue-400"
              header="Blog Details"
              contents={[
                {
                  subTitle: "Total Published Blog",
                  counts: countBlogs._count.id,
                },
                {
                  subTitle: "Existing Category",
                  counts: countCategories._count.id,
                },
              ]}
            />
            <OverViewCard
              bgColor="bg-purple-400"
              header="Service Details"
              contents={[
                {
                  subTitle: "Available Services",
                  counts: totalServices._count.id,
                },
                {
                  subTitle: "Upcomming Services",
                  counts: 2,
                },
              ]}
            />

            <OverViewCard
              bgColor="bg-lime-500"
              header="Notice Details"
              contents={[
                {
                  subTitle: "Open Notice",
                  counts: 4,
                },
                {
                  subTitle: "Close Notice",
                  counts: 3,
                },
                {
                  subTitle: "Total Notices",
                  counts: 15,
                },
              ]}
            />
            <OverViewCard
              bgColor="bg-indigo-500"
              header="Review Details"
              contents={[
                {
                  subTitle: "Open Reviews",
                  counts: 6,
                },
                {
                  subTitle: "Total Reviews",
                  counts: 20,
                },
                {
                  subTitle: "rejected Reviews",
                  counts: 5,
                },
              ]}
            />
            <OverViewCard
              bgColor="bg-pink-400"
              header="Staff Details"
              contents={[
                {
                  subTitle: "Total Staff",
                  counts: countMember._count.id,
                },
                {
                  subTitle: "Mangement",
                  counts: totalManagee._count.id,
                },
                {
                  subTitle: "Therapist",
                  counts: totalTherapist._count.id,
                },
                {
                  subTitle: "Special Teacher",
                  counts: TotalTeacher._count.id,
                },
                {
                  subTitle: "Supporting Staff",
                  counts: TotalStaff._count.id,
                },
              ]}
            />
          </div>
        </div>
        <div className=" w-full lg:w-1/3 border shadow overflow-hidden rounded-lg">
          <h4 className=" text-center bg-gray-700 py-4 text-white ">
            Incoming Overviews
          </h4>
          <div className=" p-6 grid gap-6">
            <div className=" w-full 2xl:w-3/4 mx-auto rounded shadow-md overflow-hidden">
              <h6 className=" text-center py-2 bg-green-500 text-white">
                Subcribers
              </h6>
              <div className=" p-4">
                <p>
                  Valid Subscriber
                  <span className="pl-2 font-bold">
                    {countSubscriber._count.id}
                  </span>
                </p>
                <p>
                  Invalid Subscriber
                  <span className="pl-2 font-bold">{3}</span>
                </p>
              </div>
            </div>
            <div className=" w-full 2xl:w-3/4 mx-auto rounded shadow-md overflow-hidden">
              <h6 className=" text-center py-2 bg-blue-500 text-white">
                Massages
              </h6>
              <div className=" p-4">
                <p>
                  Unreaded Massages:
                  <span className="pl-2 font-bold">{totalUnreadedMassage}</span>
                </p>
                <p>
                  Total Massages
                  <span className="pl-2 font-bold">{totalMassage}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
