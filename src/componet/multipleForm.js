import React,{useState} from 'react'
function MultipleForm() {
   const[fullName,setFullName]=useState({
      name:"",
      lastname:"",
      email:"",
      mob:""
   })
   const handle=(e)=>{
    let name=e.target.name;
    let value=e.target.value;  
    setFullName({...fullName,[name]:value});       
   }
   const [record,setRecord]=useState([]);
   const onSubmit=(e)=>{
      e.preventDefault();
      const newRecord={...fullName,id:new Date().getTime().toString()}
      setRecord([...record,newRecord])
      setFullName({name:"",lastname:"",email:"",mob:""})
   }
return (
<>

<div class="container multiInput"> 
   <h3>Multiple Input Field Data fetch in curret Page</h3>
   <div className='row'>
     <div className='col-lg-6'>
       <h3>Output:</h3>
       {
         record.map((itme)=>{
            return(
               <div>
                 <h4>First Name:{itme.name}</h4>
                 <h4>Last Name:{itme.lastname}</h4>
                 <h4>Email:{itme.email}</h4>
                 <h4>Mob:{itme.mob}</h4>
               </div>
            )
         })
       }
     </div>
     <div className='col-lg-6'>
     <form onSubmit={onSubmit}>
     <div className=''>
        <input 
        type="text" 
        placeholder='First Name'
        name="name"
        id="name"
        value={fullName.name}
        onChange={handle}
        />
     </div>
     <div>
       <input 
       type="text"
      name="lastname" 
      id="lastname"
      value ={fullName.lastname}
      placeholder='Last Name'
      onChange={handle}
       />
     </div>
     <div>
     <input 
     type="email" 
     placeholder='Enter Your Email'
     name='email'
     id="email"
     value={fullName.email}
     onChange={handle}
     />
     </div>
     <div>
     <input
      type="text"
      placeholder='Mobile No'
      name='mob'
      id='mob'
      value={fullName.mob}
      onChange={handle}
       />
     </div>
     <div>
     <button type='submit'>Submit</button>
     </div>
  </form>
     </div>
   </div>
 

</div>
</>
)
}
export default MultipleForm;