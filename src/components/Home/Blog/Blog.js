import React, { useEffect } from 'react';
import blog1 from '../../../image/webdevelop.jpg'
import blog2 from '../../../image/inter img.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Blog.css'
import Footer from '../Footer/Footer';
import AOS from 'aos';


const Blog = () => {

    useEffect(() => {
        AOS.init({ duration: 3000 })
    }, [])

    return (

        <div className="blog">
            <h1 className="title">MY <span>BLOGS</span></h1>
            <div className="row pb-0 pt-5 pb-md-5 m-auto mt-5">
                <div data-aos="fade-down-right" className="col-md-4">
                    <div class="card m-auto" style={{ width: "22rem", height: '33rem' }}>
                        <img src={blog1} class="card-img-top img-fluid"  alt="..." />
                        <div class="card-body">
                            <a target="_blank" href="https://phrubel42.medium.com/know-all-about-web-developer-38541c7a195b" rel="noreferrer">
                                <h5 class="card-title mb-4">Know All About Web Developer</h5>
                            </a>
                            <p class="card-text">Web development is the system of building websites and programs for the internet, or for a personal network known as an intranet. web development is not worried about the layout of a website; rather,.</p>
                            <div className="project-action">

                                <a target="_blank" rel="noreferrer" href="https://phrubel42.medium.com/know-all-about-web-developer-38541c7a195b">

                                    <FontAwesomeIcon className="icon-style h4" icon={faExternalLinkAlt} />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div data-aos="fade-down-left" className="col-md-4">
                    <div class="card m-auto" style={{ width: "22rem", height: '33rem', overflow:"hidden" }}>
                        <img src={blog2} style={{ height:"220px"}} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                            <a target="_blank" href="https://phrubel42.medium.com/7-react-js-job-interview-questions-cb9b74ea5561" rel="noreferrer">
                                <h5 class="card-title mb-4">7 React JS Job Interview Questions</h5>
                            </a>
                            <p class="card-text">Tip: ok, fundamental sounding query, however that’s the thing: it’s so fundamental you may not have a succinct definition on hand. and that’s precisely why interviewers ask this simple but telling .</p>
                            <div className="project-action">

                                <a target="_blank" rel="noreferrer" href="https://phrubel42.medium.com/7-react-js-job-interview-questions-cb9b74ea5561">

                                    <FontAwesomeIcon className="icon-style h4" icon={faExternalLinkAlt} />

                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-4'>

                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Blog;