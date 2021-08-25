import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

const NiceCarousel = () => {
	return (
		<Container fluid>
			<Carousel fade>
				<Carousel.Item>
					<Image
						src='images/pexels-andrea-piacquadio-3770140.jpg'
						alt='First image'
						fluid
					/>

					<Carousel.Caption>
						<h3>First slide label</h3>
						<p>
							Nulla vitae elit libero, a pharetra augue
							mollis interdum.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src='images/pexels-andrea-piacquadio-3770140.jpg'
						alt='First image'
						fluid
					/>

					<Carousel.Caption>
						<h3>Second slide label</h3>
						<p>
							Lorem ipsum dolor sit amet, consectetur
							adipiscing elit.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<Image
						src='images/pexels-andrea-piacquadio-3770140.jpg'
						alt='First image'
						fluid
					/>
					<Carousel.Caption>
						<h3>Third slide label</h3>
						<p>
							Praesent commodo cursus magna, vel
							scelerisque nisl consectetur.
						</p>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</Container>
	);
};

export default NiceCarousel;
