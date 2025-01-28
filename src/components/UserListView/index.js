import { useState } from 'react';
import HomeItems from '../HomeItems';
import './index.css';

const UserListView = (props) => {
  const { usersData } = props;

  // Set the number of items per page and initialize the current page
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the total number of pages
  const totalPages = Math.ceil(usersData.length / itemsPerPage);

  // Function to handle page changes
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Slice the data to show only the items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentUsers = usersData.slice(startIndex, startIndex + itemsPerPage);

  

  return (
    <div>
      <ul className="ul-container">
        <li className="list-items">
        
          <p className="head-line first-name">First Name</p>
          <p className="head-line last-name">Last Name</p>
          <p className="head-line email">Email</p>
          <p className="head-line depart">Department</p>
          <p className="head-line update">Update</p>
          <p className="head-line">Delete</p>
        </li>
        {currentUsers.map((eachUser) => (
          <HomeItems key={eachUser.id} userDetails={eachUser} />
        ))}
      </ul>

      {/* Pagination Controls */}
      <div className="pagination">
        {/* Previous Button */}
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {/* Page Number Buttons */}
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        {/* Next Button */}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserListView;