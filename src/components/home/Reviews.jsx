"use client";

import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ClientImage1 from "/public/users/team-member.png";
import { Rating } from "@material-tailwind/react";

export default function Reviews() {
    return (
        <section className="py-16 xl:py-32 2xl:py-40 bg-blue-500">
            <div className=" w-full xl:w-1/2 mx-auto pb-20">
                <div className=" flex gap-2 items-center justify-center pb-3">
                    <div className=" w-3 h-3 bg-white"></div>
                    <h5 className=" uppercase text-white px-2 font-normal">
                        Our success story
                    </h5>
                    <div className=" w-3 h-3 bg-white"></div>
                </div>
                <div>
                    <h2 className=" text-center text-white text-[28px] lg:text-[36px]">
                        What our guardians say..
                    </h2>
                </div>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={40}
                breakpoints={{
                    960: {
                        slidesPerView: 3,
                    },
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container"
            >
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className=" px-6 py-10">
                    <div className=" px-6 py-10 rounded-3xl border border-1 border-dashed border-spacing-3 border-white">
                        <p className=" text-white">
                            Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Placeat, temporibus dolores est quod eaque
                            quasi eligendi blanditiis perspiciatis dolorum
                            consectetur?
                        </p>
                        <div className=" w-28 h-28 rounded-full overflow-hidden bg-white mx-auto mt-10">
                            <Image
                                src={ClientImage1}
                                width="auto"
                                height="auto"
                                className=" object-cover"
                                alt="Client Image"
                            />
                        </div>
                        <div className=" text-white text-center pt-8">
                            <h4 className=" text-white">Md. Akash Ahmed</h4>
                            <p className=" text-lg font-medium py-1">Teacher</p>
                            <Rating value={4} unratedColor="white" readonly />
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
}
