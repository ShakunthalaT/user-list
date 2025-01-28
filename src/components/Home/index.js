import { useState, useEffect } from "react";
import {ThreeDots} from "react-loader-spinner";
import UserListView from "../UserListView";
import {Link} from 'react-router-dom'
import './index.css'

const Home = () => {
  const [apiResponse, setApiResponse] = useState({
    data: null,
    errorMsg: null,
    isLoading: true,
  });

  useEffect(() => {
    const getUserData = async () => {
      setApiResponse({
        data: null,
        errorMsg: null,
        isLoading: true,
      });

      const url = "https://users-8qua.onrender.com/users/";
      const options = {
        method: "GET",
      };

      const response = await fetch(url, options);
      const responseData = await response.json();
      console.log(responseData);

      if (response.ok) {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          isLoading: false,
          data: responseData,
        }));
      } else {
        setApiResponse((prevApiDetails) => ({
          ...prevApiDetails,
          errorMsg: responseData.error_msg,
        }));
      }
    };

    getUserData();
  }, []); 

  

  const renderSuccessView = () => {
    const { data } = apiResponse;
    const formattedData = data.map((eachUser) => ({
      id: eachUser.id,
      firstName: eachUser.first_name,
      lastName: eachUser.last_name,
      email: eachUser.email,
      department: eachUser.department,
    }));

    return <UserListView usersData={formattedData} />;
  };

  const renderLoadingView = () => (
    <div className="loading-container">
      <ThreeDots type="ThreeDots" color="#ffffff" height="50" width="50" />
    </div>
  );

  const renderUserData = () => {
    const { isLoading } = apiResponse;
    return isLoading ? renderLoadingView() : renderSuccessView();
  };

  return (
    <> 
    
    <div className="main-container">
      <h1 className ="header">User Management Dashboard</h1>
      <div className="home-container">
        <div className="user-list-text-container">
        <p className="user-list-head">User List</p>
        <Link to="/adduser">
        <button type="button" className="add-user-btn">Add User </button>
        </Link>
       
        </div>
        
        {renderUserData()}
      </div>
      </div>
    </>
  );
};

export default Home;

