import React, {Component} from 'react';
import './Skill.scss'
import '../InfoBar/Detais'
import '../SkillsListe/index'
import "react-sweet-progress/lib/style.css";

class Skill extends Component {
    state= {
        showInfo: false ,
    };
    handelInfo = () =>{
        this.setState({
            showInfo:!this.state.showInfo

        });
    };

    render() {
        const {languge, img,Info,progress} = this.props.tour
        const {removeTour} = this.props;
        
        return (
            <article className="post">
                <div className="img-container">
                    <img src={img} alt=""/>
                </div>
                <div className="post-info">
                    <h3>{languge}</h3>
                    <h4>
                        <span><progress value={progress} max="100"></progress></span>
                        <span className="pourcent">{progress}%</span>
                    </h4>
                    <h5>
                        <div>
                            Mehr
                            <span onClick={this.handelInfo}>
                            <i className="fa fa-caret-square-o-down" aria-hidden="true"></i>
                            </span>
                        </div>


                    </h5>
                    {this.state.showInfo && <div>
                        <h4 className="extra-info"></h4><p className="extra-reponse">{Info[0]}</p>
                        <h4 className="extra-info"></h4><p className="extra-reponse">{Info[1]}</p>
                        <h4 className="extra-info"></h4><p className="extra-reponse">{Info[2]}</p>
                        <h4 className="extra-info"></h4><p className="extra-reponse">{Info[3]}</p>
                    </div>}

                </div>
            </article>
        );
    }
}

export default Skill;