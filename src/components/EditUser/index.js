import { useEffect,useState } from 'react'
import axios from 'axios'
import './index.css'
import { Link,useNavigate,useParams } from 'react-router-dom'

const EditUser = () =>{
  const[data,setData] = useState([])
  const{id} = useParams();
  const [items,setValues] = useState({
    first_name:'',
    last_name:'',
    email:'',
    department:''
  })

  useEffect(()=>{
    axios.put(`https://users-8qua.onrender.com/users/${id}`)
    .then(response=>setData(response.data))
    .catch(error=>console.log(error));
  },) 

  const navigate = useNavigate();

  const onUpdateForm=(event)=>{
    event.preventDefault()
    axios.put(`https://users-8qua.onrender.com/users/${id}`,items)
    .then(response=>{console.log(response)
      navigate('/')
    })
    .catch(error=>console.log(error))
  }
 
  return(
    <div className="edit-container">
       <h1 className='up'>Update User</h1>
    <form className="edit-user-form" onSubmit={onUpdateForm}>
     
      <div className="edit-label-container">
        <label>First Name</label>
        <input type="text" name="firstName" placeholder='Enter First Name' value={data.first_name} onChange={event=>setValues({...items,first_name:event.target.value})}/>
      </div>
      <div className="edit-label-container">
        <label>Last Name</label>
        <input type="text" name="lastName" placeholder='Enter Last Name' value={data.last_name} onChange={event=>setValues({...items,last_name:event.target.value})}/>
      </div>
      <div className="edit-label-container">
        <label>Email</label>
        <input type="text" name="email" placeholder='Enter Email' value={data.email} onChange={event=>setValues({...items,email:event.target.value})}/>
      </div>
      <div className="edit-label-container">
        <label>Department</label>
        <input type="text" name="department" placeholder='Enter Department' value={data.department} onChange={event=>setValues({...items,department:event.target.value})}/>
      </div>
      <div>
      <button type="submit" className='sub'>Submit</button>
      <Link to="/">
      <button type="button" className='back-b'>Back</button>
    </Link>
      </div>
      
    </form>
    </div>
  )
}

export default EditUser