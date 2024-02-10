"use client";

import { useState } from "react";

export default function NoticePagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const handlePrevious = () => {
        setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
    };
    const handleNext = () => {
        setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages);
    };
    return (
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
    );
}
