import React from 'react';

const Pagination = ({ handlePreviousPage, handleNextPage, currentPage, totalPages, setCurrentPage }) => {
    return (
        <div className=" flex justify-center">

            {/* Previous page button */}
            <button className="bg-blue-200 pr-2 pl-2" onClick={handlePreviousPage} disabled={currentPage === 1}>Prev</button>
            {/* Page number buttons */}
            {Array.from({ length: totalPages }, (_, index) => (
                <button
                    key={index}
                    className={`bg-white w-[1.5rem] h-[1.5rem] mx-1 ${index + 1 === currentPage ? "active" : ""}`}
                    onClick={() => setCurrentPage(index + 1)}
                >
                    {index + 1}
                </button>
            ))}
            {/* Next page button */}
            <button className="bg-blue-200 pr-2 pl-2" onClick={handleNextPage} disabled={currentPage === totalPages}>Next</button>
        </div>
    )
}

export default Pagination