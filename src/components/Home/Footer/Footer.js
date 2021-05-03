import React from 'react';
import './Footer.css';

const Footer = () => {

    return (
    <section>
        <footer className="footer">
            <div className="footer-left col-md-4 col-sm-6">
             
            </div>

            <div className="footer-right col-md-4 col-sm-6">
                <small className='text-white'>Copyright {(new Date()).getFullYear()} | All Rights Reserved</small><br/>
                <small className='text-white'>Developed With Pure ♥ Love By <a href="https://web.facebook.com/parvezhasanrubel42/"> Parvez Hasan Rubel.</a></small>
            </div>
        </footer>
    </section>

    );
};

export default Footer;