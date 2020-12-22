import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap'

function CarouselFunc({ carouselImages }) {
    const carousel = [
        {
            src: "https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851",
            alt: "First slide",
            title: "First slide label",
            detail: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            src: "https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851",
            alt: "First slide",
            title: "First slide label",
            detail: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
        {
            src: "https://www.natureindex.com/news-blog/image/5e2f8a77d3ff127d0d116851",
            alt: "First slide",
            title: "First slide label",
            detail: "Nulla vitae elit libero, a pharetra augue mollis interdum.",
        },
    ]
    return (<Carousel>
        {carousel.map(item => <Carousel.Item interval={1000}>
            <img
                className="d-block w-100"
                src={item.src}
                alt={item.alt}
            />
            <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
            </Carousel.Caption>
        </Carousel.Item>)}
    </Carousel>
    );
}

export default CarouselFunc;