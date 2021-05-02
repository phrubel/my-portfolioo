import React from 'react';
import './HeaderBanner.css'
import Mypic1 from '../../../image/profile-pic (1).png'
import Typed from 'react-typed';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import MouseParticles from 'react-mouse-particles'
import Particle from './Particle';

const HeaderBanner = () => {
    return (
        <main className='banner d-flex pt-3'>
            <Particle></Particle>
            <div className="container">
                <div className='d-flex justify-content-center text-center'>
                    <div className='banner-text'>
                        <img className='img-fluid imageStyle mb-4' src={Mypic1} alt="" />
                        <h4 class="mb-2 mt-0">Hello I'm</h4>
                        <h1 class=" mt-0">Parvez Hasan Rubel</h1>
                        <h5 className='typed'>
                            <Typed strings={['Web Developer', 'Life time Learner', 'Javascript Lover']}
                                typeSpeed={50}
                                backSpeed={50}
                                loop>
                            </Typed>
                        </h5>
                        <div className="pt-2 icon">
                            <a href="https://www.facebook.com/parvezhasanrubel42/" target='_blank' rel="noreferrer"> <FontAwesomeIcon className='mr-3 h3' icon={faFacebook} /> </a>
                            <a href="https://www.linkedin.com/in/parvezhasanrubel/" target='_blank' rel="noreferrer"><FontAwesomeIcon className='mr-3 h3' icon={faLinkedin} /></a>
                            <a href="https://github.com/phrubel" target='_blank' rel="noreferrer"><FontAwesomeIcon className='mr-3 h3' icon={faGithub} /></a>
                            <a href="https://medium.com/@phrubel42" target='_blank' rel="noreferrer"><FontAwesomeIcon className='h3' icon={faMedium} /></a>

                        </div>

                        <div>
                            <a class="btn btn-success mt-3" href="https://drive.google.com/uc?export=download&id=1lXcKZSC3WNBqShs_67VcqaXY7q_Fe7OS" role="button" target="_blank" rel="noreferrer" >Download Resume</a>
                        </div>

                    </div>
                </div>

            </div>
            <MouseParticles g={1} color="random" cull="col,image-wrapper" />
        </main>
    );
};

export default HeaderBanner;








