import  React from 'react';
import './Navbar.scss';
import  logo from '../../logo.png';
import  Pdf from '../../ali-CV.pdf';

export default function Navbar() {
    return (
        <nav className="navbar">
            <img src={logo} alt='City Tours Logo'/>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">
                        Home
                    </a>
                </li>
                <li>
                    <a href={Pdf} target="_blank" className="nav-link">
                        Lebenslauf
                    </a>
                </li>
                <li>
                    <a href="/" className="nav-link active">
                        Konatkt
                    </a>
                </li>
            </ul>
        </nav>

        );

}
