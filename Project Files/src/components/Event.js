import React from 'react';
import { Link } from 'react-router-dom';
import Eventcard from './Eventcard';
import Slider from "react-slick";
import './carousel.css';

import img_1 from './assets/images/img_1.png'
import img_2 from './assets/images/img_2.png'
import img_3 from './assets/images/img_3.png'
import img_4 from './assets/images/img_4.png'
import img_5 from './assets/images/img_5.png'

export default function Event() {
    const settings1 = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    return (
        <>
            <div style={{ marginBottom: "10rem" }} id="eventsmain"></div>
            <h1 className="main-head">Events</h1>
            <hr style={{ color: "white", width: "50vw", margin: "10px auto" }}></hr>
            <div className='pc-slider' style={{ marginBottom: "40px" }}>
                <Slider {...settings1}>
                    <Eventcard name='Codigo' d="Thrilling coding competition with thought-provoking questions to test your coding skills." imglink={img_1} link='https://getbootstrap.com/' eve={1} />
                    <Eventcard name='Debugger King' d="Prove debugging expertise in challenging scenarios. Compete to solve complex programming issues." imglink={img_2} link='https://getbootstrap.com/' eve={2} />
                    <Eventcard name='Carpe Diem' d="Duo event solving puzzles & problems with two-person teams working together." imglink={img_3} link='https://getbootstrap.com/' eve={3} />
                    <Eventcard name='Wield The Web' d="Submit web dev projects to display creativity & process in exciting event." imglink={img_4} link='https://getbootstrap.com/' eve={4} />
                    <Eventcard name='CTF' d="Brightest in cybersecurity will come together to showcase their skills, creativity, and strategic thinking." imglink={img_5} link='https://getbootstrap.com/' eve={5} />
                </Slider>
            </div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade phone-slider">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img_1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Codigo</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link' /* target='_blank' rel="noopener noreferrer" */ to={`/event1`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Debugger King</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event2`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Carpediem</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event3`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_4} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>Wield The Web</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event4`}>Read more</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img_5} className="d-block w-100" alt="..." />
                        <div className="carousel-caption">
                            <h5>CTF</h5>

                            <button type='submit' className='link-btn'><Link className='nav-link active' /* target='_blank' rel="noopener noreferrer" */ to={`/event5`}>Read more</Link></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
}

