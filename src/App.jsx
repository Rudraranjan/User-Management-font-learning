
import { useEffect, useState } from 'react'
import './App.css'

function App() {
 
const [users, setUsers] = useState([]);

useEffect(()=>{
  fetch('http://localhost:5000/users')
  .then(res =>res.json())
  .then(data => setUsers(data));
},[])


const handelAddUser = event => {
event.preventDefault();

const form = event.target;
const name = form.name.value;
const email = form.email.value;
const user = {name,email};
console.log(user);
fetch('http://localhost:5000/users', {
  method: 'POST',
  headers: {
    'content-type' : 'application/json'
  },
  body: JSON.stringify(user)
})
.then(res => res.json())
.then(data => {console.log(data);
  const newusers = [...users, data];
  setUsers(newusers);
  form.reset();

})

}

  return (
    <>
      
      <h1>User Managemnet Systems</h1>
      <h3>Numbers of users : {users.length} </h3> 

      <form onSubmit={handelAddUser}> 
        <input type='text' name='name' id=''/>
        <br/><br/><br/>
        <input type='email' name='email' id=''/><br/><br/><br/>
        <input type='Submit' value='Add user'/>

      </form><br/><br/><br/>
      <div>
        {
        users.map(user => <p key={user.id}>{user.id} {user.name} {user.email} </p>)
        }
      </div>
     
    </>
  )
}

export default App
