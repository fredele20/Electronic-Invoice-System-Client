import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { ModalDiv } from './styles'


export default function Modal({ children }) {

  const [domReady, setDomReady] = useState(false)

  useEffect(() => {
    setDomReady(true)
  })
  
  return domReady ? ReactDOM.createPortal(
      <ModalDiv>
        <div className="modal">
          {children}
        </div>
      </ModalDiv>,
    document.getElementById('modal-root') 
  ) : null

//   return (
//     <ModalDiv>
//       <div className="modal">
//         {children}
//       </div>
//     </ModalDiv>
// );
  
}
