import React from 'react';
const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="inline-flex -space-x-px text-base h-10 mb-8">
        {pageNumbers.map(number => (
          <li key={number}>
            <a onClick={() => paginate(number)} href='#' className="flex items-center justify-center px-4 h-10 leading-tight text-white bg-gray-800 border border-gray-300 hover:bg-black hover:text-white  ml-1">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;