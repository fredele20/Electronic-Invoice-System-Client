import React, { useState, useEffect } from 'react'
import axios from "axios"
import { StyledDiv, TitleDiv } from './styles'



function BoughtTransactions() {

  const [ transactions, setTransactions ] = useState([])

  useEffect(() => {
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
    console.log(currentUser)


    axios.get(`products/product/buyers-transactions/${currentUser._id}`, config)
      .then((res) => {
        console.log(res.data)
        setTransactions(res.data)
      }).catch(err => console.log(err))
  }, [])

  return (
    <div>
      <TitleDiv>
        <div>Product Name</div>
        <div>Seller's Name</div>
        <div>Invoice</div>
      </TitleDiv>
      {
        transactions.map(transaction => 
            <StyledDiv key={transaction._id}>
              <div className='prodName'>{transaction.productName}</div>
              <div className='sellName'>{transaction.sellerName}</div>
              <div className='invoice'><a href={transaction.fileURL} target="blank">invoice</a></div>
              {/* <div>{transaction.fileURL}</div> */}
            </StyledDiv>
          )
      }
    </div>
  )
}

export default BoughtTransactions