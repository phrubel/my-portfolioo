import React, { useEffect } from 'react';
import './Skill.css'
import Footer from '../Footer/Footer';
import AOS from 'aos';

const Skills = () => {

    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])

    return (
        <>
            <section className='skills  pt-5 pb-5 background'>
                <h1 className="text-center title">MY <span>Education & Skills</span></h1>
                <div className='container mb-5 mt-5'>

                    <div className="row text-white">
                        <div data-aos="fade-up-right" className="col-md-6">
                            <h3>Education & Courses</h3>
                            <div className='shadow pb-3 p-3'>
                                <h5>Web Developer - Programming Hero  Jan/2021-Apr/2021</h5>
                                <h5>Dhaka,Bangladesh</h5>
                            </div>
                            <div className='mt-5 shadow pb-3 p-3'>
                                <h5>Bachelor of Business Administration - National University   2015-2021</h5>
                                <h5>Gaibandha,Rongpur,Bangladesh</h5>
                            </div>
                            <div className='mt-5 shadow pb-3 p-3'>
                                <h5>Higher Secendary Certificate - Dinajpur Education Board   2013-2015</h5>
                                <h5>Gaibandha,Rongpur,Bangladesh</h5>
                            </div>
                        </div>

                        <div data-aos="fade-up-left" className="col-md-6">
                            <h3>Expertise</h3>
                            <div className="technology mb-5 shadow pb-3 p-3'"><span>React</span> <span>React Router</span> <span>JavaScript</span><span>ES6</span><span>REST API</span><span>React Bootstrap</span> <span>Html5</span> <span>Css3</span> </div>
                            <h3 >Comfortable</h3>
                            <div className="technology mb-5 shadow pb-3 p-3'"><span>Node.js</span><span>Express.js</span><span>MongoDB</span><span>Firebase</span><span>Material UI</span> <span>Sass</span></div>
                            <h3>Familiar</h3>
                            <div className="technology shadow pb-3 p-3'"><span>React Native</span><span>Redux</span></div>
                            <h3>Tools</h3>
                            <div className="technology shadow pb-3 p-3'"><span>Git</span><span>Heroku</span><span>Netlify</span><span>NPM</span><span>VS Code</span></div>
                        </div>

                    </div>
                </div>

            </section>
            <Footer></Footer>
        </>
    );
};

export default Skills;