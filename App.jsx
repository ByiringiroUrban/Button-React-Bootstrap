import React, { useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
// import {Button, Paragraph} from 'react-bootstrap'



function App() {
return (
  <div className='App'>

    <div className='ms-2'>
    <h1>
        Example heading 1
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h1>
      <h2>
        Example heading 2
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h2>
      <h3>
        Example heading 3
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h3>
      <h4>
        Example heading 4
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h4>
      <h5>
        Example heading 5
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h5>
      <h6>
        Example heading 6
        <Paragraph className='ms-2'>NEW</Paragraph>
      </h6>
    </div>
    <header className='App-header'>
        <Paragraph.Item>
        </Paragraph.Item>
        <div className="primary"> This is button</div><br />
        <button className='btn btn-success'>test button</button>

        <ParagraphGroup>
        <Par>Left</Par>
        <Par>Middle</Par>
        <Par>Right</Par>
      </ParagraphGroup>

      <br />
      <br />

      <MDBBtnGroup shadow='0'>
        <MDBBtn color='secondary'>
          Left
        </MDBBtn>
        <MDBBtn color='secondary'>
          Middle
        </MDBBtn>
        <MDBBtn color='secondary'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='success'>
          Left
        </MDBBtn>
        <MDBBtn color='success'>
          Middle
        </MDBBtn>
        <MDBBtn color='success'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='danger'>
          Left
        </MDBBtn>
        <MDBBtn color='danger'>
          Middle
        </MDBBtn>
        <MDBBtn color='danger'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='warning'>
          Left
        </MDBBtn>
        <MDBBtn color='warning'>
          Middle
        </MDBBtn>
        <MDBBtn color='warning'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='info'>
          Left
        </MDBBtn>
        <MDBBtn color='info'>
          Middle
        </MDBBtn>
        <MDBBtn color='info'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='light'>
          Left
        </MDBBtn>
        <MDBBtn color='light'>
          Middle
        </MDBBtn>
        <MDBBtn color='light'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup>
        <MDBBtn color='dark'>
          Left
        </MDBBtn>
        <MDBBtn color='dark'>
          Middle
        </MDBBtn>
        <MDBBtn color='dark'>
          Right
        </MDBBtn>
      </MDBBtnGroup>

      <br />
      <br />

      <MDBBtnGroup shadow='0'>
        <MDBBtn color='link'>
          Left
        </MDBBtn>
        <MDBBtn color='link'>
          Middle
        </MDBBtn>
        <MDBBtn color='link'>
          Right
        </MDBBtn>
      </MDBBtnGroup>
    </header>
  </div>
  
)
}

export default App
