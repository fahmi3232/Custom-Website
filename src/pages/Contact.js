import React from 'react'
import { Container } from 'react-bootstrap'
import CardComp from '../Components/CardComp'
import ContactComp from '../Components/ContactComp'

const Contact = () => {
    return (
        <div>
            <Container>
            <ContactComp />
            <CardComp />
            </Container>
        </div>
    )
}

export default Contact
