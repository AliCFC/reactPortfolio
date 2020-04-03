import React, {Component} from 'react';
import './search.scss' ;
import Picture from '../../FotoJet.jpg' ;



class info extends Component {


    render() {
        return (
            <div className="search-feld">

                <span><img className="image"  src={Picture} /></span>
                <span><h1>Sehr geehrte Damen und Herren,</h1> Mein Name ist Ali Amairi und ich bin 30.
                    Bachelor Absolvent des Studiengangs: Information-Kommunikationswissenschaft und Technologie, Spezialitäten: Kommunikationsnetzwerke.
                    Ich verfüge über 24 Monate Erfahrung im IT (IT Administrator Tätigkeiten). Aktuell studiere ich Angewandte Informatik (Letzte Semester).
                    Gebürtig stamme ich aus Tunesien und bin seit 01/2014 in Deutschland. Ich spreche und schreibe Deutsche fließend und meine Englischkenntnisse sind sehr gut.
                    Ich lerne sehr schnell und arbeite hart. Gerne unterstütze ich Sie in Ihren Arbeiten und Anwendungen.
                    Ich bin hochmotiviert und freue mich auf die vielseitige Tätigkeit, die mir eine Position in Ihrem Unternehmen bieten würde.</span>
            </div>
        );
    }
}

export default info;