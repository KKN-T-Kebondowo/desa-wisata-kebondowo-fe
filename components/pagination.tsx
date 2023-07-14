"use client";

import { FC, useState } from "react";

type PaginationProps = {
  totalPages: number;
  initialPage?: number;
};

const Pagination: FC<PaginationProps> = ({ totalPages, initialPage = 1 }) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (pageNumber: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="flex justify-center mt-8 gap-3">
      {Array.from({ length: totalPages }).map((_, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(index + 1)}
          className={`${
            currentPage === index + 1
              ? "bg-blue-500 text-white"
              : "bg-white text-blue-500"
          } hover:bg-blue-500 hover:text-white font-medium py-2 px-4 rounded-full focus:outline-none transition duration-300`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
