import React from "react";

function Pagination(props: any) {
  const { totalSongs, songsPerPage, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalSongs / songsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="Page navigation example">
      <ul className="flex list-style-none">
        <li className="page-item ">
          <a
            onClick={() => {
              if (currentPage > 1) paginate(currentPage - 1);
            }}
            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#"
            tabIndex={-1}
            aria-disabled="true"
          >
            Previous
          </a>
        </li>

        {pageNumbers.map((number) => {
          if (number === currentPage) {
            return (
              <li className="page-item active">
                <a
                  onClick={() => paginate(number)}
                  className="page-link relative block py-1.5 px-3 border-0 bg-[#C362F7] outline-none transition-all duration-300 rounded-full text-white hover:text-white hover:bg-[#C362F7] shadow-md focus:shadow-md"
                  href="#"
                >
                  {number} <span className="visually-hidden"></span>
                </a>
              </li>
            );
          } else {
            return (
              <li className="page-item">
                <a
                  onClick={() => paginate(number)}
                  className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
                  href="#"
                >
                  {number}
                </a>
              </li>
            );
          }
        })}

        <li className="page-item">
          <a
            onClick={() => {
              if (currentPage < pageNumbers.length) {
                paginate(currentPage + 1);
              }
            }}
            className="page-link relative block py-1.5 px-3 border-0 bg-transparent outline-none transition-all duration-300 rounded-full text-gray-800 hover:text-gray-800 hover:bg-gray-200 focus:shadow-none"
            href="#"
          >
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
