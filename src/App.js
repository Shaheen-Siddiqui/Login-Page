import React, { useState } from 'react'

const App = () => {

  let [data,setdata]=useState({
    FirstName:"",
    LastName:"",
    Emailaddress:"",
    Password:""
  })

  const InputEvent=(event)=>{
    let {name,value}=event.target;
    setdata((previous)=>{
      return{
        ...previous,
        [name]:value
      }
    })
  }
  
  const Formsubmit=(e)=>{
      e.preventDefault();
      alert(`name${data.FirstName}`)
  }
  return (
    <>
      <div className='outerDiv'>
      <form onSubmit={Formsubmit}>
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">First Name</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Shanaya"
          onChange={InputEvent}
          name='FirstName'
          value={data.FirstName} 

          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Last Name</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="Siddiqa"
          onChange={InputEvent}
          name='LastName'
          value={data.LastName}
          
           />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="name@example.com" 
          onChange={InputEvent}
          name='Emailaddress'
          value={data.Emailaddress}

          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">Password</label>
          <input 
          type="email" 
          className="form-control" 
          id="exampleFormControlInput1" 
          placeholder="npm@123"
          onChange={InputEvent}
          name='Password'
          value={data.Password}
          
           />
        </div>


        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
        <button className='btn-danger medium--dark'>Submit form</button>

        </form>
      </div>
    </>
  )
}

export default App
