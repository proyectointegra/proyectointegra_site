import React from 'react';

const Footer = () => {
    return (
        <footer className="page-footer green">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5 className="white-text">Proyecto Integra</h5>
                        <p className="grey-text text-lighten-4">INTEGRA es una iniciativa social que conecta a instituciones de educación superior, con su población beneficiaria, con el fin de brindarles un soporte educativo integral.</p>
                    </div>
                    <div id="footer-social" className="col l3 s12 offset-l3">
                        <h5 className="white-text">Seguinos</h5>
                        <a id="insta" className="white-text" href="https://www.instagram.com/proyectointegra/" target="_blank"><i className="fab fa-instagram fa-2x"></i></a>
                        <a id="fb" className="white-text" href="https://www.facebook.com/proyectointegraeducacion/" target="_blank"><i className="fab fa-facebook-square fa-2x"></i></a>
                        <a id="blog" className="white-text" href="#!"><i className="fas fa-rss-square fa-2x"></i></a>
                        <a id="mail" className="white-text" href="mailto:proyectointegraeducacion@gmail.com" target="_blank"><i className="far fa-envelope fa-2x"></i></a>
                    </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    &copy; Proyecto Integra Educación 2020
				</div>
            </div>
        </footer>
    );
};

export default Footer;