import React from 'react'
import s from './Projects.module.scss';
import styleContainer from '../common/styles/Container.module.css'
import Project from "./project/Project";
import {Title} from "../common/components/title/Title";
import toDoImage from "../assets/image/todolist.jpg"
import socNetImage from "../assets/image/soc-net.jpg"


export function Projects() {
    const socNet = {
        backgroundImage: `url(${socNetImage})`
    };
    const toDo = {
        backgroundImage: `url(${toDoImage})`
    };
    return (
        <div className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Title text={"Projects"}/>
                <div className={s.projects}>
                    <Project style = {socNet}
                             description = {"Watch"}

                      title={"Social network"}
                             description = {"Yo.yo.yo .yo....yo.yo .yo.yo....yo.yo .yo.yo...."}
                    />
                    <Project style = {toDo}
                             description = {"Watch"}
                             title={"Todo list"}
                            description = {"Just do it....just do it....just do it....just do it....just do it....just do it...."}
                    />
                </div>

            </div>
        </div>
    );
}

