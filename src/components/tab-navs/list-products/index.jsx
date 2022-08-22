import React, { useEffect, useState } from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
// import Header from '../../components/Header'
import { Card, CardDiv, MainBody } from './styles';
import Modal from "../../Modal"
import ToggleContent from '../../ToggleContent'
import Header from '../../Header';
// import { Modal } from '../../components/Modal';

function ListProduct() {

  const [products, setProducts] = useState([])
  const [quantity, setQuantity] = useState(1)

  const incrementQuantity = () => {
    setQuantity(quantity + 1)
  }

  const decrementQuantity = () => {
    if(quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  const config = {
    headers: {
      Authorization: localStorage.getItem("token")
    }
  }

  function parseJWT(token) {
    if(!token) { return; }
    const base64URL = token.split('.')[1]
    const base64 = base64URL.replace('-','+').replace('_', "64")
    return JSON.parse(window.atob(base64))
  }

  let currentUser = parseJWT(localStorage.getItem("token"))

  // const deleteProduct = (productId) => {
  //   axios.delete(`products/${productId}`, config)
  //     .then(res => {
  //       console.log(res.data)
  //       alert("Successfully delete product")
  //     }).catch(err => {
  //       console.log(err)
  //     })
  // }


  useEffect(() => {
    axios.get(`products/ownerProducts/${currentUser._id}`, config)
    .then(res => {
        setProducts(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <MainBody>

      <h1>Available Products</h1>

      <CardDiv>
      {
        products.map(product => 
          <Card className="col-sm-8 col-md-6 col-lg-4 col-xl-4 space" style={{ marginTop: '5%' }} key={product._id}>
            <div className="card custom" style={{ width: "20rem" }}>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
              </div>
              <img src={product.imageURL} className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Description: {product.desc}</li>
                <li className="list-group-item">Available Quantity: {product.qty}</li>
                <li className="list-group-item">Price: ${product.price}</li>
              </ul>
              <div className="card-body">
                <ToggleContent
                  toggle={show => (
                    <div className='buttons'>
                      <button onClick={show}>Update</button>
                      <button className='delete'>Delete</button>
                    </div>
                  )}
                  
                  content={hide => (
                    <Modal>
                      <img src={product.imageURL} alt="" />
                      <p>Price: ${product.price}</p>
                      <p>Total Amount: ${product.price * quantity}</p>
                      <div className="input">
                        <input type="text" value={quantity} />
                        <button className='inc-dec' onClick={decrementQuantity}>-</button>
                        <button className='inc-dec' onClick={incrementQuantity}>+</button>
                      </div> 
                      <div className='prod-button'>
                        <button className='cancel' onClick={hide}>Cancel</button>
                        {/* <button className='buy-product' onClick={() => {buyProduct(product._id); hide() }}>Buy Product</button> */}
                      </div>
                    </Modal>
                  )}
                />
              </div>
            </div>
          </Card>
        )
      }
      </CardDiv>
    </MainBody>
  )
}

export default ListProduct