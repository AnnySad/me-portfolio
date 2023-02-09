import React from 'react';
import s from './Skills.module.css'
import style from "../common/styles/Container.module.css"
import {Skill} from "./skill/Skill";


export const Skills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${style.container} ${s.skillsContainer}`}>
                <h2 className={s.title} >Skills</h2>
                <div className={s.skills}>
                    <Skill title={"JS"} textDescription={"Bla-bla-bla-Bla-bla-bla-Bla-bla-bla" +
                        "-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-" +
                        "Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-"}/>
                    <Skill title={"CSS"} textDescription={"Bla-bla-bla-Bla-bla-bla-Bla-bla-blaBla-bla-bla-"}/>
                    <Skill title={"REACT"} textDescription={"Bla-bla-bla-Bla-bla-bla-Bla-bla-bla" +
                        "-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla-Bla-bla-bla"}/>
                </div>
            </div>
        </div>

    );
};
