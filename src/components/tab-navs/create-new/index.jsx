import React, { useState } from 'react'
import axios from "axios"
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { BodyDiv, FormDiv } from './styles'

const schema = yup.object().shape({
  name: yup.string().min(3).required(),
  desc: yup.string(),
  qty: yup.number().required(),
  price: yup.number().required()
})

function CreateProduct() {

  const [selectedFile, setSelectedFile] = useState(null)


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  })

  const onFileChange = event => {
    setSelectedFile(event.target.files[0])
  }

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
      "Content-Type": "multipart/form-data"
    }
  }

  
  const submitForm = async(data) => {

    const formData = {
      name: data.name,
      desc: data.desc,
      qty: data.qty,
      price: data.price,
      image: selectedFile
    }

    await axios.post("products/add-product", formData, config)
      .then(response => {
        console.log(response)
        alert("Successfully added a new product. please check the product page to verify")
        window.location = "/products"
      }).catch(err => {
        console.log(err)
      })
  }

  return (
    <div>
      <BodyDiv>

      <h1>Add new product</h1>
      
      <FormDiv>

        <form onSubmit={handleSubmit(submitForm)}>
          <div className='input'>
            <div>Name</div>
            <input 
              type="text" 
              placeholder='Enter product name'
              {...register("name")}  
            />
            <p>{ errors.name?.message }</p>
          </div>

          <div className='input'>
            <div>Description</div>
            <textarea 
              type="text" 
              placeholder='Enter product description'
              { ...register("desc") } 
            />
            <p>{ errors.desc?.message }</p>
          </div>

          <div className='input'>
            <div>Quantity</div>
            <input 
              type="text" 
              placeholder='Enter product quantity'
              { ...register("qty") } />
              <p>{ errors.qty?.message }</p>
          </div>

          <div className='input'>
            <div>Price</div>
            <input 
              type="text" 
              placeholder='Enter product name'
              { ...register("price") }
            />
            <p>{ errors.price?.message }</p>
          </div>

          <div>
            <div>Product Image</div>
            <input 
              type="file"
              onChange={onFileChange}
            />
          </div>

          <div>
            <button className='submit' type='submit'>Submit</button>
          </div>
        </form>

      </FormDiv>

      </BodyDiv>
    </div>
  )
}

export default CreateProduct