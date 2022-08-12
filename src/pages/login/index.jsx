import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import axios from "axios"
import { MainBody, FormDiv } from './styles'
import Header from '../../components/Header'

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(5).required()
})


function LoginUser() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const submitForm = async (data) => {
    console.log(data);

    const userData = {
      email: data.email,
      password: data.password
    }

    // await fetch("http://localhost:8080/api/customer/login", {
    //   method: 'POST',
    //   headers: { 'Content-Type': "application/json" },
    //   credentials: 'include',
    //   body: JSON.stringify(userData)
    // })

    await axios.post('customer/login', userData)
    .then(response => {
      console.log(response)
      localStorage.setItem('token', response.data.token)
      // return response.data
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
          <h1>Login</h1>

          <div>Email</div>
          <input 
            type="text" 
            name='email' 
            placeholder='please enter your email' 
            {...register("email")} 
          />
          <p>{ errors.email?.message }</p>

          <div>Password</div>
          <input 
            type="password" 
            name='password' 
            placeholder='enter your password' 
            {...register("password")} />
          <p>{ errors.password?.message }</p>

          <button type='submit'>Login</button>
        </form>
       </FormDiv>
      </MainBody>
    </div>
  )
}

export default LoginUser
