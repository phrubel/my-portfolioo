
import React from 'react';
import ContactInfo from './ContactInfo';

import Map from './Map/Map'
import GetInTouch from './SendEmail/GetinTouch';


const Contact = () => {
    return (
        <section className="pr-5 py-5 padding-left-85 bg-dark">
            <article className="p-3 bg-white font-weight-bold mt-3 rounded">
                <ContactInfo />
            </article>
            <article>
                <div className="row">
                    <div className="col-sm-7 mt-5 d-flex">
                        <GetInTouch />
                    </div>
                    <div className="col-sm-5 mt-5 d-flex">
                        <Map />
                    </div>
                </div>
            </article>
        </section>
    );
};

export default Contact;