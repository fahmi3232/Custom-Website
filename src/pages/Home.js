import React from 'react'
import { Container } from 'react-bootstrap'
import CardComp from '../Components/CardComp'
import SliderComp from '../Components/SliderComp'

const Home = () => {
    return (
        <div>
            <Container>
            <SliderComp />
            <CardComp />
            </Container>
        </div>
    )
}

export default Home
