import React from 'react'
import s from './Project.module.scss';

function Project(props) {
    return (
        <div className={s.project}>
            <div className={s.projectLogo} style={props.style}>
                <a className={s.viewBtn} href={''}>Watch</a>
            </div>

            <div className={s.information}>
                <h3 className={s.proTitle}>{props.title}</h3>
                <span className={s.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Project;
