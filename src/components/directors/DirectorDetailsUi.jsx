export default function DirectorDetailsUi({ director }) {
    console.log(director);
    return (
        <div className=" py-16 lg:py-24 2xl:py-32">
            <div className="container">
                <div>
                    <div className=" flex gap-2 items-center justify-center pb-3">
                        <div className=" w-3 h-3 bg-blue-500"></div>
                        <h5 className=" uppercase text-blue-500 px-2 font-normal">
                            Honarable <span>{director.name}</span>
                        </h5>
                        <div className=" w-3 h-3 bg-blue-500"></div>
                    </div>
                    <p>
                        <span className="font-medium">{director.name}</span>,
                        with her background in
                        <span className="pl-1 font-medium">
                            {director.profession}
                        </span>
                        , brings a wealth of experience and innovative ideas to
                        our Dream Angels Center for Autistic Children (DACAC)
                        community. She is known for her visionary leadership
                        style and ability to inspire and motivate both students
                        and staff.
                        <span className="pl-1 font-medium">
                            {director.name}
                        </span>
                        is deeply committed to fostering a culture of excellence
                        and continuous improvement, ensuring that every student
                        receives a high-quality education that prepares them for
                        success in the future.
                    </p>
                </div>
            </div>
        </div>
    );
}
