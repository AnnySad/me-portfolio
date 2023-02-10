import React from 'react'
import s from './Project.module.css';

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectLogo} style={props.style}>
                <button className={s.viewBtn}><a href={''}>Watch</a></button>
            </div>


            <div className={s.information}>

                <h3 className={s.proTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
