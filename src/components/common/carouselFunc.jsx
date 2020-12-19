import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'

function CarouselFunc({ carouselImages }) {
    const [carouselList, setCarouselList] = useState([])

    useEffect(() => setCarouselList(carouselImages))

    return (<Carousel>
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src="https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851"
                alt="First slide"
            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src="https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src="https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851"
                alt="Third slide"
            />
            <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    );
}

export default CarouselFunc;