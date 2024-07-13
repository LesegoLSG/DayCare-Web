import React from "react";

const Pagination = ({
  handlePreviousPage,
  handleNextPage,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {
  return (
    <div className=" flex justify-center">
      {/* Previous page button */}
      <button
        className={`button mx-1 ${
          currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handlePreviousPage}
        disabled={currentPage === 1}
      >
        Prev
      </button>
      {/* Page number buttons */}
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          className={`w-[2rem] h-[2rem] mx-1 rounded-md ${
            index + 1 === currentPage ? "bg-black text-white" : "bg-white "
          }`}
          onClick={() => setCurrentPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}
      {/* Next page button */}
      <button
        className={`button mx-1 ${
          currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
        }`}
        onClick={handleNextPage}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
