import React from 'react'
import { Button, Container } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const Banner = () => {

    const slides = [
        {
            src: './images/banner1.jpg',
            label: 'First slide label',
            description: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
        },
        {
            src: './images/banner1.jpg',
            label: 'Second slide label',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        // Add more slides as needed
    ];

    return (
        <>
            <Container fluid>
                <Carousel fade>
                    {slides.map((slide, index) => (
                        <Carousel.Item key={index} interval={1000}>
                            <img src={slide.src} alt={slide.label} />
                            <Carousel.Caption>
                                <h3>{slide.label}</h3>
                                <p>{slide.description}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Container>
        </>
    )
}

export default Banner