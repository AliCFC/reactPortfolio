import React, {Component} from 'react';
import styled from 'styled-components';


class Footer extends Component {
    render() {
        return (
            <FooterContainer className="main-footer">
                <div className="footer-middle">
                    <div className="container">
                        <div className="row">
                            {/*Colum1*/}
                            <div className="col-md-3 col-sm-6">
                                <h4>Contact me</h4>
                                <ul className="list-unstyled">
                                    <li>Adresse: Leipzig, Deutschland</li>
                                    <li>Email: ali_amairi@hotmail.fr</li>
                                    <li>Tel: 01788546706</li>
                                </ul>
                            </div>
                            {/*Colum2*/}
                            <div className="col-md-3 col-sm-6">
                                <h4>References</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://rockscissors.netlify.com/" target="_blank">Rock Paper Scissors</a></li>

                                </ul>
                            </div>
                            {/*Colum3*/}
                            <div className="col-md-3 col-sm-6">
                                <h4>Follow me</h4>
                                <ul className="list-unstyled">
                                    <li><a href="https://www.linkedin.com/in/ali-amairi-0a531a185/" target="_blank">linkedin</a></li>
                                    <li><a href="https://github.com/AliCFC" target="_blank">Github</a></li>
                                </ul>
                            </div>
                        </div>

                        {/*Footer Bottom*/}
                        <div className="footer-bottom">
                            <p className="text-xs-center">
                                &copy;{new Date().getFullYear()} Amairi - All Rights Reserved
                            </p>
                        </div>
                    </div>
                </div>
            </FooterContainer>
        );
    }
}

export default Footer;

const FooterContainer = styled.footer`
.footer-middle {
background: #343a40;
padding-top: 4rem;
color: #fff;
position:center;
text-aline: center;
}
.footer-bottom{
padding-top: 3rem;
padding-bottom: 2rem;
}

ul li a {
color: #ececec ;
}
ul li a:hover {
color: #007bff;
}

`;