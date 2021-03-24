import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap'

const Footer = () => (
    <footer>
        <Container>
            <Row>
                <Col xs={12} md={6} lg={3} className='d-flex flex-column justify-content-center px-0'>
                    {
                    <ul>
                        <li>Book info</li>
                        <li>Media Center</li>
                        <li>Privacy</li>
                        <li>Contact Us</li>
                        <br />
                        <br />
                        <li>Service Code</li>
                        
                    </ul>
                    }
                </Col>
                <Col xs={12} md={6} lg={3} className='px-0'>
                    {
                        <ul>
                        <li>Secuirty</li>
                        <li>Investor Relations</li>
                        <li>Legal Notices</li>
                    </ul>
                    }
                </Col>
            </Row>
        </Container>
        <div className='text-center'>
            <p>
                THIS IS MY FOOTER
            </p>
        </div>
    </footer>

)

export default Footer


        // <footer class="container">
        
        // < class="container">
        //     <div class="row">
        //     <div class="col col-12 col-sm-6 col-lg-3 px-0 footer-info ">
        //         <ul>
        //         <li>Audio and Subtitles</li>
        //         <li>Media Center</li>
        //         <li>Privacy</li>
        //         <li>Contact Us</li>
        //         <br />
        //         <br />
        //         <li>Service Code</li>
        //         <li>&#169 1997-2021 Netflix, Inc.</li>
        //         </ul>
        //     </div>
        //     <div class="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
        //         <ul>
        //         <li>Audio Description</li>
        //         <li>Investor Relations</li>
        //         <li>Legal Notices</li>
        //         </ul>
        //     </div>
        //     <div class="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
        //         <ul>
        //         <li>Help Center</li>
        //         <li>Jobs</li>
        //         <li>Cookie Preferences</li>
        //         </ul>
        //     </div>
        //     <div class="col col-12 col-sm-6 col-lg-3 px-0 footer-info">
        //         <ul>
        //         <li>Gift Cards</li>
        //         <li>Terms of Use</li>
        //         <li>Corporate Information</li>
        //         </ul>
        //     </div>
        //     </div>
        // </>
        // </div>
        // </footer>
