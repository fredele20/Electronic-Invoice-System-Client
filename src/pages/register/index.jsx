import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { MainBody, FormDiv, Button } from './styles'
import Header from '../../components/Header'

const schema = yup.object().shape({
  firstname: yup.string().min(3).required(),
  lastname: yup.string().required(),
  phone: yup.string().required(),
  address: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})


function RegisterUser() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = async (data) => {
    console.log(data);

    const userData = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      phone: data.phone,
      address: data.address,
      password: data.password
    }

    await axios.post('customer/register', userData)
    .then(function(response) {
      alert("Registration successful, please login to continue.")
      window.location.reload()
      // console.log(response)
      return response.data
    }).catch(err => {
        console.log(err)
    })
  };

  return (
    <div>
      <Header />
      <MainBody>
        <FormDiv>
      
        <form onSubmit={handleSubmit(submitForm)}>
          <h1>Sign Up</h1>

          <div className='input'>

            <div>
              <div className='title'>First Name</div>
              <input 
                type="text" 
                name="firstname" 
                placeholder='please enter your first name' 
                {...register("firstname")} 
              />
              <p>{errors.firstname?.message}</p>
            </div>

            <div>
              <div>Last Name</div>
              <input 
                type="text" 
                name='lastname' 
                placeholder='please entr your last name' 
                {...register("lastname")} />
              <p>{ errors.lastname?.message }</p>
            </div>

            <div>
              <div>Phone Number</div>
              <input 
                type="text" 
                name='phone' 
                placeholder='please enter your phone number' 
                {...register("phone")} />
              <p>{ errors.phone?.message }</p>
            </div>

            <div>
              <div>Address</div>
              <input 
                type="text" 
                name='address' 
                placeholder='please enter your address' 
                {...register("address")} />
              <p>{ errors.address?.message }</p>
            </div>
            

            <div>
              <div>Email</div>
              <input 
                type="text" 
                name='email' 
                placeholder='please enter your email' 
                {...register("email")} 
              />
              <p>{ errors.email?.message }</p>
            </div>
            

            <div>
              <div>Password</div>
              <input 
                type="password" 
                name='password' 
                placeholder='enter your password' 
                {...register("password")} />
              <p>{ errors.password?.message }</p>
            </div>

          </div>

          
          <button type='submit'>Register</button>
        </form>
      </FormDiv>
     </MainBody>
    </div>
  )
}

export default RegisterUser
