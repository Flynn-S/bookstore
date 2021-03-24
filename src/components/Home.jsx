import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'
import books from '../data/fantasy.json'


// functional components are great to work with and they can use the props
// but if we want to use the state, we need a CLASS BASED component

class Home extends React.Component {

    state = {
        selectedBook: null
    }

    render() {
        return (
            <Container>
                <Row className="d-flex justify-content-center mt-3">
                    <Col xs={12} md={6}>
                        <Carousel >
                            {
                                books.map(book => (
                                    <Carousel.Item key={book.asin} className='bookCarouselImg'>
                                        <img
                                            className="d-block"
                                            // style={{maxHeight:'600px'}}
                                            src={book.img}
                                            alt={book.title}
                                            onClick={() => this.setState({
                                                selectedDish: book
                                            })}
                                        />
                                        <div className='text-center'>
                                            <h5>{book.title}</h5>
                                            <p>Price £{book.price}</p>
                                        </div>
                                    </Carousel.Item>
                                )
                                )
                            }
                        </Carousel>
                        
                    </Col>
                </Row>
                
            </Container>
        )
    }
}

export default Home