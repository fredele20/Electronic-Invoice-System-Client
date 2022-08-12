import React from 'react'
import Header from '../../components/Header'
import { ContentDiv, HomeContainer } from './styles'

export default function Home() {
  return (
    <div>
      <Header />
      <HomeContainer>
        <ContentDiv>
          <h1>Buy and Sell with <span>AVB</span> stores</h1>
        </ContentDiv>

          <div className='info'>
            <button className='register'>Register</button>
            <button className='login'>Login</button>
          </div>
      </HomeContainer>
    </div>
  )
}
