import React from 'react';
import './About.css'
import mypic from '../../../image/mypic.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import Footer from '../Footer/Footer';
import MouseParticles from 'react-mouse-particles'


const About = () => {
    return (
        <>

            <section className='pb-0 pt-5 pb-md-5 background'>
                <div className='container mb-5'>
                    <div className="row mb-5">
                        <div className="col-md-5 mb-4 m-md-0 aboutImg">
                            <img className='img-fluid' src={mypic} alt="" />
                        </div>
                        <div className="col-md-7 align-self-center">
                            <h3>Hello! I'm <span>Parvez Hasan Rubel</span> </h3>
                            <p> A passionate web developer.I really like to play with good judgment and obsessed with working with new technologies.I've finished the net improvement path from programming hero. my robust point is, I am not fearful of doing new staffs, and therefore a maximum of the time I'm able to research versatile capabilities. and additionally, I am right at teamwork. and ultimate but no longer the least, I enjoy my paintings to the fullest.
                          </p>
                            <a href="https://drive.google.com/file/d/1lXcKZSC3WNBqShs_67VcqaXY7q_Fe7OS/view" target='/blank'>Checkout My Resume</a>

                            <div className="d-flex mt-3">
                                <a href="https://www.facebook.com/parvezhasanrubel42/" target='_blank' rel="noreferrer"> <FontAwesomeIcon className='mr-3 h3' icon={faFacebook} /> </a>
                                <a href="https://www.linkedin.com/in/parvezhasanrubel/" target='_blank' rel="noreferrer"><FontAwesomeIcon className='mr-3 h3' icon={faLinkedin} /></a>
                                <a href="https://github.com/phrubel" target='_blank' rel="noreferrer"><FontAwesomeIcon className='mr-3 h3' icon={faGithub} /></a>
                                <a href="https://medium.com/@phrubel42" target='_blank' rel="noreferrer"><FontAwesomeIcon className='h3' icon={faMedium} /></a>
                            </div>

                        </div>
                    </div>
                </div>
                <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
            </section>
            <Footer></Footer>
        </>
    );
};

export default About;