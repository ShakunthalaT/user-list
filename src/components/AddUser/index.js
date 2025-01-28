import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './index.css';

const AddUser = () => {
  const [items, setItems] = useState({
    first_name: '',
    last_name: '',
    email: '',
    department: '',
  });

  const navigate = useNavigate();

  const addUserForm = (event) => {
    event.preventDefault();
    // Send POST request to add a new user
    axios
      .post('https://users-8qua.onrender.com/users', items)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((error) => console.log(error));
  };

  // Handle change in input fields and update corresponding state values
  const handleChange = (event) => {
    const { name, value } = event.target;
    setItems((prevState) => ({
      ...prevState,
      [name]: value, // Dynamically update the field based on the 'name' attribute
    }));
  };

  return (
    <div className="add-user-container">
      <h1>Add User</h1>
      <form className="add-user-form" onSubmit={addUserForm}>
        <div className="label-container">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            placeholder="Enter First Name"
            value={items.first_name}
            onChange={handleChange}
          />
        </div>
        <div className="label-container">
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            placeholder="Enter Last Name"
            value={items.last_name}
            onChange={handleChange}
          />
        </div>
        <div className="label-container">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter Email"
            value={items.email}
            onChange={handleChange}
          />
        </div>
        <div className="label-container">
          <label>Department</label>
          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={items.department}
            onChange={handleChange}
          />
        </div>
        <div>
          <button type="submit" className='submit-b'>Submit</button>
          <Link to="/">
            <button type="button" className='back'>Back</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
