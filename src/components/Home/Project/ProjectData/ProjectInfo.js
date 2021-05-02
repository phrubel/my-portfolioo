import React from 'react';
import './ProjectInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';


const ProjectInfo = (props) => {
    const { title, desc, image, codeLinks, liveLinks } = props.project
    return (
        <div className="col-lg-4 col-md-6 col-12 my-sm-3 my-3 text-center">
            <div className="card h-100">
                <img style={{ height: '200px' }} src={image} class="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title text-white">{title}</h5>
                    <p className="card-text text-justify text-white">{desc}</p>
                    <div className="siteLink">
                        <div className="pt-2">
                            <span><a className="text-color mr-3 " href={codeLinks} target="/blank"><FontAwesomeIcon className="icon-style h3" icon={faGithub} /> <span></span></a></span>
                            <span><a className="text-color" href={liveLinks} target="/blank"><FontAwesomeIcon className="icon-style h4" icon={faExternalLinkAlt} /> <span></span></a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectInfo;

