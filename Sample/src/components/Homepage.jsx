import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import LeftMenu from './LeftMenu'
import RightSection from './RightSection'
import './Header.css'

function Homepage() {
  const [inputNo, setInputNo] = useState([])
  const [inputChar, setInputChar] = useState()

  const changeNo = (event) => {
    setInputNo(event.target.value, )
  }

  const changeChar = (event) => {
    setInputChar(event.target.value)
  }
  console.log('res', inputNo, inputChar)

  const resetFunc = () => {}
  const submitFunc = () => {}
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <LeftMenu />
        <div style={{ textAlign: 'center', width: '80%' }}>
          <form onSubmit={submitFunc}>
            <label>Input a number:</label>
            <input type="text" value={inputNo} onChange={changeNo} />
            <br />
            <br />
            <label>Input a Charcater:</label>
            <input type="text" value={inputChar} onChange={changeChar} />
            <br />
            <br />
            <span>
              <button onClick={resetFunc} style={{ backgroundColor: 'grey' }}>
                reset
              </button>
              <button onClick={submitFunc} style={{ backgroundColor: 'grey' }}>
                submit
              </button>
            </span>
          </form>

          {inputNo !== undefined && inputChar !== undefined && (
            <div className="createDiv">{inputNo + inputChar} </div>
          )}
          <br />
          <br />
        </div>
        <RightSection />
      </div>

      <Footer />
    </div>
  )
}
export default Homepage
