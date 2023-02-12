import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header from '../../components/Header'
import TabComponent from '../../components/tab-navs/TabComponent';


function Dashboard() {

  const [name, setName] = useState('')

  useEffect(() => {
    const config = {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    }

    axios.get("customer/me", config)
      .then(res => {
        console.log(res.data.firstname)
        setName(res.data.firstname)
        console.log(name)
      }).catch(err => {
        console.log(err)
      })
  }, [])

  return (

    <div>
      <Header />
      <TabComponent />
      

    </div>

  )
}

export default Dashboard