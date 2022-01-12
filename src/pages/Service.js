import React from 'react'
import { Container } from 'react-bootstrap'
import CardComp from '../Components/CardComp'
import TableService from '../Components/TableService'


const Service = () => {
    return (
        <div>   
            <Container>
            <TableService />
            <br />
            <CardComp />
            </Container>
        </div>
    )
}

export default Service
