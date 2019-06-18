import React, {Component} from 'react';
import './Skills.scss';
import Skill from '../Skill/Skill';
import { Data } from './Data';

class SkillsListe extends Component {
    state={
        skills: Data
    };

    render() {
        const {skills} = this.state;
        return (
            <section className="skilllist">
                {skills.map(tour =>{
                    return <Skill key={tour.id} tour={tour}/>;
                })}
            </section>

        );
    }
}

export default SkillsListe;