import React from 'react'
import style from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./skill/Skill";
import {Title} from "../common/components/title/Title";

export function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={"Skills"}/>
                <div className={style.skills}>
                    <Skill title={"JS"}
                           description={"yo.yo.yo .yo....yo.yo .yo.yo....yo.yo .yo.yo...."}/>
                    <Skill title={"Css"}
                           description={"bla-bla-bla...bla-bla-bla.....bla-bla-bla....bla-bla-bla...."}/>
                    <Skill title={"React"}
                           description={"just do it....just do it....just do it....just do it....just do it....just do it....just do it...."}/>
                </div>
            </div>
        </div>
    );
}

;
