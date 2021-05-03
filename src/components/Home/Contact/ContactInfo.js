
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneAlt,
    faEnvelopeOpen,
    faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

const ContactInfo = () => {
    return (
        <section className='container'>
            <h3 className="text-dark">Parvez Hasan Rubel</h3>
            <br />
            <div className="d-md-flex justify-content-between align-items-center pr-3 pb-2">
                <div>
                    <p className="mb-2 text-dark">
                        <FontAwesomeIcon icon={faMapMarkedAlt} className="mr-2" />
             Horipur, Kalir Bazar
            </p>
                    <p className="mb-2 text-dark">Fulchhari, Gaibandha</p>
                </div>
                <div>
                    <p className="mb-0 text-dark">
                        <FontAwesomeIcon icon={faPhoneAlt} className="mr-2" />
              01947-616542 , 01917-505474
            </p>
                    <p className="mb-0 text-dark">
                        <FontAwesomeIcon icon={faEnvelopeOpen} className="mr-2" />
              phrubel42@gmail.com
            </p>
                </div>

            </div>
        </section>
    );
};

export default ContactInfo;