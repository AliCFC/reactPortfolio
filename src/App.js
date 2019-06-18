import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import SkillsListe from './components/SkillsListe';
import Info from './components/InfoBar/Detais';
import Footer from './components/Footer/Footer'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

function App() {
    return (
        <div>
            <Navbar />
            <Info/>
            <SkillsListe/>
            <Footer/>
            <br/>
        </div>

    );
}

export default App;
