import {Link} from 'react-router-dom'
import './index.css'

const HomeItems = props => {
  const {userDetails ,onDelete} = props
  const {id,firstName,lastName,email,department} = userDetails

  const onClickDelete = () => {
    onDelete(id);  // Call the `onDelete` function passed from parent
  };

  return (
    <li className="list-row-container">
      
      <div className="table-container ">
        <p className="text">{firstName}</p>
      </div>
      <div className="table-container last">
        <p className="text">{lastName}</p>
      </div>
      <div className="table-container">
        <p className="text">{email}</p>
      </div>
      <div className="table-container">
        
        <p className="text">{department}</p>
      </div> 
      <div className='button-container'>
      <Link to="/edituser">
       <button type="button" className='edit-btn'>Edit</button>
      </Link>
      </div>
     <div className='button-container'>
     <button type="button" className='delete-btn' onClick={onClickDelete}>Delete</button>
     </div>
      
    </li>
  )
}

export default HomeItems