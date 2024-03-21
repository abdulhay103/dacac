"use client";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import { useState } from "react";
import Link from "next/link";
import { PencilIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Trash } from "@phosphor-icons/react";
import { ErrorToast, SuccessToast } from "@/utils/formHelper";
import { CreateService } from "./CreateService";

const TABLE_HEAD = ["Image", "Member Name", "Designation", "Last Update", ""];

export default function ServicesOverView({ data, itemsPerPage }) {
  const [submit, setSubmit] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / itemsPerPage);
  const handlePrevious = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
  };
  const handleNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
  };
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, data.length);
  const currentData = data.slice(startIndex, endIndex);

  const deleteHandler = async (id) => {
    try {
      setSubmit(true);
      const config = {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: id }),
      };
      const req = await fetch("/api/services", config);
      const res = await req.json();
      if (res.status === "Internal Error!") {
        ErrorToast(res.status);
      } else {
        SuccessToast(res.status);
        window.location.href = "/dashboard/services";
      }
    } catch (e) {
      e.toString();
    } finally {
      setSubmit(false);
    }
  };

  return (
    <Card className="h-full w-full mt-5">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="flex items-center justify-between gap-8 pt-4 px-6">
          <div>
            <Typography variant="h5" color="blue-gray">
              Our Services Over View
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See all service details.
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <CreateService />
          </div>
        </div>
      </CardHeader>
      <CardBody className=" overflow-y-auto px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {currentData.map(
              ({ id, title, subTitle, img, updatedAt }, index) => {
                const isLast = index === currentData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";
                return (
                  <tr key={id}>
                    <td className={classes}>
                      <div className=" h-10 overflow-hidden rounded-md">
                        <Image
                          src={img}
                          width="40"
                          height="40"
                          className=" object-cover"
                          alt={title}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {title}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {subTitle}
                      </Typography>
                    </td>

                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {updatedAt.toLocaleDateString("en-US", {
                          month: "short",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className=" flex gap-4">
                        <Link href={`/dashboard/services/${id}`}>
                          <Tooltip content="Edit Service">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                        </Link>
                        <Tooltip content="Delete Service">
                          <IconButton
                            variant="text"
                            onClick={() => deleteHandler(id)}
                          >
                            <Trash className="h-5 w-5 text-red-500" />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>

      <div className=" flex justify-between items-center py-8 px-6 border-t-2 bg-gray-50">
        <div className=" ">{`Page ${currentPage} of ${totalPages}`}</div>
        <div className=" flex gap-6">
          <button
            className={`px-5 py-2 border-2 border-gray-500 rounded-xl transition-all duration-300  ${
              currentPage === 1
                ? "hover:bg-white"
                : " hover:bg-gray-500 hover:text-white"
            }`}
            onClick={handlePrevious}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <button
            className={`px-5 py-2 border-2 border-gray-500 rounded-xl transition-all duration-300 ${
              currentPage === totalPages
                ? "hover:bg-white"
                : " hover:bg-gray-500 hover:text-white"
            }`}
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </Card>
  );
}
