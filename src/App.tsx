import React from 'react'
import './App.css'
import {Routes, Route, Link} from "react-router-dom"
import CompanyList from './pages/CompanyList'
import CompanyDetails from './pages/CompanyDetails'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col><Link to='/'><Image src='/logo192.png' className='logo' alt="Kompany logo" role="logo"/></Link></Col>
      </Row>
      <Container>
        <Routes>
          <Route path="/" element={<CompanyList/>}/>
          <Route path="companies/:id" element={<CompanyDetails/>}/>
        </Routes>
      </Container>
    </Container>
  )
}

export default App
