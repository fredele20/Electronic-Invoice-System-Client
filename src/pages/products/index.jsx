import React, { useEffect, useState } from 'react'
import axios from "axios"
import "bootstrap/dist/css/bootstrap.css";
import Header from '../../components/Header'
import { Card, CardDiv, MainBody } from './styles';
import Modal from "../../components/Modal"
import ToggleContent from '../../components/ToggleContent'
// import { Modal } from '../../components/Modal';

function Product() {

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

  const buyProduct = (productId) => {

    const headers = {
      'Authorization': localStorage.getItem("token")
    }
    
    axios.get("customer/me", {headers: headers})
      .then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
        
    const productData = {
      productId: productId,
      qty: quantity
    }
    console.log(productData)
    axios.post("products", productData, { headers: headers })
      .then(res => {
        console.log(res.data)
        console.log("Product successfully puchased")

      }).catch(err => {
        console.log(err)
      })

    setTimeout(() => {
      purchaseSuccess()
    }, 3000)

  }

  const purchaseSuccess = () => {
    console.log("Transaction Successful")
    axios.get("products/downloadPDF",
      { responseType: 'blob' }
    )
      .then(res => {
        const file = new Blob(
          [ res.data ],
          { type: 'application/pdf' }
        )

        const fileURL = URL.createObjectURL(file)

        window.open(fileURL)
      }).catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    axios.get("products/product/list")
    .then(res => {
        setProducts(res.data)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <MainBody>
      <Header />

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
                  toggle={show => <button onClick={show}>Order</button>}
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
                        <button className='buy-product' onClick={() => {buyProduct(product._id); hide() }}>Buy Product</button>
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

export default Product