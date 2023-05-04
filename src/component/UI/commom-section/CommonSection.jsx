import React from 'react'
import { Container } from 'reactstrap'
import './common-section.css'
const CommonSection = ({ title }) => {
  return (
    <section className='common_section'>
      <Container>
        <h2 className='text-white'>{title || "ShoppingHup"}</h2>
      </Container>
    </section>
  )
}

export default CommonSection