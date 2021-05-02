import React from 'react';
import project1 from '../../../image/project10.png'
import project2 from '../../../image/project20.png'
import project3 from '../../../image/project30.png'
import project4 from '../../../image/project40.png'
import project5 from '../../../image/project5.png'
import project6 from '../../../image/project6.png'
import Footer from '../Footer/Footer';
import ProjectInfo from './ProjectData/ProjectInfo';
import './Prooject.css'
import MouseParticles from 'react-mouse-particles'



const projectData = [
    {
        title: "Regal Repairs",
        desc: " It is Mern Stack Project.Payment Method are integrated.It is fully authenticated by Google authentication.Admin can add service, manage service and see all customer order.There has a dashboard which give access to different route between admin and user.",
        codeLinks: "https://github.com/phrubel/regal-repairs-client",
        liveLinks: "https://regal-repairs.web.app/",
        image: project1
    },
    {
        title: "E-Store",
        desc: " It is Mern Stack Project. It is fully Responsive website.It is fully authenticated by Google authentication. Admin can add service and see the all Order List.There has a dashboard which give access to different route between admin and user.",
        codeLinks: "https://github.com/phrubel/e-store-client",
        liveLinks: "https://e-store-196ba.web.app/",
        image: project2
    },
    {
        title: "Ride Share",
        desc: "  It is fully authenticated by Google authentication.In this website customers can book a ride in online after sing in.Customers can create an account for himself by sing up options.It Has Contain Google map api.",
        codeLinks: "https://github.com/phrubel/ride-share",
        liveLinks: "https://ride-share-eec6b.web.app/",
        image: project3
    },
    {
        title: "Team Pedia",
        desc: " Team Pedia is a multiple page web app,based on react router. One of the uses of this app is to know all the information of the English league teams.",
        codeLinks: "https://github.com/phrubel/team-pedia",
        liveLinks: "https://team-pedia.netlify.app/",
        image: project4
    },
    {
        title: "Discover Fly",
        desc: "Discover Fly is a Online ticket Booking Sytem.Based on Vanila Javascript.Customer can Booking a tciket via date and time",
        codeLinks: "https://github.com/phrubel/Discover-Fly",
        liveLinks: "https://phrubel.github.io/Discover-Fly/",
        image: project5
    },
    {
        title: "Fancy Slider",
        desc: "Fancy Slider is a fantastic slider making Sytem.User easyli can makes a slider with time duration.Based on pure Javascript ",
        codeLinks: "https://github.com/phrubel/fancy-slider",
        liveLinks: "https://phrubel.github.io/Fancy-Slider/index.html",
        image: project6
    }
]

const Project = () => {
    return (
        <>
        <section style={{background:"#111a2b"}}>
            <div className="container pb-5 pt-5">
                
                    <h2 className='title'>Recent Projects</h2>
                
                <div className="row py-5">
                    {
                        projectData.map(project => <ProjectInfo project={project}></ProjectInfo>)
                    }
                </div>
            </div>
            <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
        </section>
        <Footer></Footer>
        </>
    );
};
export default Project;